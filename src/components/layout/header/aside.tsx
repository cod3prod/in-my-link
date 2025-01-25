"use client";

import Link from "next/link";
import closeIcon from "@/assets/icons/icon_close.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import AuthHandler from "./auth-handler";
import { useProfileStore } from "@/zustand/profile-store";

export default function Aside({
  isMenuOpen,
  handleClose,
}: {
  isMenuOpen: boolean;
  handleClose: () => void;
}) {
  const { profile } = useProfileStore();

  return (
    <aside
      className={twMerge(
        "fixed bg-black/30 inset-0 z-40 flex transition-opacity duration-300",
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <nav
        className={twMerge(
          "w-64 h-full flex flex-col bg-gray-100 text-text-333 p-6 font-bold shadow-lg transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={handleClose}
          className="relative self-end mb-4 p-1 hover:bg-gray-200 w-8 h-8 rounded-md transition-colors duration-300"
        >
          <Image src={closeIcon} alt="close" className="object-contain" />
        </button>
        <Link
          onClick={handleClose}
          href="/"
          className="py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors"
        >
          메인
        </Link>
        <Link
          onClick={handleClose}
          href="/admin"
          className="py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors"
        >
          내 블록
        </Link>
        <Link
          onClick={handleClose}
          href="/profile"
          className="py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors"
        >
          프로필
        </Link>
        {profile?.path && <Link
          onClick={handleClose}
          href={`/link/${profile?.path}`}
          className="py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors"
        >
          링크
        </Link>}
        <AuthHandler handleClose={handleClose} />
      </nav>
      {isMenuOpen && <div className="flex-1" onClick={handleClose} />}
    </aside>
  );
}
