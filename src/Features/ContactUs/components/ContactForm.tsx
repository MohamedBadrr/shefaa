import { contactFormInitialValues } from "@/Constants/data";
import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Mail, MessageSquareText, Phone, Send, UserRound } from "lucide-react";
import { toast } from "sonner";
import { contactValidationSchema } from "../validations/contactValidation";

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
      <Form className="mt-7 grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2">
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

        <div className="md:col-span-2">
          <Label
            htmlFor="message"
            className="mb-2 block text-[12px] font-extrabold text-neutral-700"
          >
            Your message
          </Label>
          <Field
            as="textarea"
            name="message"
            id="message"
            placeholder="How can we help you?"
            className="min-h-35 w-full resize-none rounded-lg border border-primary-300 bg-white px-5 py-4 text-[13px] font-semibold text-neutral-700 outline-none placeholder:text-neutral-300 focus-visible:border-primary-500 focus-visible:ring-3 focus-visible:ring-primary-200"
          />
          <p className="mt-1 h-4 text-start text-xs text-red-500">
            <ErrorMessage name="message" />
          </p>
        </div>

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="mt-3 w-full md:col-span-2 md:w-fit md:min-w-53"
        >
          Send message
          <Send size={18} aria-hidden="true" />
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
