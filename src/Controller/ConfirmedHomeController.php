<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

//service
use App\Service\PictureService;
use App\Service\NavUserForView;

class ConfirmedHomeController extends AbstractController
{

    private $pictureService;
    private $navUserForView;

    public function __construct()
    {
        $this->pictureService = new PictureService();
        $this->navUserForView = new NavUserForView;
    }

    /**
     * @Route("/confirmed/home", name="confirmed_home")
     */
    public function index()
    {
        if (!($navUser = $this->getUser()) || !$navUser->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and have a confirmed account to see this page.');
            return $this->redirectToRoute('home');
        }

        return $this->render('confirmed_home/index.html.twig', $this->navUserForView->OutputNavUserInfo($navUser));
    }
}
