<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Exception\ExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PictureRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Picture
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $alt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="pictures")
     */
    private $user;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $profilePicture;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    private $tempUrl;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAlt(): ?string
    {
        return $this->alt;
    }

    public function setAlt(?string $alt): self
    {
        $this->alt = $alt;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getProfilePicture(): ?bool
    {
        return $this->profilePicture;
    }

    public function setProfilePicture(?bool $profilePicture): self
    {
        $this->profilePicture = $profilePicture;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }


    public function preRemoveUpload()
    {
        //save url before removing it from db
        $this->tempUrl = $this->getUrl();
    }


    public function removeUpload()
    {
        //actually deleting the file
		$filesystem = new Filesystem();
        if (file_exists($this->tempUrl) && $this->tempUrl != 'images\user\default-user.png') {
            $filesystem->remove([$this->tempUrl]);
      }
    }
}