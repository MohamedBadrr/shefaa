import waves from "@/assets/waves.png";
import WrapperComponent from "@/components/ui/WrapperComponent";

const ContactHero = () => {
  return (
    <WrapperComponent className="relative overflow-hidden bg-white py-14 text-center md:py-18">
      <img
        src={waves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-11 left-0 hidden w-32 opacity-80 md:block lg:left-14"
      />
      <img
        src={waves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-11 hidden w-32 rotate-180 opacity-80 md:block lg:right-14"
      />

      <div className="relative mx-auto max-w-157.5">
        <p className="text-[12px] font-extrabold tracking-[0.16em] text-primary-600 uppercase">
          Contact us
        </p>
        <h1 className="mt-3 text-[34px] leading-tight font-extrabold text-neutral-900 md:text-[46px]">
          How can we <span className="text-primary-500">help?</span>
        </h1>
        <p className="mx-auto mt-4 max-w-122 text-[14px] leading-[1.75] font-medium text-neutral-500 md:text-[15px]">
          Our support team is ready to help with appointments, consultations,
          prescriptions, and account questions.
        </p>
      </div>
    </WrapperComponent>
  );
};

export default ContactHero;
