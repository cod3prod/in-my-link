"use client";
import Image from "next/image";
import backArrow from "@/assets/icon_back.png";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Image
      src={backArrow}
      alt="back"
      className="cursor-pointer"
      width={36}
      height={36}
      onClick={handleClick}
    />
  );
}
