<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Controller;

use Doctrine\ORM\EntityManagerInterface;
use RevisionTen\CMS\Model\Alias;
use RevisionTen\CMS\Services\CacheService;
use RuntimeException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function file_exists;
use function file_get_contents;
use function file_put_contents;
use function is_dir;
use function mkdir;
use function sprintf;

/**
 * Class FrontendController.
 */
class FrontendController extends AbstractController
{
    /** @var CacheService */
    protected $cacheService;

    /** @var EntityManagerInterface */
    protected $entityManager;

    /** @var string */
    protected $project_dir;

    /** @var bool */
    protected $optimizePages;

    /** @var string */
    protected $optimizerCommand;

    public function __construct(CacheService $cacheService, EntityManagerInterface $entityManager, string $project_dir, array $config)
    {
        $this->cacheService = $cacheService;
        $this->entityManager = $entityManager;
        $this->project_dir = $project_dir;
        $this->optimizerCommand = $config['optimizerCommand'];
        $this->optimizePages = $config['optimizePages'] && !empty($this->optimizerCommand);
    }

    /**
     * @Route("/", name="cms_amp_page_frontpage_optimized")
     * @Route("/{_locale}", name="cms_amp_page_frontpage_locale_optimized", requirements={
     *     "_locale": "ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|en|eg|eh|er|es|et|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw"
     * })
     *
     * @param Request $request
     * @return Response
     */
    public function frontpageOptimized(Request $request): Response
    {
        if ($this->optimizePages) {
            /** @var Alias|null $alias */
            $alias = $this->entityManager->getRepository(Alias::class)->findMatchingAlias('/', $request->get('websiteId'), $request->getLocale());

            $response = $this->getCachedHTML($alias);
            if (null !== $response) {
                return $response;
            }
        }

        return $this->forward('RevisionTen\CMS\Controller\FrontendController::frontpage');
    }

    /**
     * @Route("/amp/", name="cms_amp_page_frontpage")
     * @Route("/amp/{_locale}", name="cms_amp_page_frontpage_locale", requirements={
     *     "_locale": "ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|en|eg|eh|er|es|et|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw"
     * })
     *
     * @return Response
     */
    public function frontpage(): Response
    {
        return $this->forward('RevisionTen\CMS\Controller\FrontendController::frontpage');
    }

    /**
     * @Route("/{_locale}/{path}", name="cms_amp_page_alias_locale_optimized", requirements={
     *     "path"=".+",
     *     "_locale": "ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|en|eg|eh|er|es|et|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw"
     * })
     * @Route("/{path}", name="cms_amp_page_alias_optimized", requirements={"path"=".+"})
     *
     * @param Request $request
     * @param string $path
     *
     * @return Response
     */
    public function aliasOptimized(Request $request, string $path): Response
    {
        if ($this->optimizePages) {
            /** @var Alias|null $alias */
            $alias = $this->entityManager->getRepository(Alias::class)->findMatchingAlias('/'.$path, $request->get('websiteId'), $request->getLocale());

            $response = $this->getCachedHTML($alias);
            if (null !== $response) {
                return $response;
            }
        }

        return $this->forward('RevisionTen\CMS\Controller\FrontendController::alias', [
            'path' => $path,
        ]);
    }

    /**
     * @Route("/amp/{_locale}/{path}", name="cms_amp_page_alias_locale", requirements={
     *     "path"=".+",
     *     "_locale": "ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|en|eg|eh|er|es|et|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw"
     * })
     * @Route("/amp/{path}", name="cms_amp_page_alias", requirements={"path"=".+"})
     *
     * @param string $path
     *
     * @return Response
     */
    public function alias(string $path): Response
    {
        return $this->forward('RevisionTen\CMS\Controller\FrontendController::alias', [
            'path' => $path,
        ]);
    }

    /**
     * @param Alias $alias
     * @return Response|null
     */
    public function getCachedHTML(?Alias $alias): ?Response
    {
        if (null === $alias) {
            return null;
        }

        if (($pageStreamRead = $alias->getPageStreamRead()) && $pageStreamRead->isPublished()) {
            $pageUuid = $pageStreamRead->getUuid();
            $version = $this->cacheService->getVersion($pageUuid);

            $cacheName = 'page_'.$pageUuid.'_'.$version.'.html';
            $cacheNameOptimized = 'page_'.$pageUuid.'_'.$version.'_optimized.html';
            $cacheDir = $this->project_dir.'/var/htmlcache';
            $filePath = $cacheDir.'/'.$cacheName;
            $filePathOptimized = $cacheDir.'/'.$cacheNameOptimized;

            if (file_exists($filePathOptimized)) {
                $html = file_get_contents($filePathOptimized);
                $response = new Response($html);
            } else {
                $response = $this->forward('RevisionTen\CMS\Controller\FrontendController::renderPage', [
                    'pageUuid' => $pageUuid,
                    'alias' => $alias,
                ]);

                $html = $response->getContent();

                // Make sure cache dir exists.
                if (!is_dir($cacheDir) && !mkdir($cacheDir) && !is_dir($cacheDir)) {
                    throw new RuntimeException(sprintf('Directory "%s" was not created', $cacheDir));
                }

                file_put_contents($filePath, $html);

                // Optimize.
                $optimizerCommand = str_replace(array('%inputPath%', '%outputPath%'), array($filePath, $filePathOptimized), $this->optimizerCommand);
                exec($optimizerCommand);
            }

            return $response;
        }

        return null;
    }
}
