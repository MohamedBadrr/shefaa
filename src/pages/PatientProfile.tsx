import WrapperComponent from "@/components/ui/WrapperComponent";
import PatientProfileHeader from "@/Features/Patient/components/PatientProfileHeader";
import PatientProfileSection from "@/Features/Patient/components/PatientProfileSection";

const PatientProfile = () => (
  <main className="flex min-h-[calc(100vh-5rem)] w-full justify-center bg-primary-50/50 py-10 md:py-14">
    <WrapperComponent className="w-full max-w-5xl lg:px-10!">
      <PatientProfileHeader />
      <PatientProfileSection />
    </WrapperComponent>
  </main>
);

export default PatientProfile;
