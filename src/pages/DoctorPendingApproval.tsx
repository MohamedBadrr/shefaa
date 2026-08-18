import WrapperComponent from "@/components/ui/WrapperComponent";
import { Clock3, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const DoctorPendingApproval = () => {
  return (
    <WrapperComponent className="bg-primary-50/40 py-10 min-h-screen">
      <div className="mx-auto max-w-135 rounded-xl border border-primary-200 bg-white p-8 text-center shadow-[0_18px_40px_rgba(0,132,212,0.1)] md:p-12">
        <div className="mx-auto flex size-16 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
          <Clock3 size={30} aria-hidden="true" />
        </div>
        <p className="mt-6 text-[12px] font-extrabold tracking-[0.16em] text-primary-600 uppercase">
          Application under review
        </p>
        <h1 className="mt-3 text-[30px] leading-tight font-extrabold text-neutral-900 md:text-[38px]">
          Your doctor account is pending approval
        </h1>
        <p className="mx-auto mt-4 max-w-115 text-[14px] leading-[1.8] font-medium text-neutral-500">
          The Shefaa admin team is reviewing your professional information. You
          will be able to access your dashboard once your application is
          approved.
        </p>
        <div className="mt-7 flex items-center justify-center gap-2 text-[12px] font-bold text-primary-700">
          <ShieldCheck size={17} aria-hidden="true" />
          Your submitted information is secure
        </div>
        <Link to="/">
          <Button
            variant="outline"
            className="mt-8 border-primary-300 text-primary-700"
          >
            Back to home
          </Button>
        </Link>
      </div>
    </WrapperComponent>
  );
};

export default DoctorPendingApproval;
