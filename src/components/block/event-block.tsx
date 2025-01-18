import { formatDateTime, calculateDaysLeft } from "@/utils/date";

export default function EventBlock({
  title,
  sub_text_01,
  sub_text_02,
  date_start,
  date_end,
}: {
  title: string;
  sub_text_01: string | null;
  sub_text_02: string | null;
  date_start: string;
  date_end: string;
}) {
  const dateStart = formatDateTime(date_start);
  const dateEnd = formatDateTime(date_end);
  const daysLeft = calculateDaysLeft(date_end);
  return (
    <section className="w-full rounded-lg bg-white shadow-lg">
      <div className="text-md p-4 text-gray-200">{sub_text_01 || "event"}</div>
      <div className="flex flex-col items-center px-4">
        <p>{title || "타이틀을 입력해주세요"}</p>
        <p className="mb-4 font-light text-gray-400">
          {sub_text_02 || "이벤트 설명을 입력해보세요"}
        </p>
      </div>
      <div className="flex items-center justify-between rounded-b-lg bg-gray-100 px-4 py-3 text-sm">
        <span className="text-gray-400">{`${dateStart} ~ ${dateEnd}`}</span>
        <span className="flex items-center text-gray-400 transition-colors hover:text-gray-700 whitespace-nowrap">
          {daysLeft}
        </span>
      </div>
    </section>
  );
}
