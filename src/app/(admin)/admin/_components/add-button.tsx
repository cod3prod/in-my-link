"use client";

import Image from "next/image";
import Link from "next/link";
import plusIcon from "@/assets/icons/icon_plus.png";
import { useBlockStore } from "@/zustand/block-store";
import { twMerge } from "tailwind-merge";

export default function AddButton() {
  const { blocks } = useBlockStore();

  return (
    <Link href="/admin/add">
      <div className={twMerge("absolute flex justify-center items-center -bottom-10 right-4 h-12 w-12 z-10 rounded-full bg-primary-450 hover:bg-primary-300 transition-colors duration-300", blocks.length === 0 && "animate-pulse")}>
        <Image src={plusIcon} alt="plus icon" width={24} height={24} />
      </div>
    </Link>
  );
}
