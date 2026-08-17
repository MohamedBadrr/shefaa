import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { registerDoctor, registerPatient } from "../services/register";

export const useRegisterPatient = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerPatient,
    onSuccess: () => {
      toast.success("Registration successful. You can log in now.");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message || "Patient registration failed");
    },
  });
};

export const useRegisterDoctor = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerDoctor,
    onSuccess: () => {
      toast.success("Registration successful. You can log in now.");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message || "Doctor registration failed");
    },
  });
};
