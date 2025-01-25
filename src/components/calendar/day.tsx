import { twMerge } from "tailwind-merge";

export default function Day({ day, events, colorClasses }: DayProps) {
  if (!day) {
    return <div className="border h-12 sm:h-24 bg-gray-100 rounded-lg" />;
  }

  // 당일에 있었던 이벤트 중 가장 마지막에 만들어진 이벤트의 순서만큼 반복
  const reps = events[events.length - 1]?.sequence || 0;
  const customScrollbar = `
      [&::-webkit-scrollbar]:w-1
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
  `;

  return (
    <div className="border h-12 sm:h-24 flex flex-col pl-1 sm:p-1 text-xs sm:text-sm bg-white rounded-lg">
      <div className="font-semibold sm:mb-1">{day.getDate()}</div>
      <div className={twMerge("flex-1 overflow-x-hidden flex flex-wrap sm:flex-nowrap sm:flex-col gap-[1px] sm:gap-1", customScrollbar)}>
        {Array(reps + 1)
          .fill(null)
          .map((_, index) => {
            // 일어나지 않은 이벤트는 공백처리
            const ev = events.find((ev) => ev.sequence === index) || null;
            if (!ev) {
              return (
                <div key={index} className="sm:h-auto p-1 invisible">
                  <span className="text-xs hidden sm:inline-block">null</span>
                </div>
              );
            }

            const colorClass = colorClasses[ev.sequence % colorClasses.length];
            return (
              <div
                key={index}
                className={`text-xs text-white w-2 h-2 sm:w-full sm:h-auto rounded-full sm:rounded-sm sm:p-1 whitespace-nowrap ${colorClass}`}
              >
                <span className="hidden sm:inline-block truncate">
                  {ev?.title}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
