"use client";

import { useState } from "react";
import ScheduleEditItem from "./schedule-edit-item";
import { compareDates } from "@/utils/date";
import TabSelector from "./tab-selector";
import { useScheduleStore } from "@/zustand/schedule-store";

export default function ScheduleEditContainer() {
  const [isOverdue, setIsOverdue] = useState(false);
  const { schedules } = useScheduleStore();
  const now = new Date().toISOString();

  return (
    <div>
      <h2 className="px-4 mb-2 section-name">추가된 모든 일정</h2>
      <TabSelector isOverdue={isOverdue} setIsOverdue={setIsOverdue} />
      {isOverdue ? (
        <div>
          {schedules
            .filter((schedule) => compareDates(schedule.date_end, now) === -1)
            .map((schedule) => (
              <ScheduleEditItem key={schedule.id} schedule={schedule} />
            ))}
        </div>
      ) : (
        <div>
          {schedules
            .filter((schedule) => compareDates(schedule.date_end, now) !== -1)
            .map((schedule) => (
              <ScheduleEditItem key={schedule.id} schedule={schedule} />
            ))}
        </div>
      )}
    </div>
  );
}
