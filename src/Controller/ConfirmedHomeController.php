<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

//entity
use App\Entity\User;

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
        $repository = $this->getDoctrine()->getRepository(User::class);
        $users = $repository->findAll();
        return $this->render('confirmed_home/index.html.twig', array_merge([
                'users' => $users,
            ]
            , $this->navUserForView->OutputNavUserInfo($navUser))
        );
    }
}
