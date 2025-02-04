import Background from "@/components/background";

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
