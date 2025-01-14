import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold mb-6 md:mb-0">IN MY LINK</h2>
          <div className="flex space-x-6 mb-6 md:mb-0">
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
            <Link
              href="/link"
              className="hover:text-[#ffcab5] transition-colors"
            >
              Link
            </Link>
            <Link
              href="/auth"
              className="hover:text-[#ffcab5] transition-colors"
            >
              Auth
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-[#ffcab5] transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href="#" className="hover:text-[#ffcab5] transition-colors">
              <FaHome size={24} />
            </Link>
            <Link href="#" className="hover:text-[#ffcab5] transition-colors">
              <CiMail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
