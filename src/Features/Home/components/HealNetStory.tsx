import msDoctora from "@/assets/msDoctora.png";
import { Button } from "@/components/ui/button";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { Link } from "react-router";

const HealNetStory = () => {
  return (
    <WrapperComponent className="bg-white pt-8 pb-12 md:pt-10 md:pb-16">
      <div className="mx-auto  max-w-263 rounded-3xl border border-primary-300 bg-white px-6 py-10 md:px-12 lg:px-14 lg:py-12">
        <h2 className="text-center text-[28px] leading-tight font-bold text-neutral-900 md:text-[30px]">
          <span className="text-primary-700">HealNet's</span>{" "}
          <span className="bg-linear-to-r from-primary-200 via-primary-300 to-primary-500 bg-clip-text text-transparent">
            Story:
          </span>{" "}
          Get to know us
        </h2>

        <div className="mt-9 grid items-center gap-8 md:grid-cols-[0.88fr_1fr] md:gap-10 lg:mt-10 lg:gap-13">
          <div className="overflow-hidden rounded-xl border border-primary-200">
            <img
              src={msDoctora}
              alt="Smiling doctor with medical team"
              className="h-full min-h-61.5 w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="max-w-109 text-[13px] leading-[1.45] font-semibold text-neutral-500 md:text-[14px]">
              HealNet is more than just an online medical service; it's a
              movement towards accessible, efficient, and compassionate
              healthcare for all. Founded by a team of visionary doctors,
              healthcare professionals, and technology experts, we are driven by
              the mission to deliver exceptional medical care directly to you,
              no matter where you are. Our platform is built on the pillars of
              trust, innovation, and patient-centricity, ensuring that every
              interaction is personalized and every treatment plan is tailored
              to your unique needs. With a network of licensed practitioners
              from diverse medical fields, we guarantee comprehensive care
              that's just a click away.
            </p>

            <Link to={"/about-us"}>
              <Button
                variant="default"
                size="lg"
                className="mt-5 h-12 min-w-56 rounded-lg bg-primary-500 px-7 text-[17px] font-bold  "
              >
                Learn more about us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default HealNetStory;
