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
use Symfony\Component\HttpFoundation\File\UploadedFile;

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
use Doctrine\ORM\EntityManager;

class EditUserController extends AbstractController
{
    private $em;
    private $pictureService;

    public function __construct()
    {
        $this->pictureService = new PictureService();
    }

    /**
     * @Route("/edituser", name="app_edituser")
     */
    public function editUser(Request $request): Response
    {
        if (!($user = $this->getUser()) || !$user->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and confirmed to see this page.');
            return $this->redirectToRoute('home');
        }

        $profilePictureUrl = $this->pictureService->getProfilePictureUrl($user);
        return $this->render('edit_user/edit_user.html.twig', [
            'controller_name' => 'HomeController',
            'name' => $user->getName(),
            'confirmed' => $user->getConfirmed(),
            'profilePictureUrl' => $profilePictureUrl,
        ]);
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
     * @Route("/edituser/profilepicture", name="app_edituser_profilepicture")
     */
    public function profilePicture(Request $request): Response
    {
        if (!($user = $this->getUser()) || !$user->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and confirmed to change your profile picture.');
            return $this->redirectToRoute('home');
        }

        $picture = new Picture();
        $pictureService = $this->pictureService;
        $picture->setUser($user);
        $form = $this->createForm(ProfilePictureType::class, $picture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $targetDirectory = "images/user/".md5($user->getId()).'/';
            $file = $form->get('file')->getData();
            $fileUploader = new FileUploader($targetDirectory);
            $fileName = $fileUploader->upload($file);

            $picture->setName($fileName);
            $picture->setUrl($targetDirectory . $fileName);
            $em = $this->getDoctrine()->getManager();
            $pictureService->setNewProfilePicture($user, $picture, $em);
        }

        $profilePictureUrl = $pictureService->getProfilePictureUrl($user);
        return $this->render('edit_user/edit_user_profile_picture.html.twig', [
            'form' => $form->createView(),
            'name' => $user->getName(),
            'confirmed' => $user->getConfirmed(),
            'profilePictureUrl' => $profilePictureUrl,
        ]);
    }

    /**
    * @Route("/edituser/addpicture", name="app_edituser_addpicture")
    */
    public function addPicture(Request $request): Response
    {
        if (!($user = $this->getUser()) || !$user->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and confirmed to change your profile picture.');
            return $this->redirectToRoute('home');
        }

        $picture = new Picture();
        $picture->setUser($user);
        $form = $this->createForm(ProfilePictureType::class, $picture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form->get('file')->getData();
            $filePath = "images/user/".md5($user->getId()).'/';
            $fileName= md5(uniqid()).'.'.$file->guessExtension();
            $picture->setName($fileName);

            $file->move($filePath, $fileName);

            $em = $this->getDoctrine()->getManager();
            $em->persist($picture);
            $em->flush();
        }

        $profilePictureUrl = $this->pictureService->getProfilePictureUrl($user);
        return $this->render('edit_user/edit_user_profile_picture.html.twig', [
            'form' => $form->createView(),
            'name' => $user->getName(),
            'confirmed' => $user->getConfirmed(),
            'profilePictureUrl' => $profilePictureUrl,
        ]);
    }
}
