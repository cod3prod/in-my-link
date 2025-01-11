import { twMerge } from "tailwind-merge";

export default function StatusBadge({
  status,
  className
}: {
  status: "CLOSED" | "SOON" | "OPEN";
  className?: string;
}) {
  const badgeStyles = {
    CLOSED: "text-gray-300",
    SOON: "text-primary-450",
    OPEN: "bg-primary-450 after:bg-primary-450 text-white",
  };

  const badgeAfterStyles =
    "after:content-['']" + // 의사 클래스 내용 비우기
    " after:absolute" + // 절대 위치 지정
    " after:bg-gray-100" + // 배경색 설정
    " after:aspect-square" + // 정사각형 비율 유지
    " after:h-6" + // 높이를 1.5rem (24px)로 설정
    " after:transform" + // 변환 속성 활성화 (회전 적용을 위한 준비)
    " after:right-[-10%]" + // 삼각형을 오른쪽으로 이동
    " after:rounded-md" + // 둥근 모서리 추가
    " after:rotate-45";  // 45도 회전하여 삼각형 형태로 보이게

  return (
    <div
      className={twMerge(
        "relative flex items-center justify-center w-16 h-8 rounded-lg bg-gray-100 translate-y-1",
        badgeAfterStyles,
        badgeStyles[status],
        className
      )}
    >
      <p
        className={twMerge("px-1 h-fit text-xs font-bold z-10", badgeStyles[status])}
      >
        {status}
      </p>
    </div>
  );
}
