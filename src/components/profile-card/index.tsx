"use client";

import Image from "next/image";
import profileImage from "@/assets/icons/icon_profile.png";
import { twMerge } from "tailwind-merge";

export default function ProfileCard({
  className,
  profile_img,
  username,
}: {
  className?: string;
  profile_img: string | null;
  username: string | null;
}) {
  return (
    <section
      className={twMerge(
        "relative flex mt-16 h-52 w-full flex-col items-center justify-center bg-gray-100 py-8",
        className
      )}
    >
      <Image
        src={profile_img || profileImage}
        alt="Profile"
        width={150}
        height={150}
        className="w-32 h-32 rounded-full shadow-md object-cover"
      />
      <p className="mt-2 font-semibold text-black">
        {username || "User"}
      </p>
    </section>
  );
}
