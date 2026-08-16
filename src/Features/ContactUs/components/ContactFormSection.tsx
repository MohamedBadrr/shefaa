import WrapperComponent from "@/components/ui/WrapperComponent";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import ContactFormHeader from "./ContactFormHeader";

const ContactFormSection = () => {
  return (
    <WrapperComponent className="bg-white pb-14 md:pb-18">
      <div className="mx-auto grid max-w-253.75 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-18">
        <ContactDetails />

        <div
          id="contact-form"
          className="rounded-lg border border-primary-200 bg-white p-5 shadow-[0_14px_38px_rgba(0,132,212,0.08)] md:p-8 lg:p-10"
        >
          <ContactFormHeader />
          <ContactForm />
        </div>
      </div>
    </WrapperComponent>
  );
};

export default ContactFormSection;
