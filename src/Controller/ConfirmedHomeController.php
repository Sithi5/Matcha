<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ConfirmedHomeController extends AbstractController
{
    /**
     * @Route("/confirmed/home", name="confirmed_home")
     */
    public function index()
    {
        If (!($user = $this->getUser()))
        {
            $this->addFlash('error', 'You need to be logged in and have a confirmed account to see this page.');
            return $this->redirectToRoute('home');
        }
        return $this->render('confirmed_home/index.html.twig', [
            'controller_name' => 'ConfirmedHomeController',
            'name' => $user->getName(),
            'confirmed' => $user->getConfirmed(),
        ]);
    }
}
