import Image from "next/image";

export const ProfileImage = () => {
  return (
    <Image
      src={profileImages[Math.floor(Math.random() * profileImages.length)]}
      className="rounded-sm"
      alt="Profile"
      width={40}
      height={40}
      draggable={false}
    />
  );
};

const profileImages = [
  "/images/profile-0.jpg",
  "/images/profile-1.jpg",
  "/images/profile-2.jpg",
  "/images/profile-3.jpg",
  "/images/profile-4.jpg",
  "/images/profile-5.jpg",
  "/images/profile-6.jpg",
];
