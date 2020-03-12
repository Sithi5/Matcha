<?php

namespace App\Service;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

//entity
use App\Entity\User;


//service
use App\Service\PictureService;

class NavUserForView extends AbstractController
{

	private $pictureService;

    public function __construct()
    {
        $this->pictureService = new PictureService();
	}

	public function OutputNavUserInfo(user $navUser): array
	{
        $navUserProfilePictureUrl = $this->pictureService->getProfilePictureUrl($navUser);
		$navUserInfo = [
			'navUserName' => $navUser->getName(),
			'navUserConfirmed' => $navUser->getConfirmed(),
			'navUserProfilePictureUrl' => $navUserProfilePictureUrl,
			'navUserId' => $navUser->getId(),
			'navUser' => $navUser,
		];
		return $navUserInfo;
	}
}