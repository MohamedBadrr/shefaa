import WrapperComponent from "@/components/ui/WrapperComponent";
import PatientProfileForm from "@/Features/Patient/components/PatientProfileForm";

const PatientProfile = () => (
  <main className="bg-primary-50/50 items-cent flex justify-center w-full py-12 md:py-16">
    <WrapperComponent className=" lg:px-0!">
      <div className="">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">
          Your account
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-neutral-900">
          Update your profile
        </h1>
        <p className="mt-3 text-sm leading-6 text-neutral-500">
          Keep your personal information accurate for a smoother care
          experience.
        </p>
      </div>
      <section className="mt-8  rounded-2xl border border-primary-200 bg-white p-5 md:p-8">
        <PatientProfileForm />
      </section>
    </WrapperComponent>
  </main>
);

export default PatientProfile;
