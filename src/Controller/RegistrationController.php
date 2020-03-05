<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\LoginFormAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator, \Swift_Mailer $mailer, $fromModal = false): Response
    {
        if (!empty($request) && !empty($request->query->get('fromModal')))
        {
            $fromModal = true;
        }

        if ($this->getUser()) {
            $this->addFlash('notice', 'You are Already logged in.');
            return $this->redirectToRoute('home');
        }

        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setUsername($user->getmail());
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            //set token for account confirmation and set account to not confirmed
            $user->setToken(hash('md5', random_bytes(10)));
            $user->setConfirmed(false);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // do anything else you need here, like send an email
            //sending confirmation mail here
            $token = $user->getToken();
            $name = $user->getName();
            $this->registerMail($mailer, $token, $user->getMail(), $name);
            $this->addFlash('notice', 'Thank you ' . $name . '. We sent you an email with a link to confirm your account');

            // do anything else you need here, like send an email

            return $guardHandler->authenticateUserAndHandleSuccess(
                $user,
                $request,
                $authenticator,
                'main' // firewall name in security.yaml
            );
        }

        if ($fromModal === true)
        {
            return $this->render('registration/register.html.twig', [
                'registrationForm' => $form->createView(),
                'fromModal' => true,
            ]);
        }
        else {
            return $this->render('registration/register.html.twig', [
                'registrationForm' => $form->createView(),
            ]);
        }
    }


    /**
     * @Route("/edituser", name="app_edituser")
     */
    public function editUser(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator): Response
    {
        if (!empty($request) && !empty($request->query->get('fromModal')))
        {
            $fromModal = true;
        }
        else {
            $fromModal = false;
        }
        if (($user = $this->getUser())) {
            $form = $this->createForm(RegistrationFormType::class, $user);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                // encode the plain password
                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $form->get('plainPassword')->getData()
                    )
                );

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();

                // do anything else you need here, like send an email

                return $guardHandler->authenticateUserAndHandleSuccess(
                    $user,
                    $request,
                    $authenticator,
                    'main' // firewall name in security.yaml
                );
            }

            if ($fromModal === true)
            {
                return $this->render('registration/registerFromModal.html.twig', [
                    'registrationForm' => $form->createView(),
                ]);
            }
            else {
                return $this->render('registration/register.html.twig', [
                    'registrationForm' => $form->createView(),
                ]);
            }
        }
        else {
            $this->addFlash('notice', 'You can\'t edit your profile');
            return $this->redirectToRoute('home');
        }
    }

    public function registerMail(\Swift_Mailer $mailer, string $token, string $usermail, string $name)
    {
        $message = (new \Swift_Message('Finish your inscription'))
                ->setFrom('admin@startsys.com')
                ->setTo($usermail)
                ->setBody(
                    $this->renderView(
                        // templates/emails/registration.html.twig
                        'emails/registration.html.twig',[
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
     * @Route("/registerresentmail/", name="app_register_resent_mail")
     */
    public function registerResentMail(\Swift_Mailer $mailer)
    {
        if (($user = $this->getUser()) && !$user->getConfirmed() && !$user->getResentMailRegister())
        {
            //ensure that user can't spam email resent
            $user->setResentMailRegister(true);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            //

            $this->registerMail($mailer, $user->getToken(), $user->getMail(), $user->getName());
            $this->addFlash('notice', 'We resent the email.');
            return $this->redirectToRoute('home');
        }
        else {
            throw new NotFoundHttpException();
        }
    }
    /**
     * @Route("/confirmaccount/{token}/{name}", name="app_confirm_user_email")
     */
    public function confirmAccount(string $token, string $name): Response
    {
        $manager = $this->getDoctrine()->getManager();
        $user = $manager->getRepository(User::class)->findOneBy(['name' => $name]);
        if (isset($user) && $token === $user->getToken())
        {
            $user->setToken(null);
            $user->setRoles(['ROLE_USER']);
            $user->setConfirmed(true);
            $manager->persist($user);
            $manager->flush();
            $this->addFlash('notice', 'Your account is now confirmed ' . $name . '.');
            return $this->redirectToRoute('home');
        }

        $this->addFlash('error', 'Unvalid token or account already confirmed.');
        return $this->redirectToRoute('home');
    }
}
