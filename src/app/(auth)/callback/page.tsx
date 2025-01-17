import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function Page() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="flex flex-col justify-center w-full max-w-2xl -translate-y-1/2">
        <h1 className="page-name mb-4">환영합니다!</h1>
        <p className="mb-6">
          이메일 확인이 완료되었습니다.<br/>이제 닉네임을 추가하여 프로필을
          완성하세요.
        </p>
        <form className="flex flex-col">
          <div className="space-y-4">
            <Input
              id="nickname"
              type="text"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              required
            />
            <Input
              id="domain"
              type="text"
              label="도메인"
              placeholder="링크에 사용될 도메인을 입력해주세요"
              required
            />
          </div>
          <Button type="submit">확인</Button>
        </form>
      </div>
    </section>
  );
}
