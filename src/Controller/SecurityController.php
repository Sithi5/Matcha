<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils): Response
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last mail entered by the user
        $last_mail = $authenticationUtils->getLastUserName();

        return $this->render('security/login.html.twig', ['last_mail' => $last_mail, 'error' => $error, 'fromModal' => true]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        $this->addFlash('notice', 'You are logged out.');
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}