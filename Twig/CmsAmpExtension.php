<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Twig;

use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class CmsAmpExtension extends AbstractExtension
{
    /** @var bool */
    private $isAmp;

    /** @var array */
    private $cms_amp_config;

    public function __construct(RequestStack $requestStack, array $cms_amp_config)
    {
        $request = $requestStack->getMasterRequest();

        $this->isAmp = $request && strpos($request->getPathInfo(), '/amp/') === 0;
        $this->cms_amp_config = $cms_amp_config;
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('faIcon', [$this, 'faIcon'], [
                'is_safe' => ['html'],
            ]),
        ];
    }

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

    public function faIcon(?string $icon = null): string
    {
        if (null === $icon) {
            return '';
        }

        $svgPath = $this->cms_amp_config['icon_path'].'/'.$icon.'.svg';

        if (file_exists($svgPath)) {
            return file_get_contents($svgPath);
        }

        // Todo: Return fallback icon.
        return 'fallback';
    }

    public function ampScript(?string $name = null, ?float $version = 0.1, ?string $type = 'element'): string
    {
        if (null === $name) {
            return '';
        }

        $scriptHost = $this->isAmp ? 'https://cdn.ampproject.org/v0/' : '/bundles/cmsamp/amp-dist/rtv/010/v0/';

        return '<script async custom-'.$type.'="'.$name.'" src="'.$scriptHost.$name.'-'.$version.'.js"></script>';
    }

    public function ampBaseScript(): string
    {
        $script = $this->isAmp ? 'https://cdn.ampproject.org/v0.js' : '/bundles/cmsamp/amp-dist/rtv/010/v0.js';

        return '<script async src="'.$script.'"></script>';
    }
}
