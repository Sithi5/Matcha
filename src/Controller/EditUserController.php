<?php

namespace App\Controller;

//symfony component
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;

//entity
use App\Entity\User;
use App\Entity\Picture;

//form
use App\Form\RegistrationFormType;
use App\Security\LoginFormAuthenticator;
use App\Form\ProfilePictureType;
use App\Form\ResetPasswordType;

//service
use App\Service\PictureService;
use App\Service\FileUploader;
use App\Service\NavUserForView;

class EditUserController extends AbstractController
{
    private $em;
    private $pictureService;
    private $navUserForView;

    public function __construct()
    {
        $this->pictureService = new PictureService();
        $this->navUserForView = new NavUserForView;
    }

    /**
     * @Route("/edituser", name="app_edituser")
     */
    public function editUser(Request $request): Response
    {
        if (!($navUser = $this->getUser()) || !$navUser->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and confirmed to see this page.');
            return $this->redirectToRoute('home');
        }

        return $this->render('edit_user/edit_user.html.twig', $this->navUserForView->OutputNavUserInfo($navUser));
    }

    /**
     * @Route("/forgottenpassword", name="app_forgotten_password")
     */
    public function forgottenPassword(Request $request, \Swift_Mailer $mailer): Response
    {
        if ($this->getUser()) {
            $this->addFlash('error', 'You are logged in.');
            return $this->redirectToRoute('home');
        }

        if($request->isMethod('POST')) {
            $this->email = $request->get('email');
            $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['mail' => $this->email]);
            if($user === null) {
                $this->addFlash('error', 'utilisateur non trouvé');
                return $this->redirectToRoute('app_forgotten_password');
            }

            //ensure that user can't spam email resent
            $lastMailSend = $user->getResentMailPasswordTime();
            $now = new \Datetime('now');
            $minutes = abs($lastMailSend->getTimestamp() - $now->getTimestamp()) / 60;
            if ($minutes < 1)
            {
                $this->addFlash('error', 'We already sent you a recovery email. Please check also your spam.');
                return $this->render('edit_user/forgotten_password.html.twig');
            }

            $user->setTokenPassword(hash('md5', random_bytes(10)));
            $token = $user->getTokenPassword();
            $this->email = $user->getMail();
            $name = $user->getName();
            //sending the mail here
            $user->setResentMailPasswordTime(new \DateTime('now'));
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $this->recoverPasswordMail($mailer, $token, $this->email, $name);
            $this->addFlash('notice', 'We Sent you the recovery email.');
            $em->flush();

            return $this->redirectToRoute('home');
        }
        return $this->render('edit_user/forgotten_password.html.twig');
    }



    private function recoverPasswordMail(\Swift_Mailer $mailer, string $token, string $usermail, string $name)
    {
        $message = (new \Swift_Message('Recover your account'))
                ->setFrom('admin@startsys.com')
                ->setTo($usermail)
                ->setBody(
                    $this->renderView(
                        // templates/emails/registration.html.twig
                        'emails/recoverPassword.html.twig',[
                            'name' => $name,
                            'token' => $token,
                        ]
                    ),
                    'text/html'
                )
            ;

        $mailer->send($message);
    }

    /**
     * @Route("/resetpassword/{token}", name="app_reset_password")
     */
    public function resetPassword(Request $request, string $token, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        if ($this->getUser()) {
            $this->addFlash('error', 'You are logged in.');
            return $this->redirectToRoute('home');
        }

        $user = $this->em->getRepository(User::class)->findOneBy(['tokenPassword' => $token]);
        if($user === null) {
            $this->addFlash('error', 'Token not valid');
            return $this->redirectToRoute('home');
        }
        $form = $this->createForm(ResetPasswordType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setTokenPassword(null);
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $user->setResentMailPasswordTime(new \Datetime('now'));
            $em = $this->getDoctrine()->getManager();
            $em->flush();
            $this->addFlash('notice', 'Success ! You can login now with your new password');
            return $this->redirectToRoute('home');
        }

        return $this->render('edit_user/reset_password.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/edituser/profilpicture/{id}", name="app_edituser_profilpicture")
     */
    public function profilPicture(Request $request, $id): Response
    {
        if (!($navUser = $this->getUser()) || !$navUser->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and confirmed to see this page.');
            return new JsonResponse(['data' => 'go_home']);
        }
        $id = (int) $id;

        $em = $this->getDoctrine()->getManager();
        $picture = $em->getRepository(Picture::class)->findOneBy(['id' => $id]);
        if (!$picture)
        {
            $this->addFlash('error', 'No picture found.');
            return new JsonResponse(['data' => 'error']);
        }

        $this->pictureService->setNewProfilePicture($navUser, $picture, $em);
        $this->addFlash('notice', 'Your profil picture is updated!');

        if ($request->isXmlHttpRequest())
        {
            return new JsonResponse(['data' => 'success']);
        }
    }

    /**
    * @Route("/edituser/addpicture", name="app_edituser_addpicture")
    */
    public function addPicture(Request $request): Response
    {
        if (!($navUser = $this->getUser()) || !$navUser->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and confirmed to see this page.');
            return $this->redirectToRoute('home');
        }
        $picture = new Picture();
        $pictureService = $this->pictureService;
        $picture->setUser($navUser);

        $form = $this->createFormBuilder()->getForm();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $request->files->get('file');
            if (!$file)
            {
                $this->addFlash('error', 'You need to send a valid file.');
                return $this->render('edit_user/edit_user_profil_picture.html.twig', array_merge([
                    'form' => $form->createView(),
                ], $this->navUserForView->OutputNavUserInfo($navUser))
                );
            }
            $targetDirectory = "images/user/".md5($navUser->getId()).'/';
            $fileUploader = new FileUploader($targetDirectory);
            $fileName = $fileUploader->upload($file);

            $picture->setName($fileName);
            $picture->setUrl($targetDirectory . $fileName);
            $em = $this->getDoctrine()->getManager();
            $pictureService->addNewPicture($navUser, $picture, $em);
            $this->addFlash('notice', 'Your picture is uploaded!');
        }
        return $this->render('edit_user/edit_user_add_picture.html.twig', array_merge([
            'form' => $form->createView(),
        ], $this->navUserForView->OutputNavUserInfo($navUser))
        );
    }
}
