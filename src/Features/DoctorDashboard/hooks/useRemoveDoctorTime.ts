import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@/store/AuthStore";
import { removeDoctorTime } from "../services/removeDoctorTime";

export const useRemoveDoctorTime = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);
  const doctorId = user?.role === "doctor" ? user.id : null;

  return useMutation({
    mutationFn: (timeId: string) => {
      if (!doctorId) throw new Error("Doctor account is required.");

      return removeDoctorTime({ doctorId, timeId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctor-times", doctorId] });
      queryClient.invalidateQueries({ queryKey: ["doctor-schedules", doctorId] });
      toast.success("Time removed successfully.");
    },
    onError: (error) =>
      toast.error(error.message || "Could not remove this time"),
  });
};
