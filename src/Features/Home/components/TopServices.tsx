import WrapperComponent from "@/components/ui/WrapperComponent";
import waves from "@/assets/waves.png";

import { BottomServicesData, TopServicesData } from "@/Constants/data";
import { renderServiceCard } from "./RenderServices";

const TopServices = () => {
  return (
    <WrapperComponent className="relative overflow-hidden bg-white pt-10 pb-17 md:pt-9 lg:pt-8">
      <div className="mx-auto max-w-251.25">
        <div className="mx-auto mb-9 max-w-146.25 text-center">
          <h2 className="text-[30px] leading-tight font-bold text-neutral-900 md:text-[40px]">
            Top{" "}
            <span className="bg-linear-to-r from-primary-200 via-primary-300 to-primary-500 bg-clip-text text-transparent   ">
              services
            </span>{" "}
            we offer
          </h2>
          <p className="mt-7 text-[11px] leading-[1.55] font-medium text-neutral-300 md:text-[15px]">
            In today's fast-paced world, your health deserves the utmost
            attention and convenience. That's why HealNet offers a suite of
            integrated services designed to cater to your healthcare needs
            digitally:
          </p>
        </div>

        <div className="relative">
          <img
            src={waves}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 -left-12 z-0 hidden h-8 w-26 object-contain md:block lg:-left-13"
          />

          <div className="relative z-10 flex flex-col gap-7.5">
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-[1.54fr_1fr]">
              {TopServicesData.map(renderServiceCard)}
            </div>

            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-3">
              {BottomServicesData.map(renderServiceCard)}
            </div>
          </div>

          <img
            src={waves}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -bottom-3 z-20 hidden h-8 w-[104px] object-contain md:block lg:-right-13"
          />
        </div>
      </div>
    </WrapperComponent>
  );
};

export default TopServices;
