<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FrontendController.
 */
class FrontendController extends AbstractController
{
    /**
     * @Route("/amp/", name="cms_amp_page_frontpage")
     *
     * @return Response
     */
    public function frontpage(): Response
    {
        return $this->forward('RevisionTen\CMS\Controller\FrontendController::frontpage');
    }

    /**
     * @Route("/amp/{path}", name="cms_amp_page_alias", requirements={"path"=".+"})
     *
     * @param string  $path
     *
     * @return Response
     */
    public function alias(string $path): Response
    {
        return $this->forward('RevisionTen\CMS\Controller\FrontendController::alias', [
            'path' => $path,
        ]);
    }
}
