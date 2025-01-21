"use client";

import Link from "next/link";
import { useAuthStore } from "@/zustand/auth-store";
import { supabase } from "@/libs/supabase-client";

export default function AuthHandler({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const { session, setSession } = useAuthStore();
  const handleClick = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
    } catch (error) {
      console.error(error);
    }
    handleClose();
  };

  return (
    <>
      {session ? (
        <button
          className="py-2 px-4 rounded hover:bg-gray-200 hover:text-primary-450 transition-colors duration-300 text-left sm:p-0 sm:hover:text-primary-200 sm:hover:bg-transparent"
          onClick={handleClick}
        >
          로그아웃
        </button>
      ) : (
        <Link
          onClick={handleClose}
          href="/auth"
          className="py-2 px-4 rounded hover:bg-gray-200 hover:text-primary-450 transition-colors duration-300 sm:p-0 sm:hover:text-primary-200 sm:hover:bg-transparent sm:flex sm:items-center"
        >
          로그인
        </Link>
      )}
    </>
  );
}
