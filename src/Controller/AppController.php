<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

/**
 * @Route("/", name="app_")
 */
class AppController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(NormalizerInterface $normalizer)
    {
        $message = ["This is a text rendering by reactjs."];
        
        $props = $normalizer->normalize($message, 'json');

        return $this->render('app/index.html.twig', [
            'controller_name' => 'AppController',
            'props' => $props
        ]);
    }
}
