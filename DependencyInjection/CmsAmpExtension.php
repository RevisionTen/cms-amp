<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\DependencyInjection;

use Exception;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class CmsAmpExtension extends Extension implements PrependExtensionInterface
{
    /**
     * {@inheritdoc}
     */
    public function load(array $configs, ContainerBuilder $container): void
    {
        $configs = array_reverse($configs);
        $config = array_merge(...$configs);

        $container->setParameter('cms_amp', $config);
    }

    /**
     * {@inheritdoc}
     *
     * @throws Exception
     */
    public function prepend(ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));

        // Load default cms amp config.
        $loader->load('cms.yaml');
        $loader->load('cms_amp.yaml');
        $loader->load('services.yaml');
        $loader->load('config.yaml');
    }
}
