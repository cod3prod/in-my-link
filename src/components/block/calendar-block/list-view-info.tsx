import { FaLink } from "react-icons/fa";
import { formatDateRange } from "@/utils/date";
import Link from "next/link";

export default function ListViewInfo({ schedule }: { schedule: Schedule }) {
  const { title, url, date_start, date_end } = schedule;
  return (
    <div className="flex flex-col gap-2 justify-start transform -translate-y-1 overflow-hidden">
      <p className="truncate text-sm text-gray-400">
        {formatDateRange(date_start, date_end)}
      </p>
      {url ? (
        <Link href={url}>
          <p className="truncate font-bold hover:text-blue-300 transition-colors duration-300 cursor-pointer">
            {title}

            <FaLink className="inline ml-2" />
          </p>
        </Link>
      ) : (
        <p className="truncate font-bold">{title}</p>
      )}
    </div>
  );
}
