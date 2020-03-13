<?php

namespace App\Service;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManager;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Exception\ExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;

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
                $profilPicture = $picture;
            }
		}
		if (!isset($profilPicture))
		{
            throw new \RuntimeException('Could not find the picture.');
		}
		return $profilPicture;
	}

	public function getCoverPicture(user $user)
	{
		foreach ($user->getPictures() as $picture)
        {
            if ($picture->getCoverPicture() === true)
            {
                $coverPicture = $picture;
            }
		}
		if (!isset($coverPicture))
		{
            throw new \RuntimeException('Could not find the picture.');
		}
		return $coverPicture;
	}

	public function getProfilePictureName(user $user)
	{
		$profilPicture = $this->getProfilePicture($user);
		$profilPictureName = $profilPicture->getName();
		if (!isset($profilPictureName))
		{
			//prevent error
			$profilPictureName = 'default-user.png';
		}
		return $profilPictureName;
	}

	public function getProfilePictureUrl(user $user)
	{
		$profilPicture = $this->getProfilePicture($user);
		$profilPictureUrl = $profilPicture->getUrl();
		if (!isset($profilPictureUrl))
		{
			//prevent error
			$profilPictureUrl = 'images/user/default-user.png';
		}
		return $profilPictureUrl;
	}

	public function getCoverPictureUrl(user $user)
	{
		$coverPicture = $this->getCoverPicture($user);
		$coverPictureUrl = $coverPicture->getUrl();
		if (!isset($coverPictureUrl))
		{
			//prevent error
			$coverPictureUrl = 'images/user/default-cover.jpg';
		}
		return $coverPictureUrl;
	}

	public function getAllPicturesExceptCoverAndProfil(user $user)
	{
		$getPictures = $user->getPictures();
		$pictures = [];
		foreach ($getPictures as $picture){
			if (!$picture->getProfilePicture() && !$picture->getCoverPicture())
			{
				$pictures[] = $picture;
			}
		}
		return $pictures;
	}

	public function setNewProfilePicture(user $user, picture $newProfilePicture, EntityManager $em)
	{
		foreach ($user->getPictures() as $picture)
        {
			if ($picture->getProfilePicture() === true)
			{
				$picture->setProfilePicture(false);
				$picture->setUseAS(null);
			}
		}
		$newProfilePicture->setProfilePicture(true);
		$newProfilePicture->setUseAS("profilePicture");
		$em->persist($newProfilePicture);
		$em->flush();
	}

	public function removePicture(user $user, picture $picture, EntityManager $em)
	{
		$user->removePicture($picture);
		$em->remove($picture);
		$em->persist($user);
		$em->flush();
	}

	public function addNewPicture(user $user, picture $picture, EntityManager $em)
	{
		$user->addPicture($picture);
		$em->persist($user);
		$em->flush();
	}

}