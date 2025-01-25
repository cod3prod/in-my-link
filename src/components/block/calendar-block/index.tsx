import { FaRegCalendarTimes } from "react-icons/fa";
import CalendarBlockItem from "./calendar-block-item";
import { twMerge } from "tailwind-merge";

export default function CalendarBlock({
  schedules,
}: {
  schedules: Schedule[];
}) {
  return (
    <section className={twMerge("flex flex-col h-64 w-full overflow-scroll px-4 rounded-lg bg-white shadow-lg [&::-webkit-scrollbar]:hidden", schedules.length !== 0 && "pt-12")}>
      {schedules.length === 0 && (
        <div className="h-full flex flex-col justify-center items-center gap-4">
          <FaRegCalendarTimes className="text-gray-300 text-5xl" />
          <div className="text-center text-text-666">
            <p className="text-text-333">일정이 없습니다</p>
          </div>
        </div>
      )}
      {schedules.map((schedule, index) => (
        <CalendarBlockItem
          key={index}
          isLast={index === schedules.length - 1}
          schedule={schedule}
        />
      ))}
    </section>
  );
}
