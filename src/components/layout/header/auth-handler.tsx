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
          className="py-2 px-4 rounded hover:bg-gray-200 hover:text-primary-450 transition-colors duration-300 text-left md:p-0 md:hover:text-primary-200 md:hover:bg-transparent"
          onClick={handleClick}
        >
          로그아웃
        </button>
      ) : (
        <Link
          onClick={handleClose}
          href="/auth"
          className="py-2 px-4 rounded hover:bg-gray-200 hover:text-primary-450 transition-colors duration-300 md:p-0 md:hover:text-primary-200 md:hover:bg-transparent md:flex md:items-center"
        >
          로그인
        </Link>
      )}
    </>
  );
}
