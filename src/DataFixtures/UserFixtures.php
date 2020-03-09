<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

//Entity
use App\Entity\User;
use App\Entity\Picture;
//Entity

//Password encoder
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
//Password encoder

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $picture = new Picture();
        $picture->setName('maga.jpg');
        $picture->setUrl('images\user\maga\maga.jpg');
        $picture->setProfilePicture(true);
        $user->setName('root');
        $user->setLastname('root');
        $user->setRoles(['ROLE_ADMIN']);
        $user->setMail("fake@fake.com");
        $user->setUsername($user->getMail());
        $user->setBirthDate(new \DateTime('1995-12-21'));
        $user->setGender('man');
        $user->setConfirmed(true);
        $user->addPicture($picture);
        $manager->persist($user);
        $password="root";

        $user->setPassword($this->passwordEncoder->encodePassword($user, $password));
        $manager->flush();
    }
}
