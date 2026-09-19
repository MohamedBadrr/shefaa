import WrapperComponent from "@/components/ui/WrapperComponent";
import AdminProfileForm from "@/Features/Admin/profile/components/AdminProfileForm";

const AdminProfile = () => (
  <main className="min-h-[calc(100vh-5rem)] bg-primary-50/50 py-10 md:py-14">
    <WrapperComponent className="mx-auto w-full max-w-5xl lg:px-10!">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">Your account</p>
        <h1 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">Update your profile</h1>
        <p className="mt-3 text-sm text-neutral-500">Update your personal information and profile photo.</p>
      </header>
      <section className="mx-auto mt-8 max-w-3xl rounded-2xl border border-primary-200 bg-white p-6 md:p-10">
        <AdminProfileForm />
      </section>
    </WrapperComponent>
  </main>
);

export default AdminProfile;
