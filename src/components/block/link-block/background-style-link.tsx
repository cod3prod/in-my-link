import Image from "next/image";
import { FaLink } from "react-icons/fa";

export default function BackgroundStyleLink({
  title,
  img_url,
}: {
  title: string;
  img_url: string;
}) {
  return (
    <div className="relative flex w-full h-24 items-center justify-center overflow-hidden rounded-lg bg-slate-300 shadow-lg">
      {/* Background Image */}
      <Image
        fill
        className="absolute top-0 left-0 object-cover"
        src={img_url}
        alt="Link Background"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Title */}
      <p className="relative text-white text-lg font-semibold hover:text-blue-300 transition-colors duration-300">
        {title || "타이틀을 입력해주세요"}
        <FaLink className="inline ml-2" />
      </p>
    </div>
  );
}
