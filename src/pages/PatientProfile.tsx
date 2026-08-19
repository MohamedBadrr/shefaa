import WrapperComponent from "@/components/ui/WrapperComponent";
import PatientProfileForm from "@/Features/Patient/components/PatientProfileForm";

const PatientProfile = () => (
  <main className="flex min-h-[calc(100vh-5rem)] w-full justify-center bg-primary-50/50 py-10 md:py-14">
    <WrapperComponent className="w-full max-w-5xl lg:px-10!">
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">
          Your account
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
          Update your profile
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-neutral-500 md:text-base">
          Keep your personal information accurate for a smoother care
          experience.
        </p>
      </div>
      <section className="mx-auto mt-8 w-full max-w-3xl rounded-2xl border border-primary-200 bg-white p-6 shadow-[0_18px_45px_rgba(0,126,190,0.08)] md:p-10">
        <PatientProfileForm />
      </section>
    </WrapperComponent>
  </main>
);

export default PatientProfile;
