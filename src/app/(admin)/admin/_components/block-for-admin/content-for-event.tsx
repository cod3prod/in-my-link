export default function ContentForEvent() {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-start gap-2 text-left">
        <p className="w-16 text-gray-400">이벤트 명</p>
        <span className="">이벤트</span>
      </div>
      <div className="flex items-center gap-2 text-left">
        <p className="w-16 text-gray-400">일정</p>
        <span className="">{`$1월 ~ 2월`}</span>
      </div>
    </div>
  );
}
