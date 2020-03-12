<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

//service
use App\Service\PictureService;
use App\Service\NavUserForView;

//entity
use App\Entity\User;
use App\Entity\Picture;

class AdminController extends AbstractController
{
    private $pictureService;
    private $navUserForView;

    public function __construct()
    {
        $this->pictureService = new PictureService();
        $this->navUserForView = new NavUserForView;
    }
    /**
     * @Route("/admin", name="admin")
     */
    public function index()
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $navUser = $this->getUser();
        return $this->render('admin/index.html.twig', $this->navUserForView->OutputNavUserInfo($navUser));
    }

    /**
     * @Route("/admin/user/", name="admin_user")
     */
    public function user(Request $request)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        if (!empty($request) && !empty($request->request->get('id')))
        {
            $this->removeUser($request->request->get('id'));
        }
        $repository = $this->getDoctrine()->getRepository(User::class);
        $users = $repository->findAll();

        $navUser = $this->getUser();
        return $this->render('admin/list-user.html.twig', array_merge([
            "users" => $users,
            ], $this->navUserForView->OutputNavUserInfo($navUser))
        );
    }

        /**
     * @Route("/admin/image/", name="admin_image", defaults={"page"=0})
     */
    public function image(Request $request, int $page = 0)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $repository = $this->getDoctrine()->getRepository(Picture::class);
        $pictures = $repository->findAll();

        $navUser = $this->getUser();
        return $this->render('admin/list-image.html.twig', array_merge([
            "pictures" => $pictures,
            ], $this->navUserForView->OutputNavUserInfo($navUser))
        );
    }

    public function removeUser(int $id)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $repository = $this->getDoctrine()->getRepository(User::class);
        $user = $repository->findOneBy(array('id' => $id));
        if (isset($user))
        {
            $em = $this->getDoctrine()->getManager();
            $em->remove($user);
            $em->flush();
        }
    }
}
