<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

//entity
use App\Entity\User;

//service
use App\Service\PictureService;
use App\Service\NavUserForView;

class ProfilController extends AbstractController
{

    private $pictureService;
    private $navUserForView;

    public function __construct()
    {
        $this->pictureService = new PictureService();
        $this->navUserForView = new NavUserForView;
    }
    /**
     * @Route("/profil/{id}", name="profil")
     */
    public function index(int $id)
    {
        if (!($navUser = $this->getUser()) || !$navUser->getConfirmed())
        {
            $this->addFlash('error', 'You need to be logged in and have a confirmed account to see this page.');
            return $this->redirectToRoute('home');
        }

        $repository = $this->getDoctrine()->getRepository(User::class);
        $profilUser = $repository->findOneBy(array('id' => $id));
        $profilUserProfilPictureUrl = $this->pictureService->getProfilePictureUrl($profilUser);
        $profilUserCoverPictureUrl = $this->pictureService->getCoverPictureUrl($profilUser);
        return $this->render('profil/index.html.twig', array_merge([
            'profilUser' => $profilUser,
            'profilUserProfilPictureUrl' => $profilUserProfilPictureUrl,
            'profilUserCoverPictureUrl' => $profilUserCoverPictureUrl,
            ]
            , $this->navUserForView->OutputNavUserInfo($navUser))
        );
    }
}
