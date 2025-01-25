"use client";

import { useState } from "react";
import ScheduleEditItem from "./schedule-edit-item";
import { compareDates } from "@/utils/date";
import TabSelector from "./tab-selector";
import { useScheduleStore } from "@/zustand/schedule-store";
import { FaRegCalendarTimes } from "react-icons/fa";

export default function ScheduleEditContainer() {
  const [isOverdue, setIsOverdue] = useState(false);
  const { schedules } = useScheduleStore();
  const now = new Date().toISOString();

  const filteredSchedules = isOverdue
    ? schedules.filter(
        (schedule) => compareDates(schedule.date_end, now) === -1
      )
    : schedules.filter(
        (schedule) => compareDates(schedule.date_end, now) !== -1
      );

  return (
    <div>
      <h2 className="px-4 mb-2 section-name">추가된 모든 일정</h2>
      <TabSelector isOverdue={isOverdue} setIsOverdue={setIsOverdue} />
      {filteredSchedules.length > 0 ? (
        <div>
          {filteredSchedules.map((schedule) => (
            <ScheduleEditItem key={schedule.id} schedule={schedule} />
          ))}
        </div>
      ) : (
        <div className="px-4">
          <div className="mt-4 relative flex flex-col gap-4 w-full h-64 items-center justify-center overflow-hidden rounded-md bg-gray-100">
            <FaRegCalendarTimes className="text-gray-300 text-5xl" />
            <div className="text-center text-text-666">
              {!isOverdue ? (
                <p className="text-text-333">
                  진행 중이거나 예정된 일정이 없습니다
                </p>
              ) : (
                <p className="text-text-333">지난 일정이 없습니다</p>
              )}
              <p>일정을 추가하여 많은 방문자에게 알려보세요</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
