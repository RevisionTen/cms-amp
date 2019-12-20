<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Controller;

use Exception;
use RevisionTen\Forms\Services\FormService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use function array_map;

/**
 * Class FormController.
 *
 * @Route("/amp/forms")
 */
class FormController extends AbstractController
{
    /**
     * @Route("/verify/{formUuid}", name="cms_amp_form_verify")
     *
     * @param Request $request
     * @param FormService $formService
     * @param TranslatorInterface $translator
     * @param string $formUuid
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function verify(Request $request, FormService $formService, TranslatorInterface $translator, string $formUuid): JsonResponse
    {
        $handledRequest = $formService->handleRequest($request, $formUuid, [], false);

        return $this->getAmpFormResponse($translator, $handledRequest);
    }

    /**
     * @Route("/submit/{formUuid}", name="cms_amp_form_submit")
     *
     * @param Request $request
     * @param FormService $formService
     * @param TranslatorInterface $translator
     * @param string $formUuid
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function submit(Request $request, FormService $formService, TranslatorInterface $translator, string $formUuid): JsonResponse
    {
        $handledRequest = $formService->handleRequest($request, $formUuid, []);

        return $this->getAmpFormResponse($translator, $handledRequest);
    }

    /**
     * @param TranslatorInterface $translator
     * @param array $handledRequest
     *
     * @return JsonResponse
     */
    private function getAmpFormResponse(TranslatorInterface $translator, array $handledRequest): JsonResponse
    {
        /**
         * @var FormInterface $form
         */
        $form = $handledRequest['form'];

        $message = $handledRequest['messages'][0] ?? null;
        $success = $message && !empty($message['type']) && 'success' === $message['type'];

        if ($success) {
            return new JsonResponse([
                'message' => $message && $message['message'] ? $message['message'] : $translator->trans('amp.form.text.success'),
            ], 200);
        }

        // Get form errors.
        $formErrors = $form->getErrors(true, true);

        // Build an array of AMP verifyErrors.
        $formName = $form->getName();
        $verifyErrors = [];
        foreach ($formErrors as $error) {
            /**
             * @var FormInterface|null $origin
             */
            $origin = $error->getOrigin();
            $options = $origin ? $origin->getConfig()->getOptions() : null;
            $name = $origin ? $origin->getName() : null;

            $verifyErrors[] = [
                'message' => $error->getMessage(),
                'name' => $name ? $formName.'['.$name.']' : null,
                'label' => $options && !empty($options['label']) ? $options['label'] : null,
            ];
        }

        return new JsonResponse([
            'verifyErrors' => $verifyErrors,
            'baseMessage' => $message && $message['message'] ? $message['message'] : $translator->trans('amp.form.text.error'),
        ], 500);
    }
}
