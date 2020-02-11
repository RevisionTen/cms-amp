<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Twig;

use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use function file_exists;
use function file_get_contents;
use function strpos;

class CmsAmpExtension extends AbstractExtension
{
    /**
     * @var bool
     */
    private $isAmp;

    /**
     * @var array
     */
    private $cms_amp_config;

    /**
     * CmsAmpExtension constructor.
     *
     * @param RequestStack $requestStack
     * @param array        $cms_amp_config
     */
    public function __construct(RequestStack $requestStack, array $cms_amp_config)
    {
        $request = $requestStack->getMasterRequest();

        $this->isAmp = $request && strpos($request->getPathInfo(), '/amp/') === 0;
        $this->cms_amp_config = $cms_amp_config;
    }

    /**
     * {@inheritdoc}
     *
     * @return TwigFilter[]
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('faIcon', [$this, 'faIcon'], [
                'is_safe' => ['html'],
            ]),
        ];
    }

    /**
     * {@inheritdoc}
     *
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('faIcon', [$this, 'faIcon'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('ampScript', [$this, 'ampScript'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('ampBaseScript', [$this, 'ampBaseScript'], [
                'is_safe' => ['html'],
            ]),
        ];
    }

    /**
     * @param string|null $icon
     *
     * @return string
     */
    public function faIcon(?string $icon = null): string
    {
        if (null === $icon) {
            return '';
        }

        $svgPath = $this->cms_amp_config['icon_path'].'/'.$icon.'.svg';

        if (file_exists($svgPath)) {
            $svg = file_get_contents($svgPath);

            return str_replace('<svg ', '<svg class="svg-inline--fa fa-w-16" style="width:1em;height:1em;vertical-align:-.125em;" ', $svg);
        }

        // Todo: Return fallback icon.
        return 'fallback';
    }

    /**
     * @param string|null $name
     * @param float|null  $version
     * @param string|null $type
     *
     * @return string
     */
    public function ampScript(?string $name = null, ?float $version = 0.1, ?string $type = 'element'): string
    {
        if (null === $name) {
            return '';
        }

        $scriptHost = $this->isAmp ? 'https://cdn.ampproject.org/v0/' : '/bundles/cmsamp/amp-dist/rtv/010/v0/';

        return '<script async custom-'.$type.'="'.$name.'" src="'.$scriptHost.$name.'-'.$version.'.js"></script>';
    }

    /**
     * @return string
     */
    public function ampBaseScript(): string
    {
        $script = $this->isAmp ? 'https://cdn.ampproject.org/v0.js' : '/bundles/cmsamp/amp-dist/rtv/010/v0.js';

        return '<script async src="'.$script.'"></script>';
    }
}
