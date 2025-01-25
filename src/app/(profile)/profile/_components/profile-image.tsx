import Image from "next/image";
import profileImage from "@/assets/icons/icon_profile.png";
import EditProfileImage from "./edit-profile-image";

export default function ProfileImage({ src }: { src: string | null }) {
  return (
    <div className="relative mb-6">
      <Image
        src={src || profileImage}
        alt="Profile"
        width={150}
        height={150}
        className="w-32 h-32 rounded-full shadow-md object-cover"
      />
      <EditProfileImage />
    </div>
  );
}
