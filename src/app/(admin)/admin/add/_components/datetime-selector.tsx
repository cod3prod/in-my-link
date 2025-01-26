"use client";

import InputDateOrTime from "@/components/ui/input-date-or-time";
import { useBlockForm } from "@/hooks/use-block-form";
import { useEffect, useState } from "react";

export default function DatetimeSelector({
  label,
  id,
}: {
  label: string;
  id: string;
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { dispatch } = useBlockForm();

  useEffect(() => {
    const dateTime = updateCombinedDateTime(date, time);
    if (id === "start") {
      dispatch({ type: "SET_FORM", payload: { date_start: dateTime } });
    } else {
      dispatch({ type: "SET_FORM", payload: { date_end: dateTime } });
    }
  }, [date, time, dispatch, id]);

  const updateCombinedDateTime = (newDate: string, newTime: string) => {
    if (newDate && newTime) {
      const dateTime = new Date(`${newDate}T${newTime}:00Z`).toISOString();
      return dateTime;
    } else {
      return null;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <InputDateOrTime
        value={date}
        onChange={(e) => setDate(e.target.value)}
        label={label}
        id={`${id}_D `}
        type="date"
        required
      />
      <InputDateOrTime
        value={time}
        onChange={(e) => setTime(e.target.value)}
        id={`${id}_T`}
        type="time"
      />
    </div>
  );
}
