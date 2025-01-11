interface EventProps {
  title: string;
  start: Date;
  end: Date;
  sequence: number;
}

interface DayProps {
  day: Date | null;
  events: EventProps[];
  colorClasses: string[];
}

interface WeekProps {
  week: (Date | null)[];
  events: EventProps[];
  colorClasses: string[];
  isInRange: (day: Date, start: Date, end: Date) => boolean;
}

interface MonthProps {
  weeks: (Date | null)[][];
  events: EventProps[];
}
