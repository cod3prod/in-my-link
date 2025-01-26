import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비밀번호 초기화",
};

export default function UpdatePasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-4">
      {children}
    </section>
  );
}
