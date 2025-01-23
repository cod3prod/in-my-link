import Auth from "./_components";
import AuthFormProvider from "@/contexts/auth-form-context";

export default function Page() {
  return (
    <AuthFormProvider>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-2">
        <Auth />
      </section>
    </AuthFormProvider>
  );
}
