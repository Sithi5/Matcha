<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Console\Output\BufferedOutput;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Dotenv\Dotenv;

    /**
     * @Route("/config")
     */
class ConfigController extends AbstractController
{
    /**
     * @Route("/schemaupdateforce/{password}", name="schema_update_force", requirements={"password"="\d+"})
     */
    public function SchemaUpdateForce(KernelInterface $kernel, int $password)
    {
        $dotenv = new Dotenv();
        $dotenv->load(__DIR__.'/.env');

        if ((int) $password == $_ENV['PASSWORD'])
        {
            $application = new Application($kernel);
            $application->setAutoExit(false);
            $input = new ArrayInput([
                'command' => 'doctrine:schema:update',
                '--force' => true,
            ]);

            $output = new BufferedOutput();
            $application->run($input, $output);

            $content = $output->fetch();
            return $this->render('config/config.html.twig', [
                'content' => $content,
            ]);
        }
        throw new NotFoundHttpException('No route found for "GET /config/droptable/'.$password.'"');
    }

    /**
     * @Route("/schemaupdatedumpsql/{password}", name="schema_update_dump_sql", requirements={"password"="\d+"})
     */
    public function SchemaUpdateDumpSql(KernelInterface $kernel, int $password)
    {
        $dotenv = new Dotenv();
        $dotenv->load(__DIR__.'/.env');

        if ((int) $password == $_ENV['PASSWORD'])
        {
            $application = new Application($kernel);
            $application->setAutoExit(false);
            $input = new ArrayInput([
                'command' => 'doctrine:schema:update',
                '--dump-sql' => true,
            ]);

            $output = new BufferedOutput();
            $application->run($input, $output);

            $content = $output->fetch();
            return $this->render('config/config.html.twig', [
                'content' => $content,
            ]);
        }
        throw new NotFoundHttpException('No route found for "GET /config/droptable/'.$password.'"');
    }

    /**
     * @Route("/schemadropforce/{password}", name="schema_drop_force", requirements={"password"="\d+"})
     */

    public function SchemaDropForce(KernelInterface $kernel, int $password)
    {
        $dotenv = new Dotenv();
        $dotenv->load(__DIR__.'/.env');

        if ((int) $password == $_ENV['PASSWORD'])
        {
            $application = new Application($kernel);
            $application->setAutoExit(false);
            $input = new ArrayInput([
                'command' => 'doctrine:schema:drop',
                '--force' => true,
            ]);

            $output = new BufferedOutput();
            $application->run($input, $output);

            $content = $output->fetch();
            return $this->render('config/config.html.twig', [
                'content' => $content,
            ]);
        }
        throw new NotFoundHttpException('No route found for "GET /config/droptable/'.$password.'"');
    }


    /**
     * @Route("/fixtureload/{password}", name="fixture_load", requirements={"password"="\d+"})
     */
    public function FixtureLoad(KernelInterface $kernel, int $password)
    {
        $dotenv = new Dotenv();
        $dotenv->load(__DIR__.'/.env');

        if ((int) $password == $_ENV['PASSWORD'])
        {
            $application = new Application($kernel);
            $application->setAutoExit(false);
            $input = new ArrayInput([
                'command' => 'doctrine:fixture:load',
            ]);

            $output = new BufferedOutput();
            $application->run($input, $output);

            $content = $output->fetch();
            return $this->render('config/config.html.twig', [
                'content' => $content,
            ]);
        }
        throw new NotFoundHttpException('No route found for "GET /config/droptable/'.$password.'"');
    }
}