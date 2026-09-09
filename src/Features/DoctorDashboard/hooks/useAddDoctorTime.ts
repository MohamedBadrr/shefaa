import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@/store/AuthStore";
import type { DoctorTimeValues } from "../@types/doctorTimes";
import { addDoctorTime } from "../services/addDoctorTime";

export const useAddDoctorTime = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const doctorId = user?.role === "doctor" ? user.id : null;

  return useMutation({
    mutationFn: (values: DoctorTimeValues) => {
      if (!doctorId) throw new Error("Doctor account is required.");

      return addDoctorTime(doctorId, values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctor-times", doctorId] });
      queryClient.invalidateQueries({ queryKey: ["doctor-schedules", doctorId] });
      toast.success("Time added successfully.");
    },
    onError: (error) => toast.error(error.message || "Could not add this time"),
  });
};
