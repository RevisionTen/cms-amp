<?php

declare(strict_types=1);

namespace RevisionTen\CMS_AMP\Form\Elements;

use RevisionTen\CMS\Form\Elements\Element;
use RevisionTen\CMS\Form\Elements\ImageSettings;
use RevisionTen\CMS\Form\Types\UploadType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

class Image extends Element
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

        $builder->add('settings', ImageSettings::class, [
            'label' => false,
            'required' => false,
        ]);

        $builder->add('title', TextType::class, [
            'label' => 'element.label.title',
            'translation_domain' => 'cms',
            'constraints' => new NotBlank(),
        ]);

        $builder->add('image', UploadType::class, [
            'label' => 'element.label.image',
            'translation_domain' => 'cms',
            'required' => false,
            'show_file_picker' => true,
            'file_with_meta_data' => true,
        ]);
    }

    /**
     * {@inheritdoc}
     *
     * @return string
     */
    public function getBlockPrefix(): string
    {
        return 'cms_amp_image';
    }
}
