"use client";

import useCalendar from "@/hooks/use-calendar";
import DaysOfTheWeek from "./days-of-the-week";
import Month from "./month";
import MonthNavigator from "./month-navigator";
import { CalendarStyleEnum } from "@/enums/calendar-style.enum";

export default function Calendar({schedules, type}: {schedules: Schedule[], type: CalendarStyleEnum}) {
  const {
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    events,
  } = useCalendar(schedules);

  if (type === CalendarStyleEnum.LIST) return null;

  function getDaysInMonth(year: number, month: number) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  const daysArray = getDaysInMonth(currentYear, currentMonth);

  const firstDay = new Date(currentYear, currentMonth, 1);
  const startDay = firstDay.getDay();

  const weeks: (Date | null)[][] = [];
  let currentWeek: (Date | null)[] = Array(startDay).fill(null);

  daysArray.forEach((day) => {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <MonthNavigator
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
        />
        <DaysOfTheWeek />
        <Month weeks={weeks} events={events} />
      </div>
    </div>
  );
}
