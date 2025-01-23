"use client";

import Link from "next/link";
import menuIcon from "@/assets/icons/icon_menu.png";
import Image from "next/image";
import { useState } from "react";
import Aside from "./aside";
import AuthHandler from "./auth-handler";
import { useProfileStore } from "@/zustand/profile-store";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { profile } = useProfileStore();

  return (
    <header className="bg-primary-450 text-white px-4 fixed w-full h-16 z-50 shadow-lg">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center h-full">
          <h1 className="text-2xl font-bold">IN MY LINK</h1>
        </Link>
        <nav className="h-full hidden md:flex gap-6">
          <Link
            href="/"
            className="flex items-center hover:text-primary-200 transition-colors"
          >
            메인
          </Link>
          <Link
            href="/admin"
            className="flex items-center hover:text-primary-200 transition-colors"
          >
            내 블록
          </Link>
          <Link
            href="/profile"
            className="flex items-center hover:text-primary-200 transition-colors"
          >
            프로필
          </Link>
          {profile?.path && <Link
            href={`/link/${profile?.path}`}
            className="flex items-center hover:text-primary-200 transition-colors"
          >
            링크
          </Link>}
          <AuthHandler handleClose={() => setIsMenuOpen(false)} />
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative md:hidden flex items-center px-1 py-1 rounded-md text-white border-white hover:bg-primary-200 hover:border-primary-200 transition-colors duration-300"
        >
          <Image src={menuIcon} alt="menu icon" className="h-6 w-6" />
        </button>
      </div>
      <Aside isMenuOpen={isMenuOpen} handleClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
