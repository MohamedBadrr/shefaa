import { contactInfoData } from "@/Constants/data";
import { Clock3 } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard";

const ContactDetails = () => {
  return (
    <aside className="pt-1">
      <p className="text-[12px] font-extrabold tracking-[0.16em] text-primary-600 uppercase">
        Reach out directly
      </p>
      <h2 className="mt-3 max-w-100 text-[29px] leading-[1.22] font-extrabold text-neutral-900 md:text-[36px]">
        Find the right way to connect.
      </h2>
      <p className="mt-4 max-w-108 text-[14px] leading-[1.75] font-medium text-neutral-500">
        Choose the channel that feels easiest. We will make sure your question
        gets to the right team.
      </p>

      <div className="mt-8 max-w-105">
        {contactInfoData.map((item) => (
          <ContactInfoCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-8 flex max-w-105 gap-3 border-l-2 border-primary-400 bg-primary-50 px-4 py-4">
        <Clock3
          size={19}
          className="mt-0.5 shrink-0 text-primary-700"
          aria-hidden="true"
        />
        <p className="text-[12px] leading-[1.6] font-semibold text-neutral-600">
          <span className="block font-extrabold text-neutral-900">
            Support hours
          </span>
          Monday to Friday, 9:00 AM to 6:00 PM (Cairo time)
        </p>
      </div>
    </aside>
  );
};

export default ContactDetails;
