<?php

namespace RevisionTen\CMS_AMP\Twig;

use TijsVerkoyen\CssToInlineStyles\CssToInlineStyles;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class CssInlinerExtension extends AbstractExtension
{
    /**
     * {@inheritdoc}
     *
     * @return TwigFilter[]
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('cms_amp_css_inline', [$this, 'cms_amp_css_inline'], [
                'is_safe' => ['all'],
            ]),
        ];
    }

    /**
     * @param string $body
     * @param string ...$css
     *
     * @return string
     */
    public function cms_amp_css_inline(string $body, string ...$css): string
    {
        static $cssInliner;
        if (null === $cssInliner) {
            $cssInliner = new CssToInlineStyles();
        }

        // Do not convert bind attributes.
        $body = str_replace('[src]', 'data-bind-src', $body);

        $body =  $cssInliner->convert($body, implode("\n", $css));

        // Convert back to bind attribute.
        $body = str_replace('data-bind-src', '[src]', $body);

        // Remove unnecessary html tags.
        $search = ['<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">'."\n".'<html><body>', '</body></html>'];

        return str_replace($search, '', $body);
    }
}
