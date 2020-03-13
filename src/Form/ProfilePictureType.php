<?php

namespace App\Form;

use App\Entity\Picture;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

//form type
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

//validator
use Symfony\Component\Validator\Constraints as Assert;

class ProfilePictureType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('file', FileType::class, [
                'attr' => ['class' => 'file-upload'],
                "mapped" => false,
                "required" => true,
                'constraints' => [
                    new Assert\File([
                        "maxSize" => "10000k",
                        "mimeTypes" => [
                            'image/*',
                        ],
                        "mimeTypesMessage" => "Your file {{ file }} is not an image."
                    ]),
                ]
            ])
            ->add('submit', SubmitType::class,[
                'attr' => [
                    'id' => 'buttonsubmit',
                    'type' => 'submit',
                    'class' => 'register-button btn btnSubmit right-align',
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Picture::class,
        ]);
    }
}
