import Link from "next/link";
import menuIcon from "@/assets/icons/icon_menu.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary-400 text-white p-4 fixed w-full h-16 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">IN MY LINK</h1>
        <nav className="space-x-6 hidden md:block">
          <Link href="/" className="hover:text-[#ffcab5] transition-colors">
            Home
          </Link>
          <Link
            href="/admin"
            className="hover:text-[#ffcab5] transition-colors"
          >
            Admin
          </Link>
          <Link
            href="/profile"
            className="hover:text-[#ffcab5] transition-colors"
          >
            Profile
          </Link>
          <Link href="/link" className="hover:text-[#ffcab5] transition-colors">
            Link
          </Link>
          <Link href="/auth" className="hover:text-[#ffcab5] transition-colors">
            Auth
          </Link>
        </nav>
        <button className="relatvie md:hidden flex items-center px-1 py-1 border rounded text-white border-white hover:bg-[#ffcab5] hover:border-[#ffcab5]">
          <Image src={menuIcon} alt="menu icon" className="h-5 w-5 filter " />
        </button>
      </div>
    </header>
  );
}
