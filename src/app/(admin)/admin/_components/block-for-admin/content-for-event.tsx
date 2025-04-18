import { formatDateTime } from "@/utils/date";

export default function ContentForEvent({
  title,
  sub_text_01,
  date_start,
  date_end,
}: {
  title: string;
  sub_text_01: string | null;
  date_start: string;
  date_end: string;
}) {
  const dateStart = formatDateTime(date_start);
  const dateEnd = formatDateTime(date_end);

  return (
    <div className="space-y-0.5 input-label">
      <div className="min-w-0 flex items-center justify-start gap-2 text-left">
        <p className="text-gray-400 truncate">{title}</p>
        <span className="truncate">{sub_text_01 || "EVENT"}</span>
      </div>
      <div className="min-w-0 flex items-center gap-2 text-left">
        <p className="text-gray-400">일정</p>
        <span className="truncate">{`${dateStart} ~ ${dateEnd}`}</span>
      </div>
    </div>
  );
}
