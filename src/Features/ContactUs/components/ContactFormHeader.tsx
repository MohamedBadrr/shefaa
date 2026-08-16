const ContactFormHeader = () => {
  return (
    <div className="border-b border-xl border-primary-100 pb-6">
      <p className="text-[12px] font-extrabold tracking-[0.16em] text-primary-600 uppercase">
        Send a message
      </p>
      <h2 className="mt-2 text-[26px] leading-tight font-extrabold text-neutral-900 md:text-[32px]">
        Tell us what you need.
      </h2>
      <p className="mt-2 text-[13px] leading-relaxed font-medium text-neutral-500">
        We will get back to you as soon as we can.
      </p>
    </div>
  );
};

export default ContactFormHeader;
