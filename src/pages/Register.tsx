import logo from "@/assets/logo.png";
import DoctorRegisterForm from "@/Features/Auth/components/DoctorRegisterForm";
import PatientRegisterForm from "@/Features/Auth/components/PatientRegisterForm";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const Register = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-primary-50 via-white to-primary-100/60 px-5 py-6 md:px-10 md:py-8">
      <header className="mx-auto flex w-full max-w-270 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Shefaa logo" className="size-10" />
          <span className="text-[25px] font-semibold text-primary-700">
            Shefaa
          </span>
        </Link>
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-[12px] font-extrabold text-neutral-600 transition-colors hover:text-primary-700"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to login
        </Link>
      </header>

      <section className="mx-auto w-full max-w-215 py-10 md:py-14">
        <div className="text-center">
          <p className="text-[12px] font-extrabold tracking-[0.16em] text-primary-600 uppercase">
            Join Shefaa
          </p>
          <h1 className="mt-3 text-[32px] leading-tight font-extrabold text-neutral-900 md:text-[42px]">
            Start your healthcare journey
          </h1>
          <p className="mx-auto mt-3 max-w-130 text-[13px] leading-relaxed font-medium text-neutral-500">
            Choose how you will use Shefaa and create your account in a few
            simple steps.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-primary-200 bg-white p-5 shadow-[0_18px_50px_rgba(0,132,212,0.11)] md:p-8">
          <Tabs defaultValue="patient" className="w-full">
            <TabsList className="grid h-11 w-full grid-cols-2 bg-primary-50 p-1">
              <TabsTrigger
                value="patient"
                className="text-[13px] font-extrabold data-active:bg-white data-active:text-primary-700"
              >
                Continue as a Patient
              </TabsTrigger>
              <TabsTrigger
                value="doctor"
                className="text-[13px] font-extrabold data-active:bg-white data-active:text-primary-700"
              >
                Continue as a Doctor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="patient" className="pt-7">
              <div className="mb-6">
                <h2 className="text-[21px] font-extrabold text-neutral-900">
                  Create your patient account
                </h2>
                <p className="mt-2 text-[12px] font-medium text-neutral-500">
                  Book appointments, consult doctors, and keep your care in one
                  place.
                </p>
              </div>
              <PatientRegisterForm />
            </TabsContent>

            <TabsContent value="doctor" className="pt-7">
              <div className="mb-6">
                <h2 className="text-[21px] font-extrabold text-neutral-900">
                  Apply as a doctor
                </h2>
                <p className="mt-2 text-[12px] font-medium text-neutral-500">
                  Submit your professional details. Your application will be
                  reviewed by the Shefaa admin team.
                </p>
              </div>
              <DoctorRegisterForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default Register;
