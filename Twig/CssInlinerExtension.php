<?php

namespace RevisionTen\CMS_AMP\Twig;

use TijsVerkoyen\CssToInlineStyles\CssToInlineStyles;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class CssInlinerExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('inline_css_custom', [$this, 'inline_css_custom'], ['is_safe' => ['all']]),
        ];
    }

    public function inline_css_custom(string $body, string ...$css): string
    {
        static $inliner;
        if (null === $inliner) {
            $inliner = new CssToInlineStyles();
        }

        $body =  $inliner->convert($body, implode("\n", $css));

        return str_replace(['<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">
<html><body>', '</body></html>'], '', $body);
    }

}
