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
        return $this->render('confirmed_home/index.html.twig', [
            'controller_name' => 'ConfirmedHomeController',
        ]);
    }
}
