<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     *
     * @return TreeBuilder
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
                ->booleanNode('optimizePages')
                    ->info('Set to true to optimize pages (results in fully cached html)')
                    ->defaultFalse()
                ->end()
                ->scalarNode('optimizerCommand')
                    ->info('The command used to optimize the html of pages')
                    ->defaultValue('npx amp optimize %%inputPath%% > %%outputPath%% && rm %%inputPath%%')
                ->end()
            ->end();

        return $treeBuilder;
    }
}
