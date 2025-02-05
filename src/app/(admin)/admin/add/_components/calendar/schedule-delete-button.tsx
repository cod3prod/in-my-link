"use client";

import Button from "@/components/ui/button";
import { supabase } from "@/libs/supabase/client";
import { useScheduleStore } from "@/zustand/schedule-store";

export default function ScheduleDeleteButton({
  scheduleId,
}: {
  scheduleId: number;
}) {
  const { removeSchedule } = useScheduleStore();
  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from("schedules")
        .delete()
        .eq("id", scheduleId);
      if (error) throw error;
      removeSchedule(scheduleId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      className="w-16 bg-red-100 hover:bg-red-300 text-red-500 my-0"
      type="button"
      onClick={handleDelete}
    >
      삭제
    </Button>
  );
}
