<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

//entity
use App\Entity\User;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index()
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        return $this->render('admin/index.html.twig', [
        ]);
    }

    /**
     * @Route("/admin/user/{page}", name="admin_user", defaults={"page"=0})
     */
    public function user(int $page = 0)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $page < 0 ? $page = 0 : 0;
        $limit = 50;
        $offset = $page * $limit;

        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        $repository = $this->getDoctrine()->getRepository(User::class);
        $users = $repository->findAllLimitOffset($limit, $offset);
        return $this->render('admin/user.html.twig', [
            "users" => $users,
            "page" => $page,
        ]);
    }

    /**
     * @Route("/admin/removeuser/", name="admin_removeuser")
     */
    public function removeUser(User $user)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');


    }
}
