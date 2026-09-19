import type { DoctorTime, DoctorTimeRow } from "../@types/doctorTimes";
import { weekDayOrder } from "../constants/doctorTimes";

export function mapDoctorTime(time: DoctorTimeRow): DoctorTime {
  return { id: time.id, day: time.day, timeSlot: time.time_slot };
}

export function sortDoctorTimes(times: DoctorTime[]) {
  return [...times].sort((first, second) => {
    const dayDifference = weekDayOrder.indexOf(first.day) - weekDayOrder.indexOf(second.day);
    if (dayDifference !== 0) return dayDifference;
    return first.timeSlot.localeCompare(second.timeSlot);
  });
}
