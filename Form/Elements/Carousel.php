<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Form\Elements;

use RevisionTen\CMS\Form\Elements\Element;
use Symfony\Component\Form\FormBuilderInterface;

class Carousel extends Element
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'cms_amp_carousel';
    }
}
