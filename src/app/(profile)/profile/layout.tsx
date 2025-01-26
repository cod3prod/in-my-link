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
    <article className="flex flex-col items-center min-h-screen justify-center container max-w-3xl mx-auto mt-16 p-4">
      {children}
    </article>
  );
}
