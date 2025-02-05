"use client";

import Link from "next/link";
import { signout } from "@/actions/auth";

export default function AuthHandler({
  profile,
  handleClose,
}: {
  profile: Profile | null;
  handleClose: () => void;
}) {


  const handleClick = async () => {
    await signout();
    handleClose();
  };

  return (
    <>
      {profile ? (
        <button
          className="cursor-pointer py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors duration-300 text-left md:p-0 md:hover:text-primary-200 md:hover:bg-transparent"
          onClick={handleClick}
        >
          로그아웃
        </button>
      ) : (
        <Link
          onClick={handleClose}
          href="/auth"
          className="py-2 px-4 rounded-sm hover:bg-gray-200 hover:text-primary-450 transition-colors duration-300 md:p-0 md:hover:text-primary-200 md:hover:bg-transparent md:flex md:items-center"
        >
          로그인
        </Link>
      )}
    </>
  );
}
