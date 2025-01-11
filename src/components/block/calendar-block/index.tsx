import CalendarBlockItem from "./calendar-block-item";

export default function CalendarBlock({
  schedules,
}: {
  schedules: Schedule[];
}) {
  return (
    <section className="flex flex-col h-64 w-full overflow-scroll pt-12 px-4 rounded-lg bg-white shadow-lg [&::-webkit-scrollbar]:hidden">
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