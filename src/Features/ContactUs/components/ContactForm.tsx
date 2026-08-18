import { contactFormInitialValues } from "@/Constants/data";
import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { Mail, MessageSquareText, Phone, UserRound } from "lucide-react";
import { toast } from "sonner";
import { contactValidationSchema } from "../validations/contactValidation";
import TextareaField from "@/components/fields/TextareaField";

const ContactForm = () => {
  return (
    <Formik
      initialValues={contactFormInitialValues}
      validationSchema={contactValidationSchema}
      onSubmit={(_, { resetForm }) => {
        toast.success("Your message has been sent. We will contact you soon.");
        resetForm();
      }}
    >
      <Form className="">
        <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2">
          <InputField
            name="fullName"
            label="Full name"
            placeholder="Your full name"
            icon={<UserRound size={18} />}
            labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
          />
          <InputField
            name="email"
            type="email"
            label="Email address"
            placeholder="you@example.com"
            icon={<Mail size={18} />}
            labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
          />
          <InputField
            name="phone"
            label="Phone number"
            placeholder="Your phone number"
            icon={<Phone size={18} />}
            labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
          />
          <InputField
            name="subject"
            label="Subject"
            placeholder="What is this about?"
            icon={<MessageSquareText size={18} />}
            labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
          />
        </div>
        <div className="w-full my-4">
          <TextareaField
            name="message"
            placeholder="How can we help you?"
            label="Your Message"
          />
        </div>

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="mt-3 w-full md:col-span-2 md:w-fit md:min-w-53"
        >
          Send message
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
