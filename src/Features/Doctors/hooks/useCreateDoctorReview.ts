import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@/store/AuthStore";
import type { ReviewFormValues } from "@/Features/Auth/@types";
import { createDoctorReview } from "../services/createDoctorReview";

export const useCreateDoctorReview = (doctorId: string) => {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (values: ReviewFormValues) => {
      if (!user || user.role !== "patient") {
        throw new Error("Please sign in as a patient to add a review.");
      }

      return createDoctorReview(doctorId, user.id, values.appointmentId, values);
    },
    onSuccess: () => {
      toast.success("Your review was added successfully.");
      queryClient.invalidateQueries({ queryKey: ["doctor-reviews", doctorId] });
      queryClient.invalidateQueries({ queryKey: ["public-doctors"] });
    },
    onError: (error) => toast.error(error.message || "Could not add your review"),
  });
};
