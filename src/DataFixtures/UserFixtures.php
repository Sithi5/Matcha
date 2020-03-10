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

//service
use App\Service\PictureService;

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    public function load(ObjectManager $manager)
    {
        //number of fake users
        $count = 20;

        //setting admin user
        $user = new User();
        $picture = new Picture();
        $picture->setName('default-user.png');
        $picture->setUrl('\images\user\default-user.png');
        $picture->setProfilePicture(true);
		$picture->setUseAS("profilePicture");
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
        $password="Levirus35";

        $user->setPassword($this->passwordEncoder->encodePassword($user, $password));

        //array of names etc for random users
        $girlsNames = ['apple', 'orange', 'citrus', 'Kimn', 'Mariana', 'Patty', 'Claudia' , 'Jelena' , 'Taria' ,'Honour', 'Lovelyn', 'Quanah', 'Petunia'];
        $mansNames = ['Donnelly', 'Finley', 'Israel', 'Farnell', 'Celestino', 'Beecher', 'Aristides', 'Joaquin', 'Bailee', 'Rory','Washington','Babak', 'Digby'];
        $girlsOrMansNames = array_merge($girlsNames, $mansNames);
        $lastnames = ['Brown', 'Philips', 'Price', 'Bell', 'Rogers', 'Adams', 'Roberts', 'Jenkins', 'Lopez', 'Cox','Campbell','Peterson','Sanchez', 'Jones', 'Davis', 'Wood', 'Smith', 'Mitchell', 'Jenkins' ,'Foster', 'Butler', 'Ross'];
        $genders = ['man', 'woman', 'neither'];

        //random users
        while($count-- > 0){
            $gender = $genders[array_rand($genders)];

            //change name depending on gender
            if ($gender == 'man')
            {
                $name = $mansNames[array_rand($mansNames)];
            }
            else if ($gender == 'woman')
            {
                $name = $girlsNames[array_rand($girlsNames)];
            }
            else {
                $name = $girlsOrMansNames[array_rand($girlsOrMansNames)];
            }
            $lastname = $lastnames[array_rand($lastnames)];
            $user = new User();
            $picture = new Picture();
            $picture->setName('default-user.png');
            $picture->setUrl('\images\user\default-user.png');
            $picture->setProfilePicture(true);
            $picture->setUseAS("profilePicture");
            $user->setGender($gender);
            $user->setName($name);
            $user->setLastname($lastname);
            $user->setMail($name . \uniqid() . "@fake.com");
            $user->setUsername($user->getMail());
            $user->setConfirmed((bool)random_int(0, 1));

            $start = strtotime("-100 year");
            $end = strtotime("-18 year");
            $date = mt_rand($start, $end);
            $user->setBirthDate(new \DateTime(date('Y-m-d', $date)));
            $user->addPicture($picture);
            $manager->persist($user);
            $password="root";
            $user->setPassword($this->passwordEncoder->encodePassword($user, $password));
        }


        $manager->flush();
    }
}
