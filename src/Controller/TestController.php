<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

    /**
     * @Route("/test", name="test")
     */
class TestController extends AbstractController
{
    /**
     * @Route("/mail", name="test_mail")
     */
    public function testMail(\Swift_Mailer $mailer)
    {
        $name = "malo";
        $usermail = "ma.sithis@gmail.com";
        $message = (new \Swift_Message('Finish your inscription'))
                ->setFrom('ma.sithis@gmail.com')
                ->setTo($usermail)
                ->setBody(
                    $this->renderView(
                        // templates/emails/registration.html.twig
                        'emails/registration.html.twig',
                        ['name' => $name]
                    ),
                    'text/html'
                )
            ;

        $mailer->send($message);
        return $this->render("test/testMail.html.twig",[
            'controller_name' => 'TestController'
        ]);
    }
}
