import CalendarBlockItem from "./calendar-block-item";

export default function CalendarBlock({
  schedules,
}: {
  schedules: Schedule[];
}) {
  return (
    <section className="flex flex-col items-center w-full p-4 rounded-lg bg-white shadow-lg">
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
