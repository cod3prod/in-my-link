import CalendarBlock from "@/components/block/calendar-block";
import { CalendarStyleEnum } from "@/enums/calendar-style.enum";
import { useScheduleStore } from "@/zustand/schedule-store";

export default function CalendarListPreview({
  type,
}: {
  type: CalendarStyleEnum;
}) {
  const { schedules } = useScheduleStore();
  if (type === CalendarStyleEnum.CALENDAR) return null;
  return <CalendarBlock schedules={schedules} />;
}
