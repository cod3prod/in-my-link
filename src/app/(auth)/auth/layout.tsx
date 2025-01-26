import AuthFormProvider from "@/contexts/auth-form-context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "함께하기",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthFormProvider>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-2">
        {children}
      </section>
    </AuthFormProvider>
  );
}
