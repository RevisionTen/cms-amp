<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Form\Elements;

use RevisionTen\CMS\Form\Elements\Element;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class AmpIframe extends Element
{
    /**
     * {@inheritdoc}
     *
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);

        $builder->add('title', TextType::class, [
            'label' => 'ampIframe.label.title',
        ]);

        $builder->add('src', TextType::class, [
            'label' => 'ampIframe.label.src',
        ]);

        $builder->add('layout', ChoiceType::class, [
            'label' => 'ampIframe.label.layout',
            'choices' => [
                'ampIframe.value.layout.responsive' => 'responsive',
                'ampIframe.value.layout.fixedHeight' => 'fixed-height',
                'ampIframe.value.layout.fixed' => 'fixed',
            ],
        ]);

        $builder->add('width', NumberType::class, [
            'label' => 'ampIframe.label.width',
            'required' => false,
            'html5' => true,
        ]);

        $builder->add('height', NumberType::class, [
            'label' => 'ampIframe.label.height',
            'html5' => true,
        ]);
    }

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function getBlockPrefix(): string
    {
        return 'cms_amp_iframe';
    }
}
