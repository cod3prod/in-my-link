import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Global from "@/components/global";
import "@/styles/index.css";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: {
    default:"IN MY LINK",
    template: "%s | IN MY LINK",
  },
  description: "BOOMCO co.",
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={twMerge("flex flex-col min-h-screen", notoSansKR.className)}>
        <Global />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
