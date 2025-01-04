import AuthIndex from "./_components/auth-index";
import AuthFormProvider from "@/contexts/auth-form-context";

export default function Page() {
  return (
    <AuthFormProvider>
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <AuthIndex />
      </section>
    </AuthFormProvider>
  );
}
