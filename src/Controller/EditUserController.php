<?php

namespace App\Controller;

//symfony component
use App\Security\LoginFormAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

//entity
use App\Entity\User;

//form
use App\Form\ResetPasswordType;


class EditUserController extends AbstractController
{
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
            $email = $request->get('email');
            $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['mail' => $email]);
            if($user === null) {
                $this->addFlash('error', 'utilisateur non trouvé');
                return $this->redirectToRoute('app_forgotten_password');
            }
            if ($user->getResentMailPassword() === true)
            {
                $this->addFlash('error', 'We already sent you a recovery email. Please check also your spam.');
                return $this->render('edit_user/forgotten_password.html.twig');
            }
            else {
                $user->setTokenPassword(hash('md5', random_bytes(10)));
                $token = $user->getTokenPassword();
                $email = $user->getMail();
                $name = $user->getName();

                //sending the mail here
                $user->setResentMailPassword(true);
                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $this->registerPasswordMail($mailer, $token, $email, $name);
                $this->addFlash('notice', 'We Sent you the recovery email.');
                $em->flush();
                return $this->redirectToRoute('home');
            }

            return $this->redirectToRoute('home');
        }
        return $this->render('edit_user/forgotten_password.html.twig');
    }

    private function registerPasswordMail(\Swift_Mailer $mailer, string $token, string $usermail, string $name)
    {
        $message = (new \Swift_Message('Finish your inscription'))
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
     * @Route("/resetpassword{token}", name="app_forgotten_password")
     */
    public function resetPassword(Request $request, string $token, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        if ($this->getUser()) {
            $this->addFlash('error', 'You are logged in.');
            return $this->redirectToRoute('home');
        }

        $em = $this->getDoctrine()->getManager();
        $form = $this->createForm(ResetPasswordType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $em->getRepository(User::class)->findOneBy(['tokenPassword' => $token]);
            if($user === null) {
                $this->addFlash('error', 'User dont\'t exist');
                return $this->redirectToRoute('home');
            }
            $user->setTokenPassword(null);
            $user->setResentMailPassword(false);

            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            $em->flush();
            $this->addFlash('notice', 'Success ! Your password have been modified.');
            return $this->redirectToRoute('home');
        }
        return $this->render('edit_user/reset_password.html.twig', [
            'form' => $form->createView()
        ]);
    }

}
