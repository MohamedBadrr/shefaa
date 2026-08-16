import ball from "@/assets/ball.png";
import WrapperComponent from "@/components/ui/WrapperComponent";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData, testimonialStatsData } from "@/Constants/data";

const PatientTestimonials = () => {
  return (
    <WrapperComponent className="relative overflow-hidden bg-white pt-4 pb-14 md:pt-6 md:pb-17">
      <div className="relative mx-auto max-w-253.75">
        <div className="mx-auto max-w-137.5 text-center">
          <h2 className="text-[29px] leading-[1.28] font-bold text-neutral-900 md:text-[32px]">
            <span className="bg-linear-to-r from-primary-700 via-primary-500 to-primary-200 bg-clip-text text-transparent">
              Patient Testimonials:
            </span>
            <br />
            Hear from Those We've Cared For
          </h2>
          <p className="mt-7 text-[12px] font-medium text-neutral-300 md:text-[13px]">
            Discover the difference we make through the voices of those we've
            served:
          </p>
        </div>

        <div className="relative mt-10">
          <img
            src={ball}
            alt="icon image"
            aria-hidden="true"
            className="pointer-events-none absolute -top-11 -left-8 hidden size-20 object-contain md:block lg:-left-9"
          />

          <div className="relative z-10 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:gap-x-14.5">
            {testimonialsData.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <div className="relative z-10 mx-auto my-12 grid max-w-187.5 grid-cols-2 gap-x-8 gap-y-8 md:my-15 md:grid-cols-4 md:gap-x-12">
            {testimonialStatsData.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="bg-linear-to-r from-primary-700 via-primary-500 to-primary-200 bg-clip-text text-[32px] leading-none font-extrabold text-transparent md:text-[38px]">
                  {new Intl.NumberFormat("en-US").format(stat.value)}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-[10px] leading-none font-semibold text-neutral-400 md:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:gap-x-14.5">
            {testimonialsData.slice(2).map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <img
            src={ball}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-9 -bottom-9 hidden size-22 object-contain md:block lg:-right-10"
          />
        </div>
      </div>
    </WrapperComponent>
  );
};

export default PatientTestimonials;
