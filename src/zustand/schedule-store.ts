"use client";

import { create } from "zustand";

interface ScheduleState {
    schedules: Schedule[];
    setSchedules: (schedules: Schedule[]) => void;
    addSchedule: (schedule: Schedule) => void;
    removeSchedule: (scheduleId: number) => void;
    updateSchedule: (scheduleId: number, newSchedule: Partial<Schedule>) => void;
}

export const useScheduleStore = create<ScheduleState>((set) => ({
    schedules: [],
    setSchedules: (schedules) => set({ schedules }),
    addSchedule: (schedule) => set((state) => ({ schedules: [...state.schedules, schedule] })),
    removeSchedule: (scheduleId) => set((state) => ({ schedules: state.schedules.filter((schedule) => schedule.id !== scheduleId) })),
    updateSchedule: (scheduleId, newSchedule) => set((state) => ({ schedules: state.schedules.map((schedule) => (schedule.id === scheduleId ? { ...schedule, ...newSchedule } : schedule)) })), 
}))