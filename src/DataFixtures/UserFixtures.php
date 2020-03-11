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
        $count = 10;
        //array of names etc for random users
        $womenNames = ['apple', 'orange', 'citrus', 'Kimn', 'Mariana', 'Patty', 'Claudia' , 'Jelena' , 'Taria' ,'Honour', 'Lovelyn', 'Quanah', 'Petunia'];
        $menNames = ['Donnelly', 'Finley', 'Israel', 'Farnell', 'Celestino', 'Beecher', 'Aristides', 'Joaquin', 'Bailee', 'Rory','Washington','Babak', 'Digby'];
        $womenOrMenNames = array_merge($womenNames, $menNames);
        $lastnames = ['Brown', 'Philips', 'Price', 'Bell', 'Rogers', 'Adams', 'Roberts', 'Jenkins', 'Lopez', 'Cox','Campbell','Peterson','Sanchez', 'Jones', 'Davis', 'Wood', 'Smith', 'Mitchell', 'Jenkins' ,'Foster', 'Butler', 'Ross'];
        $genders = ['man', 'woman', 'neither'];
        $womenPictures = ['images/user/FixtureLoadUsers/woman_pic_1.png', 'images/user/FixtureLoadUsers/woman_pic_2.png', 'images/user/FixtureLoadUsers/woman_pic_3.jpg', 'images/user/FixtureLoadUsers/woman_pic_4.jpg', 'images/user/FixtureLoadUsers/woman_pic_5.jpg'];
        $womanPicture = $womenPictures[array_rand($womenPictures)];
        $menPictures = ['images/user/FixtureLoadUsers/man_pic_1.jpg', 'images/user/FixtureLoadUsers/man_pic_2.jpg', 'images/user/FixtureLoadUsers/man_pic_3.jpg', 'images/user/FixtureLoadUsers/man_pic_4.jpg', 'images/user/FixtureLoadUsers/man_pic_5.jpg'];
        $womenOrMenPictures = array_merge($womenPictures, $menPictures);

        //setting admin user
        $user = new User();
        $picture = new Picture();
        $picture->setName($womenOrMenPictures[array_rand($womenOrMenPictures)]);
        $picture->setUrl($womenOrMenPictures[array_rand($womenOrMenPictures)]);
        $picture->setProfilePicture(true);
        $picture->setUseAS("profilePicture");
        $picture->setDefaultPicture(true);
        $user->setName('Malo');
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



        //random users
        while($count-- > 0){
            $gender = $genders[array_rand($genders)];

            //change name depending on gender
            if ($gender == 'man')
            {
                $name = $menNames[array_rand($menNames)];
                $pictureUrl = $menPictures[array_rand($menPictures)];

            }
            else if ($gender == 'woman')
            {
                $name = $womenNames[array_rand($womenNames)];
                $pictureUrl = $womenPictures[array_rand($womenPictures)];
            }
            else {
                $name = $womenOrMenNames[array_rand($womenOrMenNames)];
                $pictureUrl = $womenOrMenPictures[array_rand($womenOrMenPictures)];
            }
            $lastname = $lastnames[array_rand($lastnames)];
            $user = new User();
            $picture = new Picture();
            $picture->setName($pictureUrl);
            $picture->setUrl($pictureUrl);
            $picture->setProfilePicture(true);
            $picture->setUseAS("profilePicture");
            $picture->setDefaultPicture(true);
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
