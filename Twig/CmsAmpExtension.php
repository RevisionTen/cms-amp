<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class CmsAmpExtension extends AbstractExtension
{
    /** @var array */
    private $cms_amp_config;

    public function __construct(array $cms_amp_config)
    {
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

        return '<script async custom-'.$type.'="'.$name.'" src="https://cdn.ampproject.org/v0/'.$name.'-'.$version.'.js"></script>';
    }
}
