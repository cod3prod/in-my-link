"use client";

import Image from "next/image";
import profileImage from "@/assets/icons/icon_profile.png";
import { useAuthStore } from "@/zustand/auth-store";

export default function ProfileCard() {
  const { session } = useAuthStore();
  
  return (
    <section className="relative flex h-52 w-full flex-col items-center justify-center bg-gray-100 py-8">
      <Image
        src={session?.profile?.profile_img || profileImage}
        alt="profile image"
        width={64}
        height={64}
      />
      <p className="mt-2 font-semibold text-black underline">
        {session?.profile?.username || "User"}
      </p>
    </section>
  );
}
