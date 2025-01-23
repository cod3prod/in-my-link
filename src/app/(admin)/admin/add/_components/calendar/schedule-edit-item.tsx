import ListViewInfo from "@/components/block/calendar-block/list-view-info";
import StatusBadge from "@/components/block/calendar-block/status-badge";
import { compareDates } from "@/utils/date";
import ScheduleDeleteButton from "./schedule-delete-button";
import ScheduleUpdateButton from "./schedule-update-button";

export default function ScheduleEditItem({ schedule }: { schedule: Schedule }) {
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
    <div className="h-40 border-b-1 border-gray-300 flex flex-col justify-center gap-4 sm:grid sm:grid-cols-5 px-4 sm:p-4">
      <div className="flex gap-4 sm:col-span-4 sm:p-4">
        <StatusBadge status={status} />
        <ListViewInfo schedule={schedule} />
      </div>
      <div className="flex sm:flex-col justify-end sm:justify-between items-center gap-2 sm:col-span-1 sm:p-4">
        <ScheduleUpdateButton schedule={schedule} />
        <ScheduleDeleteButton scheduleId={schedule.id!} />
      </div>
    </div>
  );
}
