import CalendarBlock from "@/components/block/calendar-block";

export default function CalendarListPreview({
  schedules,
  type,
}: {
  schedules: Schedule[];
  type: string;
}) {
  if (type === "calendar") return null;
  return <CalendarBlock schedules={schedules} />;
}
