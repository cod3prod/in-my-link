import Week from "./week";

export default function Month({ weeks, events }: MonthProps) {
  const colorClasses = [
    "bg-indigo-400",
    "bg-purple-500",
    "bg-teal-600",
    "bg-green-700",
    "bg-yellow-800",
  ];

  function startOfDay(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  function isInRange(day: Date, start: Date, end: Date) {
    const dayStart = startOfDay(day).getTime();
    const startDay = startOfDay(start).getTime();
    const endDay = startOfDay(end).getTime();
    return dayStart >= startDay && dayStart <= endDay;
  }

  return (
    <>
      {weeks.map((week, i) => (
        <Week
          key={i}
          week={week}
          events={events}
          colorClasses={colorClasses}
          isInRange={isInRange}
        />
      ))}
    </>
  );
}
