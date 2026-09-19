import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { DoctorTimeValues } from "@/Features/DoctorDashboard/@types/doctorTimes";
import { addDoctorTime } from "@/Features/DoctorDashboard/services/addDoctorTime";
import { getDoctorTimes } from "@/Features/DoctorDashboard/services/getDoctorTimes";
import { removeDoctorTime } from "@/Features/DoctorDashboard/services/removeDoctorTime";

export const useAdminDoctorTimes = (doctorId: string) =>
  useQuery({
    queryKey: ["admin-doctor-times", doctorId],
    queryFn: () => getDoctorTimes(doctorId),
    enabled: Boolean(doctorId),
  });

export const useAddAdminDoctorTime = (doctorId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: DoctorTimeValues) => addDoctorTime(doctorId, values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-doctor-times", doctorId],
      });
      queryClient.invalidateQueries({ queryKey: ["doctor-schedules", doctorId] });
      toast.success("Doctor time added.");
    },
    onError: (error) => toast.error(error.message || "Could not add time"),
  });
};

export const useRemoveAdminDoctorTime = (doctorId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (timeId: string) => removeDoctorTime({ doctorId, timeId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-doctor-times", doctorId],
      });
      queryClient.invalidateQueries({ queryKey: ["doctor-schedules", doctorId] });
      toast.success("Doctor time removed.");
    },
    onError: (error) => toast.error(error.message || "Could not remove time"),
  });
};
