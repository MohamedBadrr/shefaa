import WrapperComponent from "@/components/ui/WrapperComponent";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { CircleAlert, MessageSquareText } from "lucide-react";

const DoctorRejected = () => {
  return (
    <WrapperComponent className="bg-primary-50/40  py-10 min-h-screen">
      <div className="mx-auto max-w-135 rounded-xl border border-red-200 bg-white p-8 text-center shadow-[0_18px_40px_rgba(220,38,38,0.08)] md:p-12">
        <div className="mx-auto flex size-16 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <CircleAlert size={30} aria-hidden="true" />
        </div>
        <p className="mt-6 text-[12px] font-extrabold tracking-[0.16em] text-red-600 uppercase">
          Application update
        </p>
        <h1 className="mt-3 text-[30px] leading-tight font-extrabold text-neutral-900 md:text-[38px]">
          Your doctor application was not approved
        </h1>
        <p className="mx-auto mt-4 max-w-115 text-[14px] leading-[1.8] font-medium text-neutral-500">
          Please contact the Shefaa support team for more information about the
          review and the next steps.
        </p>
        <Link to="/contact-us">
          <Button variant="gradient" className="mt-8">
            <MessageSquareText size={17} aria-hidden="true" />
            Contact support
          </Button>
        </Link>
      </div>
    </WrapperComponent>
  );
};

export default DoctorRejected;
