<?php

namespace App\Service;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManager;

//entity
use App\Entity\User;
use App\Entity\Picture;

class PictureService extends AbstractController
{
	public function getProfilePicture(user $user)
	{
		foreach ($user->getPictures() as $picture)
        {
            if ($picture->getProfilePicture() === true)
            {
                $profilePicture = $picture;
            }
		}
		if (!isset($profilePicture))
		{
            throw new \RuntimeException('Could not find the picture.');
		}
		return $profilePicture;
	}

	public function getProfilePictureName(user $user)
	{
		$profilePicture = $this->getProfilePicture($user);
		$profilePictureName = $profilePicture->getName();
		if (!isset($profilePictureName))
		{
			//prevent error
			$profilePictureName = 'default-user.png';
		}
		return $profilePictureName;
	}

	public function getProfilePictureUrl(user $user)
	{
		$profilePicture = $this->getProfilePicture($user);
		$profilePictureUrl = $profilePicture->getUrl();
		if (!isset($profilePictureUrl))
		{
			//prevent error
			$profilePictureUrl = 'images\user\default-user.png';
		}
		return $profilePictureUrl;
	}

	public function setNewProfilePicture(user $user, picture $newProfilePicture, EntityManager $entityManager)
	{
		foreach ($user->getPictures() as $picture)
        {
			$picture->setProfilePicture(false);
		}
		$newProfilePicture->setProfilePicture(true);
		$user->addPicture($newProfilePicture);
		$entityManager->persist($user);
		$entityManager->flush();
	}
}