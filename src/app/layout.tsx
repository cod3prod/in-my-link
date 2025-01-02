import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Global from "@/components/global";
import "@/styles/index.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "IN MY LINK",
  description: "BOOMCO co.",
};

export default function RootLayout({
  title,
  children,
}: Readonly<{
  title?: string;
  children: React.ReactNode;
}>) {
  const titleName = title ? `${title} | IN MY LINK` : "IN MY LINK";
  return (
    <html lang="ko">
      <Head>
        <title>{titleName}</title>
      </Head>
      <body className="flex flex-col min-h-screen">
        <Global />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
