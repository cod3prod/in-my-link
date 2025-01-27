import { FaLink } from "react-icons/fa";

export default function SimpleStyleLink({ title }: { title: string }) {
  return (
    <div className="flex w-full h-24 justify-between rounded-lg bg-white px-4 py-2 shadow-lg">
      <div className="flex grow items-center justify-center hover:text-blue-300 transition-colors duration-300">
        <p>{title || "타이틀을 입력해주세요"}</p>
        <FaLink className="inline ml-2"/>
      </div>
    </div>
  );
}
