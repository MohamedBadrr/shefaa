import type { ContactInfoItem } from "@/@types";

const ContactInfoCard = ({
  title,
  value,
  description,
  Icon,
}: ContactInfoItem) => {
  return (
    <article className="group flex gap-4 border-b border-primary-100 py-5 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700 transition-colors group-hover:bg-primary-500 group-hover:text-white">
        <Icon size={21} strokeWidth={2.4} aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-[14px] font-extrabold text-neutral-900">{title}</h3>
        <p className="mt-1 text-[14px] font-bold text-primary-700">{value}</p>
        <p className="mt-1 text-[12px] leading-relaxed font-medium text-neutral-400">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ContactInfoCard;
