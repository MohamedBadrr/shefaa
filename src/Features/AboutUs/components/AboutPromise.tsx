import WrapperComponent from "@/components/ui/WrapperComponent";
import { Activity, UsersRound } from "lucide-react";

const AboutPromise = () => {
  return (
    <WrapperComponent className="bg-white py-14 md:py-18">
      <div className="mx-auto grid max-w-253.75 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-xl border border-primary-300 bg-white p-8 shadow-[10px_20px_34px_rgba(0,164,244,0.09)]">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
            <UsersRound size={24} aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-[28px] leading-tight font-bold text-neutral-900 md:text-[34px]">
            Care that feels close, even when it is digital.
          </h2>
        </div>

        <div className="rounded-xl border border-primary-200 bg-primary-50/60 p-8">
          <div className="flex items-center gap-3 text-primary-700">
            <Activity size={22} aria-hidden="true" />
            <p className="font-bold">Our promise</p>
          </div>
          <p className="mt-5 text-[15px] leading-[1.9] font-medium text-neutral-600">
            We are creating a healthcare experience where patients can ask,
            book, consult, receive prescriptions, and follow up without feeling
            lost. Shefaa combines thoughtful medical workflows with clear
            digital tools, so every patient has a simpler path to care.
          </p>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default AboutPromise;
