import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "내 블록"
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <article className="min-h-screen flex flex-col gap-4 relative mx-auto">
        {children}
     </article>
  );
}
