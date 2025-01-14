import Image from "next/image";
import profileImage from "@/assets/icons/icon_profile.png";

export default function ProfileCard() {
  return (
    <section className="relative flex h-52 w-full flex-col items-center justify-center bg-gray-100 py-8">
      <Image
        src={profileImage}
        alt="profile image"
        width={64}
        height={64}
      />
      <p className="mt-2 font-semibold text-black underline">user name</p>
    </section>
  );
}
