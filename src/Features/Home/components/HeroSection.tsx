import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroBanner from "@/assets/hero.png";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { Link } from "react-router";
const HeroSection = () => {
  return (
    <WrapperComponent>
      <div className="  flex flex-col lg:flex-row items-center justify-center pb-25 pt-12.5 lg:pt-15 lg:pb-10 xl:pb-15  gap-30">
        <div className="w-full lg:w-[50%] flex flex-col gap-10 lg:gap-15">
          <h1 className="text-[45px] md:text-[56px] font-bold">
            Your{" "}
            <span className="bg-linear-to-r  from-primary-300 via-primary-500 to-primary-700 bg-clip-text text-transparent">
              trusted partner
            </span>{" "}
            in digital healthcare.
          </h1>
          <p>
            <span className="text-primary">
              Empowering Your Health at Every Step.
            </span>{" "}
            Experience personalized medical care from the comfort of your home.
            Connect with <span className="text-primary">certified doctors</span>
            , or manage prescriptions, and schedule appointments with ease.
            Ready to take control of your health?{" "}
            <span className="text-primary">Get Started </span>or Book an
            Appointment today.
          </p>
          <Link to={"/doctors"}>
            <Button variant={"gradient"} size={"lg"} className="w-fit">
              {" "}
              Book an appointment <ArrowRight />
            </Button>
          </Link>
          <p className="text-sm text-neutral-300">
            Trusted by many patients across the country.
          </p>
        </div>
        <div className="w-full lg:w-[42%] shrink-0 flex relative items-center justify-center -mt-10">
          <img src={heroBanner} alt="doctor hero banner image" />
          <div
            className="
              absolute -left-1 md:left-15.75 lg:flex lg:-left-15.75 bottom-13.75 z-20 flex items-center gap-3 rounded-xl bg-white px-5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            "
          >
            <div className="flex size-8 items-center justify-center rounded-md bg-primary-50">
              <Star size={17} className="fill-primary-700 text-primary-700" />
            </div>

            <span className="whitespace-nowrap text-sm font-semibold text-primary-700">
              Easy Appointment Booking
            </span>
          </div>
          <div className="absolute right-1 -bottom-15 z-20 w-62.5 rounded-xl border border-primary-200 bg-primary-50 px-4 pt-5 pb-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            {/* Quote Icon */}
            <div className="absolute -top-10 left-2 flex gap-1 text-primary text-[125px] font-bold leading-none">
              “
            </div>

            <p className="text-[13px] leading-4 text-neutral-700">
              Your health deserves expert care, whenever and wherever you need
              it.
            </p>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default HeroSection;
