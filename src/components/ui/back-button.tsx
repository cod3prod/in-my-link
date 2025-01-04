"use client";
import Image from "next/image";
import backIcon from "@/assets/icons/icon_back.png";
import { useRouter } from "next/navigation";

export default function BackButton({url}: {url?: string}) {
  const router = useRouter();

  const handleClick = () => {
    if(url) {
      router.push(url);
    }
    else if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Image
      src={backIcon}
      alt="back"
      className="cursor-pointer"
      width={36}
      height={36}
      onClick={handleClick}
    />
  );
}
