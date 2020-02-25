<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;

//form type
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

//Validator
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Type;
use Symfony\Component\Validator\Constraints as Assert;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your name',
                    ]),
                    new Length([
                        'min' => 1,
                        'minMessage' => 'Your name should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 50,
                        'maxMessage' => 'Your name should be maximum {{ limit }} characters',

                    ]),
                ],
            ])
            ->add('lastname', TextType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter your name',
                    ]),
                    new Length([
                        'min' => 1,
                        'minMessage' => 'Your lastname should be at least {{ limit }} characters',
                        'max' => 50,
                        'maxMessage' => 'Your lastname should be maximum {{ limit }} characters',

                    ]),
                ],
            ])
            ->add('mail', EmailType::class, [
                'required' => true,
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 3,
                        'minMessage' => 'Your email should be at least {{ limit }} characters',
                        'max' => 100,
                        'maxMessage' => 'Your email should be maximum {{ limit }} characters',

                    ]),
                    new Assert\Email([
                         'message' => "The email '{{ value }}' is not a valid email."
                    ]),
                ],
            ])
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
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 50,
                        'maxMessage' => 'Your password should be maximum {{ limit }} characters',
                    ]),

                ],
                'invalid_message' => 'Passwords don\'t match'
            ])
            ->add('gender', ChoiceType::class, [
                'required' => true,
                'choices' => [
                    'man' => 'man',
                    'woman' => 'woman',
                    'neither' => 'neither',
                ],
            ])
            ->add('birthdate', DateType::class,[
                'required' => true,
                'widget' => 'single_text',
                'html5' => 'false',
                'attr' => ['class' => 'birthdate-dropdown'],
                'label' => 'Your birthdate',
                'label_attr' => ['id' => 'label-birthdate'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a date',
                    ]),
                    new Type(\DateTime::class),
                ],
            ])
            ->add('register', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
