import Image from "next/image";
import noBlockIcon from "@/assets/icons/icon_empty.png";

export default function Placeholder() {
  return (
    <figure className="relative w-full bg-gray-100 h-56 rounded-md flex flex-col justify-center items-center">
      <Image src={noBlockIcon} alt="no block" className="w-20 h-20" />
      <figcaption className="mt-4 text-center text-sm text-text-333">
        지금은 공개된 블록이 없습니다
      </figcaption>
    </figure>
  );
}
