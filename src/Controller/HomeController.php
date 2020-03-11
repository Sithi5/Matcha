<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

//service
use App\Service\PictureService;
use App\Service\NavUserForView;

class HomeController extends AbstractController
{

    private $pictureService;
    private $navUserForView;

    public function __construct()
    {
        $this->pictureService = new PictureService();
        $this->navUserForView = new NavUserForView;
    }

    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        if (($navUser = $this->getUser()))
        {
            return $this->render('home/index.html.twig', $this->navUserForView->OutputNavUserInfo($navUser));
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

}
