import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col items-start">
            <h2 className="text-2xl font-bold">IN MY LINK</h2>
            <p className="text-text-ddd mt-2">
              소셜 링크 웹페이지 구현 프로젝트 고도화
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="https://github.com/cod3prod/in-my-link" className="hover:text-primary-200 transition-colors">
                <FaGithub size={24} />
              </Link>
              <Link href="https://github.com/cod3prod" className="hover:text-primary-200 transition-colors">
                <FaHome size={24} />
              </Link>
              <Link href="mailto:cod3prod@gamil.com" className="hover:text-primary-200 transition-colors">
                <CiMail size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-text-ccc border-t-1 border-text-ccc pt-4">
          <p>&copy; {new Date().getFullYear()} IN MY LINK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
