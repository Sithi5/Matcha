<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        if (($user = $this->getUser()))
        {
            return $this->render('home/index.html.twig', [
                'controller_name' => 'HomeController',
                'name' => $user->getname(),
            ]);
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
