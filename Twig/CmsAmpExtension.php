<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class CmsAmpExtension extends AbstractExtension
{
    /** @var string */
    private $project_dir;

    public function __construct(string $project_dir)
    {
        $this->project_dir = $project_dir;
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
        ];
    }

    public function faIcon(?string $icon = null): string
    {
        if (null === $icon) {
            return '';
        }

        // Todo: Make path configurable.
        $svgPath = $this->project_dir.'/assets/fontawesome/'.$icon.'.svg';

        if (file_exists($svgPath)) {
            return file_get_contents($svgPath);
        }

        // Todo: Return fallback icon.
        return 'fallback';
    }
}
