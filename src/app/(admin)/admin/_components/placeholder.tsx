import noBlockIcon from "@/assets/icons/icon-no-block.svg";
import Image from "next/image";

export default function Placeholder() {
  return (
    <figure className="mt-16 w-full bg-gray-100 h-56 rounded-md flex flex-col justify-center items-center">
      <figcaption className="mt-4 text-center text-sm  text-text-999">
        표시할 블록이 없습니다.
        <br />+ 버튼을 눌러서{" "}
        <span className="text-text-444 font-semibold">블록을 추가</span>
        해보세요!
      </figcaption>
      <Image src={noBlockIcon} alt="no block" className="translate-x-2" />
    </figure>
  );
}
