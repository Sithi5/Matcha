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
        if (!($user = $this->getUser()) || !$user->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and have a confirmed account to see this page.');
            return $this->redirectToRoute('home');
        }

        foreach ($user->getPictures() as $picture)
        {
            if ($picture->getProfilePicture() === true)
            {
                $profilePictureName = $picture->getName();
            }
        }
        return $this->render('confirmed_home/index.html.twig', [
            'controller_name' => 'ConfirmedHomeController',
            'name' => $user->getName(),
            'confirmed' => $user->getConfirmed(),
            'profilePictureName' => $profilePictureName,
        ]);
    }
}
