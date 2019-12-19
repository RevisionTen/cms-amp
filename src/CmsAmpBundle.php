<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP;

use Symfony\Component\HttpKernel\Bundle\Bundle;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class CmsAmpBundle extends Bundle
{
    public const VERSION = '1.0.0';

    /**
     * {@inheritdoc}
     */
    public function boot(): void
    {
    }

    /**
     * {@inheritdoc}
     *
     * @param ContainerBuilder $container
     */
    public function build(ContainerBuilder $container): void
    {
    }
}
