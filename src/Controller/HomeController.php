<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

//service
use App\Service\PictureService;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        if (($user = $this->getUser()))
        {
            $pictureService = new PictureService();
            $profilePictureUrl = $pictureService->getProfilePictureUrl($user);
            return $this->render('home/index.html.twig', [
                'controller_name' => 'HomeController',
                'name' => $user->getName(),
                'confirmed' => $user->getConfirmed(),
                'profilePictureUrl' => $profilePictureUrl,
            ]);
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

}
