import CallbackForm from "./_components/callback-form";

export default function Page() {
  return (
    <div className="flex flex-col justify-center w-full max-w-2xl">
      <h1 className="page-name mb-4">환영합니다!</h1>
      <p className="mb-6">
        이메일 확인이 완료되었습니다.
        <br />
        이제 닉네임을 추가하여 프로필을 완성하세요.
      </p>
      <CallbackForm />
    </div>
  );
}
