import Image from "next/image";
import tempImg from "@/assets/icons/icon_back.png";

export default function ContentForAnother() {
  return (
    <div className="flex space-x-2">
      <Image
        src={tempImg}
        alt={"block image"}
        width={56}
        height={56}
        className="rounded-md"
      />
      <div>타이틀</div>
    </div>
  );
}
