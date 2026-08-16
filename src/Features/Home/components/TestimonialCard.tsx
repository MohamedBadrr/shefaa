import type { Testimonial } from "@/@types";

const TestimonialCard = ({
  name,
  quote,
  avatarSrc,
  avatarLabel,
  avatarClassName,
}: Testimonial) => {
  return (
    <article className="grid min-h-27 grid-cols-[56px_1fr] items-center gap-4 rounded-xl border border-primary-300 bg-white px-7 py-5 shadow-[10px_18px_26px_rgba(0,164,244,0.1)]">
      {avatarSrc ? (
        <img
          src={avatarSrc}
          alt={name}
          className="size-14 rounded-md object-cover"
        />
      ) : (
        <div
          className={`flex size-14 items-center justify-center rounded-md bg-linear-to-br text-sm font-extrabold shadow-inner ${avatarClassName}`}
        >
          {avatarLabel}
        </div>
      )}

      <p className="text-[12px] leading-[1.45] font-semibold text-neutral-500 md:text-[13px]">
        "{quote}"
        <br />
        <span className="font-extrabold text-neutral-600">- {name}</span>
      </p>
    </article>
  );
};

export default TestimonialCard;
