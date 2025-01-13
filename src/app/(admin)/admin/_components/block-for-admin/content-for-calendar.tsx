import { compareDates } from "@/utils/date";

export default function ContentForCalendar({
  schedules,
}: {
  schedules: Schedule[];
}) {
  const now = new Date().toISOString();
  let openCount = 0;
  let soonCount = 0;
  let closedCount = 0;

  for (const schedule of schedules) {
    if (compareDates(schedule.date_start, now) === 1)  soonCount += 1;
    else if (compareDates(schedule.date_end, now) === -1) closedCount += 1;
    else openCount += 1;
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-primary">OPEN</p>{" "}
        <span className="text-xs">{`${openCount} 건`}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-blue-500">SOON</p>{" "}
        <span className="text-xs">{`${soonCount} 건`}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold">CLOSED</p>{" "}
        <span className="text-xs">{`${closedCount} 건`}</span>
      </div>
    </div>
  );
}
