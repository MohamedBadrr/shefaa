import { useMutation } from "@tanstack/react-query";
import { login } from "../services/login";
import { useAuthStore } from "@/store/AuthStore";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useLogin = ()=>  {
  const {setAuthUser} = useAuthStore();
    const navigate = useNavigate();
    return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      setAuthUser(user);
      toast.success("Signned in Successfully");

      if (user.role === "admin") {
        navigate("/about-us");
        return;
      }

      if (user.role === "patient") {
        navigate("/");
        return;
      }

      if (user.role === "doctor") {
        if (user.doctorProfile.approvalStatus === "pending") {
          navigate("/doctor/pending-approval");
          return;
        }

        if (user.doctorProfile.approvalStatus === "rejected") {
          navigate("/doctor/rejected");
          return;
        }

        navigate("/doctor/dashboard");
      }
    },

    onError: (error) => {
      toast.error(error.message ?? "Login Failed");
    },
  })
}; 