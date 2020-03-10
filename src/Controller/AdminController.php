<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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
    public function user(Request $request, int $page = 0)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN');

        $page < 0 ? $page = 0 : 0;
        $limit = 50;
        $offset = $page * $limit;

        if (!empty($request) && !empty($request->request->get('id')))
        {
            $this->removeUser($request->request->get('id'));
        }
        $repository = $this->getDoctrine()->getRepository(User::class);
        $users = $repository->findAllLimitOffset($limit, $offset);

        return $this->render('admin/user.html.twig', [
            "users" => $users,
            "page" => $page,
        ]);
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
