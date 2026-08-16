import type { Department } from "@/@types";
import { Button } from "@/components/ui/button";

const DepartmentCard = ({ name, description, Icon }: Department) => {
  return (
    <article className="group cursor-pointer flex min-h-54 flex-col justify-between rounded-lg border border-primary-200 bg-white p-6 shadow-[8px_18px_30px_rgba(0,164,244,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-[10px_22px_34px_rgba(0,164,244,0.14)]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
            <Icon size={24} strokeWidth={2.4} aria-hidden="true" />
          </div>
        </div>

        <h3 className="mt-6 text-[18px] leading-tight font-bold text-neutral-900">
          {name}
        </h3>
        <p className="mt-3 text-[13px] leading-[1.65] font-medium text-neutral-500">
          {description}
        </p>
      </div>

      <Button variant="gradient" size="sm" className="mt-6 px-4">
        See doctors
      </Button>
    </article>
  );
};

export default DepartmentCard;
