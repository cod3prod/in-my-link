"use client";

import "animate.css";
import { twMerge } from "tailwind-merge";

export default function Modal({
  open,
  children,
  className,
  onClose,
}: {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className={
        "fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/50"
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={twMerge(
          "bg-white rounded-lg p-4 w-full max-w-lg  animate__animated animate__fadeIn",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
