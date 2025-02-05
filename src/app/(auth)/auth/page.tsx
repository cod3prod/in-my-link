
import BackButton from "@/components/ui/back-button";
import SignUpForm from "./_components/sign-up-form";
import LogInForm from "./_components/log-in-form";
import FindByEmailForm from "./_components/find-by-email-form";

export default function Page() {

  return (
    <div className="h-fit w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-lg">
      <BackButton />
      <SignUpForm />
      <LogInForm />
      <FindByEmailForm />
    </div>
  );
}