<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('cms_amp');
        $rootNode = $treeBuilder->getRootNode();
        $rootNode
            ->children()
                ->scalarNode('icon_path')
                    ->info('The path to your icon folder (without trailing slash')
                    ->defaultValue('%kernel.project_dir%/assets/fontawesome')
                ->end()
            ->end();

        return $treeBuilder;
    }
}
