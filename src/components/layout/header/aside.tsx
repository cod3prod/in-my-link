"use client";

import Link from "next/link";
import closeIcon from "@/assets/icons/icon_close.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import AuthHandler from "./auth-handler";
import { useMenuStore } from "@/zustand/menu-store";
import menuIcon from "@/assets/icons/icon_menu.png";

export default function Aside({profile} : {profile: Profile | null}) {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();
  const handleClose = () => setIsMenuOpen(false);

  const navLinks = [
    {
      label: "메인",
      path: "/",
    },
    {
      label: "내 블록",
      path: "/admin",
    },
    {
      label: "프로필",
      path: "/profile",
    },
  ];
  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative md:hidden flex items-center px-1 py-1 rounded-md text-white border-white hover:bg-primary-200 hover:border-primary-200 transition-colors duration-300 cursor-pointer"
      >
        <Image src={menuIcon} alt="menu icon" className="h-6 w-6" />
      </button>
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
            className="relative self-end mb-4 p-1 hover:bg-gray-200 w-8 h-8 rounded-md transition-colors duration-300 cursor-pointer"
          >
            <Image src={closeIcon} alt="close" className="object-contain" />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              onClick={handleClose}
              href={link.path}
              className="py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {profile?.path && (
            <Link
              onClick={handleClose}
              href={`/link/${profile?.path}`}
              className="py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors"
            >
              링크
            </Link>
          )}
          <AuthHandler profile={profile} handleClose={handleClose} />
        </nav>
  
        {/* Overlay */}
        {isMenuOpen && <div className="flex-1" onClick={handleClose} />}
      </aside>
    </>
  );
}
