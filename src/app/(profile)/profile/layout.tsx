import Background from "@/components/background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "내 프로필",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="min-h-screen flex flex-col items-center justify-center container max-w-3xl mx-auto p-4">
      <Background />
      {children}
    </article>
  );
}
