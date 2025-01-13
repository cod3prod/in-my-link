import Image from "next/image";
import Link from "next/link";
import plusIcon from "@/assets/icons/icon_plus.png";

export default function AddButton() {
  return (
    <Link
      href="/admin/add"
    >
      <div className="fixed flex justify-center items-center bottom-6 right-6 h-12 w-12 z-10 rounded-full bg-primary-450 hover:bg-primary-300 transition-colors duration-300">
        <Image
          src={plusIcon}
          alt="plus icon"
          width={24}
          height={24}
        />
      </div>
    </Link>
  );
}
