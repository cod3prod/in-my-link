"use client";
import Image from "next/image";
import closeIcon from "@/assets/icons/icon_close.png";

export default function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="relative p-1 w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-500 cursor-pointer"
      type="button"
      onClick={onClick}
    >
      <Image src={closeIcon} alt="back" className="object-contain" />
    </button>
  );
}
