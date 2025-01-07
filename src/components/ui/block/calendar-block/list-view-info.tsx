import { formatDateRange } from "@/utils/date";
import Link from "next/link";

export default function ListViewInfo({ schedule }: { schedule: Schedule }) {
  const { title, url, date_start, date_end } = schedule;
  return (
    <div className="w-64 flex flex-col justify-start transform -translate-y-1 overflow-hidden">
      <p className="truncate text-sm text-gray-400">
        {formatDateRange(date_start, date_end)}
      </p>
      {url ? (
        <Link href={url}>
          <p className="truncate font-bold underline">{title}</p>
        </Link>
      ) : (
        <p className="truncate font-bold underline">{title}</p>
      )}
    </div>
  );
}
