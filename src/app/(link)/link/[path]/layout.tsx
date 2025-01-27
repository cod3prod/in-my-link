import Background from "@/components/background";
import type { Metadata } from "next";


// SSR 필요
export const metadata: Metadata = {
  title: "링크"
};

export default function LinkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="min-h-screen flex flex-col">
            <Background />
        {children}
     </article>
  );
}
