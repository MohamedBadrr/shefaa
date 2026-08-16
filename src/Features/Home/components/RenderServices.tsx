import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
  className: string;
};
export const renderServiceCard = ({
  title,
  description,
  Icon,
  className,
}: Service) => {
  return (
    <article
      key={title}
      className={`rounded-2xl border border-primary-300 bg-white px-7 py-7 shadow-[10px_18px_26px_rgba(0,164,244,0.11)] ${className}`}
    >
      <div className="mb-3 flex size-8 items-center justify-center rounded-md bg-primary-50">
        <Icon
          size={18}
          strokeWidth={2.6}
          className="text-primary-700"
          aria-hidden="true"
        />
      </div>

      <h3 className="text-[16px] leading-6 font-bold text-primary-700">
        {title}
      </h3>

      <p className="mt-2 text-[11px] leading-[1.65] font-semibold text-neutral-500">
        {description}
      </p>
    </article>
  );
};
