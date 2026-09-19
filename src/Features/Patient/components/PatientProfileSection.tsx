import WithLoadingAndError from "@/HOCs/WithLoadingandError";
import { useAuthStore } from "@/store/AuthStore";
import PatientProfileForm from "./PatientProfileForm";

const PatientProfileSection = () => {
  const { user, isInitialized } = useAuthStore();

  return (
    <section className="mx-auto mt-8 w-full max-w-3xl rounded-2xl border border-primary-200 bg-white p-6 shadow-[0_18px_45px_rgba(0,126,190,0.08)] md:p-10">
      <WithLoadingAndError
        isLoading={!isInitialized}
        isError={isInitialized && user?.role !== "patient"}
        errorMessageProps={{
          message: "Patient profile unavailable.",
          description: "Sign in with a patient account to update your profile.",
        }}
      >
        <PatientProfileForm />
      </WithLoadingAndError>
    </section>
  );
};

export default PatientProfileSection;
