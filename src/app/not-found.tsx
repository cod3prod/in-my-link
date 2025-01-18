"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <div className="bg-primary-100 rounded-full p-6 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
          요청하신 페이지를 찾을 수 없습니다
        </h1>

        <p className="text-text-666 mb-6 max-w-md mx-auto">
          불편을 드려 죄송합니다.<br />
          요청하신 페이지가 존재하지 않거나 이동되었을수 있습니다.<br />
          정확한 URL을 다시 확인해 주시기 바랍니다.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className={`
              px-6 py-3 rounded-lg transition-all duration-300
              ${
                isHovered
                  ? "bg-primary-400 text-white shadow-lg"
                  : "bg-primary-100 text-primary"
              }
              hover:bg-primary-400 hover:text-white
              hover:shadow-lg
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            홈으로
          </Link>

          <button
            onClick={() => router.back()}
            className="
              px-6 py-3 rounded-lg 
              bg-primary-100 text-primary
              hover:bg-primary-200 
              transition-colors duration-300
            "
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
