"use client";

import Link from "next/link";
import AuthHandler from "./auth-handler";
import { useMenuStore } from "@/zustand/menu-store";

export default function Nav({ profile }: { profile: Profile | null }) {
  const { setIsMenuOpen } = useMenuStore();

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
    <nav className="h-full hidden md:flex gap-6">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className="flex items-center hover:text-primary-200 transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}
      {profile?.path && (
        <Link
          href={`/link/${profile?.path}`}
          className="flex items-center hover:text-primary-200 transition-colors duration-300"
        >
          링크
        </Link>
      )}
      <AuthHandler
        profile={profile || null}
        handleClose={() => setIsMenuOpen(false)}
      />
    </nav>
  );
}
