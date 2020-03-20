<?php

namespace App\Entity;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Filesystem\Filesystem;

//service
use App\Service\PictureService;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"mail"}, message="There is already an account with this e-mail address")
 * @UniqueEntity(fields={"username"}, message="There is already an account with this username")
 * @ORM\HasLifecycleCallbacks()
 */
class User extends AbstractController implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotCompromisedPassword
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $mail;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $gender;

    /**
     * @ORM\Column(type="date")
     */
    private $birthdate;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)

     */
    private $token;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tokenPassword;

    /**
     * @ORM\Column(type="boolean")
     */
    private $confirmed;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $resentMailPasswordTime;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $resentMailRegisterTime;

    /**
     * @ORM\Column(type="datetime")
     */
    private $creationDate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Picture", mappedBy="user", cascade={"persist", "remove"})
     */
    private $pictures;

    private $tempId;

    private $lastRequestSend;

    /**
     * @ORM\Column(type="integer")
     */
    private $age;

    private $pictureService;

    public function __construct()
    {
        $this->setCreationDate(New \Datetime('now'));
        $this->pictures = new ArrayCollection();
        $this->pictureService = new PictureService();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(\DateTimeInterface $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken($token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getConfirmed(): ?bool
    {
        return $this->confirmed;
    }

    public function setConfirmed(bool $confirmed): self
    {
        $this->confirmed = $confirmed;

        return $this;
    }

    public function getTokenPassword(): ?string
    {
        return $this->tokenPassword;
    }

    public function setTokenPassword(?string $tokenPassword): self
    {
        $this->tokenPassword = $tokenPassword;

        return $this;
    }

    public function getResentMailPasswordTime(): ?\DateTimeInterface
    {
        return $this->resentMailPasswordTime;
    }

    public function setResentMailPasswordTime(?\DateTimeInterface $resentMailPasswordTime): self
    {
        $this->resentMailPasswordTime = $resentMailPasswordTime;

        return $this;
    }

    public function getResentMailRegisterTime(): ?\DateTimeInterface
    {
        return $this->resentMailRegisterTime;
    }

    public function setResentMailRegisterTime(?\DateTimeInterface $resentMailRegisterTime): self
    {
        $this->resentMailRegisterTime = $resentMailRegisterTime;

        return $this;
    }

    public function getLastRequestSend(): ?\DateTimeInterface
    {
        return $this->lastRequestSend;
    }

    public function setLastRequestSend(?\DateTimeInterface $lastRequestSend): self
    {
        $this->lastRequestSend = $lastRequestSend;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeInterface
    {
        return $this->creationDate;
    }

    public function setCreationDate(\DateTimeInterface $creationDate): self
    {
        $this->creationDate = $creationDate;

        return $this;
    }

    /**
     * @return Collection|Picture[]
     */
    public function getPictures(): Collection
    {
        return $this->pictures;
    }

    public function addPicture(Picture $picture): self
    {
        if (!$this->pictures->contains($picture)) {
            $this->pictures[] = $picture;
            $picture->setUser($this);
        }

        return $this;
    }

    public function removePicture(Picture $picture): self
    {
        if ($this->pictures->contains($picture)) {
            $this->pictures->removeElement($picture);
            // set the owning side to null (unless already changed)
            if ($picture->getUser() === $this) {
                $picture->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @ORM\PreRemove()
     */
    public function preRemoveUser()
    {
        //save id before removing it from db
        $this->tempId = $this->getId();
    }

    /**
     * @ORM\PostRemove()
     */
    public function removeUpload()
    {
        //actually deleting the img folder
        $filesystem = new Filesystem();
        $targetDirectory = "images/user/".md5($this->tempId).'/';
        if (file_exists($targetDirectory)){
            $filesystem->remove([$targetDirectory]);
        }
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;

        return $this;
    }


    public function getProfilePicture()
	{
		foreach ($this->getPictures() as $picture)
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
}
