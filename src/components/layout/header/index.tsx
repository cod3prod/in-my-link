"use client";

import Link from "next/link";
import menuIcon from "@/assets/icons/icon_menu.png";
import Image from "next/image";
import { useState } from "react";
import Aside from "./aside";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary-450 text-white p-4 fixed w-full h-16 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">IN MY LINK</h1>
        <nav className="space-x-6 hidden md:block">
          <Link href="/" className="hover:text-primary-200 transition-colors">
            Home
          </Link>
          <Link
            href="/admin"
            className="hover:text-primary-200 transition-colors"
          >
            Admin
          </Link>
          <Link
            href="/profile"
            className="hover:text-primary-200 transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/link"
            className="hover:text-primary-200 transition-colors"
          >
            Link
          </Link>
          <Link
            href="/auth"
            className="hover:text-primary-200 transition-colors"
          >
            Auth
          </Link>
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
