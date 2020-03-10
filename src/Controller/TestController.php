<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

    /**
     * @Route("/test", condition="'dev' === '%kernel.environment%'")
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
        $token = hash('md5', random_bytes(10));
        $message = (new \Swift_Message('Finish your inscription'))
                ->setFrom('admin@startsys.com')
                ->setTo($usermail)
                ->setBody(
                    $this->renderView(
                        // templates/emails/registration.html.twig
                        'emails/registration.html.twig',[
                            'name' => $name,
                            'token' => $token,
                        ]
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
