import type { Metadata } from "next";
import BlockFormProvider from "@/contexts/block-form-context";

export const metadata: Metadata = {
  title: "새로운 블록 추가하기",
};

export default function AdminAddLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BlockFormProvider>
      <section className="container mt-16 mx-auto max-w-3xl p-4">
        {children}
      </section>
    </BlockFormProvider>
  );
}
