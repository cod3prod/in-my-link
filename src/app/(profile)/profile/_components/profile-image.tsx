import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import profileImage from "@/assets/icons/icon_profile.png";

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
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center cursor-pointer">
        <FaEdit />
      </div>
    </div>
  );
}
