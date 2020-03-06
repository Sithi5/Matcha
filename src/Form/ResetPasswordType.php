<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

//type form
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

//Validator
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints as Assert;

class ResetPasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'required' => true,
                'mapped' => false,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 8,
                        'max' => 50,
                        // max length allowed by Symfony for security reasons
                        'maxMessage' => 'Your password should be maximum {{ limit }} characters',
                    ]),
                    new Assert\Regex([
                      "pattern" => "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/",
                      "match" => true,
                      "message" => "Your password should have at least 8 characters, 1 digit, 1 uppercase and 1 lowercase"
                    ]),
                ],
                'invalid_message' => 'Passwords don\'t match'
        ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
