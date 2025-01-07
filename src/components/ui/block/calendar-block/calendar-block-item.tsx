import ListViewInfo from "./list-view-info";
import StatusBadge from "./status-badge";
import TimelineDot from "./timeline-dot";
import { compareDates } from "@/utils/date";

export default function CalendarBlockItem({
  schedule,
  isLast,
}: {
  schedule: Schedule;
  isLast: boolean;
}) {
  if (!schedule) return null;

  let status: "OPEN" | "CLOSED" | "SOON";
  const now = new Date().toISOString();

  if (compareDates(schedule.date_start, now) === 1) {
    status = "SOON";
  } else if (compareDates(schedule.date_end, now) === -1) {
    status = "CLOSED";
  } else {
    status = "OPEN";
  }

  return (
    <div className="ml-10 flex w-full gap-1 h-20">
      <StatusBadge status={status} className="-translate-x-4" />
      <TimelineDot isLast={isLast} />
      <ListViewInfo schedule={schedule} />
    </div>
  );
}
