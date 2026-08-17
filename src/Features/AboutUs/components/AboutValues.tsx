import { aboutValuesData } from "@/Constants/data";
import WrapperComponent from "@/components/ui/WrapperComponent";

const AboutValues = () => {
  return (
    <WrapperComponent className="bg-primary-50/50 py-14 md:py-18">
      <div className="mx-auto max-w-253.75">
        <div className="mx-auto max-w-145 text-center">
          <h2 className="text-[30px] leading-tight font-bold text-neutral-900 md:text-[40px]">
            Built around{" "}
            <span className="bg-linear-to-r from-primary-700 via-primary-500 to-primary-200 bg-clip-text text-transparent">
              better healthcare
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-130 text-[14px] leading-[1.75] font-medium text-neutral-500">
            Our work is guided by practical care, secure technology, and a
            better patient experience at every step.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValuesData.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group rounded-lg border border-primary-200 bg-white p-6 shadow-[8px_18px_30px_rgba(0,164,244,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-[10px_22px_34px_rgba(0,164,244,0.14)]"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                <Icon size={23} strokeWidth={2.4} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-neutral-900 transition-colors duration-300 group-hover:text-primary-700">
                {title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.7] font-medium text-neutral-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </WrapperComponent>
  );
};

export default AboutValues;
