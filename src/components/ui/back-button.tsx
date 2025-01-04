"use client";
import Image from "next/image";
import backIcon from "@/assets/icons/icon_back.png";
import { useRouter } from "next/navigation";

export default function BackButton({ url }: { url?: string }) {
  const router = useRouter();

  const handleClick = () => {
    if (url) {
      router.push(url);
    } else if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button className="relative w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-500" onClick={handleClick}>
      <Image
        src={backIcon}
        alt="back"
        className="object-contain cursor-pointer"
      />
    </button>
  );
}
