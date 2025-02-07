"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 rounded-full p-6 animate-pulse">
            <FaExclamationTriangle className="h-24 w-24 text-red-500" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
          서버 오류가 발생했습니다
        </h1>

        <p className="text-text-666 mb-6 max-w-md mx-auto">
          죄송합니다. 서버에서 오류가 발생했습니다.
          <br />
          잠시 후 다시 시도해 주시기 바랍니다.
          <br />
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="
              px-6 py-3 rounded-lg 
              bg-red-100 text-red-500 
              hover:bg-red-500 hover:text-white
              transition-all duration-300
              cursor-pointer
            "
          >
            홈으로
          </Link>

          <button
            onClick={() => router.back()}
            className="
              px-6 py-3 rounded-lg 
              bg-red-100 text-red-500
              hover:bg-red-200 
              transition-colors duration-300
              cursor-pointer
            "
          >
            돌아가기
          </button>

          <button
            onClick={() => reset()}
            className="
              px-6 py-3 rounded-lg 
              bg-blue-100 text-blue-500
              hover:bg-blue-200 
              transition-colors duration-300
              cursor-pointer
            "
          >
            다시 시도하기
          </button>
        </div>
      </div>
    </div>
  );
}
