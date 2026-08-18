import WrapperComponent from "@/components/ui/WrapperComponent";
import DoctorProfileForm from "@/Features/DoctorDashboard/components/DoctorProfileForm";

const DoctorProfile = () => (
  <main className="bg-primary-50/50 py-12 md:py-16">
    <WrapperComponent>
      <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">Doctor account</p><h1 className="mt-2 text-3xl font-extrabold text-neutral-900">Update doctor profile</h1><p className="mt-3 text-sm leading-6 text-neutral-500">Keep your professional information current for your patients.</p></div>
      <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-primary-200 bg-white p-5 shadow-[8px_18px_30px_rgba(0,164,244,0.06)] md:p-8">
        <DoctorProfileForm />
      </section>
    </WrapperComponent>
  </main>
);

export default DoctorProfile;
