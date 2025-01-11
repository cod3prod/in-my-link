"use client";

import { useEffect, useState } from "react";
import { BlockType } from "@/enums/block-type.enum";

export default function useCalendar(state: BlockFormState) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    if (state.type === BlockType.EVENT) {
      const { title, date_start, date_end } = state;
      if(title && date_start && date_end) {
        setEvents([{
          title: title,
          start: new Date(date_start),
          end: new Date(date_end),
          sequence: 0
        }])

        return;
      } 
      setEvents([]);
    } else if (state.type === BlockType.CALENDAR) {
      const { schedules } = state;
      if(schedules) {
        setEvents(schedules.map((schedule, index) => ({
          title: schedule.title,
          start: new Date(schedule.date_start),
          end: new Date(schedule.date_end),
          sequence: index
        })));
      } else {
        setEvents([]);
      }
    }      
  }, [setEvents, state]);
  
  return {
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    events
  };
}
