import Link from "next/link";
import closeIcon from "@/assets/icons/icon_close.png";
import Image from "next/image";

export default function Aside({ handleClose }: { handleClose: () => void }) {
  return (
    <aside className="fixed bg-black/30 inset-0 z-40 flex">
      <nav className="w-64 h-full flex flex-col bg-primary-100 text-primary p-6 font-bold shadow-lg">
        <button
          onClick={handleClose}
          className="relative self-end mb-4 p-1 hover:bg-primary-200 w-8 h-8 rounded-md transition-colors duration-300"
        >
          <Image src={closeIcon} alt="close" className="object-contain" />
        </button>
        <Link
          href="/"
          className="py-2 px-4 rounded hover:bg-primary-200 hover:text-primary-100 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/admin"
          className="py-2 px-4 rounded hover:bg-primary-200 hover:text-primary-100 transition-colors"
        >
          Admin
        </Link>
        <Link
          href="/profile"
          className="py-2 px-4 rounded hover:bg-primary-200 hover:text-primary-100 transition-colors"
        >
          Profile
        </Link>
        <Link
          href="/link"
          className="py-2 px-4 rounded hover:bg-primary-200 hover:text-primary-100 transition-colors"
        >
          Link
        </Link>
        <Link
          href="/auth"
          className="py-2 px-4 rounded hover:bg-primary-200 hover:text-primary-100 transition-colors"
        >
          Auth
        </Link>
      </nav>
      <div className="flex-1" onClick={handleClose} />
    </aside>
  );
}
