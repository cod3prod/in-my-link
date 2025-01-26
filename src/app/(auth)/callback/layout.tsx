import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "환영합니다",
};

export default function CallbackLayout({
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
