"use client";

import { useEffect, useState } from "react";

export default function useCalendar(schedules: Schedule[]) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    if (schedules) {
      setEvents(
        schedules.map((schedule, index) => ({
          title: schedule.title,
          start: new Date(schedule.date_start),
          end: new Date(schedule.date_end),
          sequence: index,
        }))
      );
    } else {
      setEvents([]);
    }
  }, [setEvents, schedules]);

  return {
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    events,
  };
}
