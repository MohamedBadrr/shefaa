import shefaaAboutArtwork from "@/assets/shefaa-about-cover.png";
import { aboutStatsData } from "@/Constants/data";
import { Button } from "@/components/ui/button";
import WrapperComponent from "@/components/ui/WrapperComponent";

const AboutHero = () => {
  return (
    <WrapperComponent className="bg-white pt-10 pb-14 md:pt-16 md:pb-18">
      <div className="mx-auto grid max-w-253.75 items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div>
          <h1 className="text-[40px] leading-[1.15] font-bold text-neutral-900 md:text-[56px]">
            Human care,{" "}
            <span className="bg-linear-to-r from-primary-700 via-primary-500 to-primary-200 bg-clip-text text-transparent">
              simplified
            </span>{" "}
            for every patient.
          </h1>

          <p className="mt-6 max-w-145 text-[15px] leading-[1.8] font-medium text-neutral-500">
            Shefaa brings trusted doctors, easy appointments, secure online
            consultations, and digital healthcare tools into one calm
            experience. We help patients get the right care faster, with less
            friction and more confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button variant="gradient" size="lg">
              Book an appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-300 text-primary-700"
            >
              Explore departments
            </Button>
          </div>

          <div className="mt-10 grid max-w-150 grid-cols-3 gap-4">
            {aboutStatsData.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-primary-50 p-4">
                <p className="text-[26px] leading-none font-extrabold text-primary-700">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] leading-tight font-semibold text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-5 -right-5 h-30 w-30 rounded-full bg-primary-50" />
          <div className="relative overflow-hidden rounded-2xl border border-primary-300 bg-white p-3 shadow-[14px_22px_42px_rgba(0,164,244,0.13)]">
            <img
              src={shefaaAboutArtwork}
              alt="About Shefaa"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default AboutHero;
