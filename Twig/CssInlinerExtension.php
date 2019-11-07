<?php

namespace RevisionTen\CMS_AMP\Twig;

use TijsVerkoyen\CssToInlineStyles\CssToInlineStyles;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class CssInlinerExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('cms_amp_css_inline', [$this, 'cms_amp_css_inline'], [
                'is_safe' => ['all'],
            ]),
        ];
    }

    public function cms_amp_css_inline(string $body, string ...$css): string
    {
        static $cssInliner;
        if (null === $cssInliner) {
            $cssInliner = new CssToInlineStyles();
        }

        $body =  $cssInliner->convert($body, implode("\n", $css));

        // Remove unnecessary html tags.
        $search = ['<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">'."\n".'<html><body>', '</body></html>'];

        return str_replace($search, '', $body);
    }
}
