import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { logout } from "../services/logout";
import { useAuthStore } from "@/store/AuthStore";

export const useLogout = () => {
  const { clearAuth } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      clearAuth();

      toast.success("Signed out successfully");

      navigate("/");
    },

    onError: (error) => {
      toast.error(error.message ?? "Logout Failed");
    },
  });
};