<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Controller;

use RevisionTen\Forms\Services\FormService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class FormController.
 *
 * @Route("/amp/forms")
 */
class FormController extends AbstractController
{
    /**
     *
     * @Route("/submit/{formUuid}", name="cms_amp_form_submit")
     *
     * @param Request $request
     * @param FormService $formService
     * @param TranslatorInterface $translator
     * @param string $formUuid
     *
     * @return JsonResponse
     */
    public function submit(Request $request, FormService $formService, TranslatorInterface $translator, string $formUuid): JsonResponse
    {
        $handledRequest = $formService->handleRequest($request, $formUuid, []);

        $message = $handledRequest['messages'][0] ?? null;

        $success = $message && !empty($message['type']) && 'success' === $message['type'];

        if ($success) {
            return new JsonResponse([
                'message' => $message && $message['message'] ? $message['message'] : $translator->trans('amp.form.text.success'),
            ], 200);
        }

        return new JsonResponse([
            'message' => $message && $message['message'] ? $message['message'] : $translator->trans('amp.form.text.error'),
        ], 500);
    }
}
