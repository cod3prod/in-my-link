import Day from "./day";

export default function Week({
  week,
  events,
  colorClasses,
  isInRange,
}: WeekProps) {
  return (
    <div className="grid grid-cols-7">
      {week.map((day, idx) => {
        const dayEvents = day
          ? events.filter((ev) => isInRange(day, ev.start, ev.end))
          : [];
        return (
          <Day
            key={idx}
            day={day}
            events={dayEvents}
            colorClasses={colorClasses}
          />
        );
      })}
    </div>
  );
}
