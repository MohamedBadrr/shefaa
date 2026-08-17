import { Button } from "@/components/ui/button";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { Mail, User } from "lucide-react";
import { Form, Formik } from "formik";
import InputField from "@/components/fields/InputField";
import * as Yup from "yup";
import { toast } from "sonner";

const HelpDeskSupport = () => {
  const initialValues = { firstName: "", email: "" };
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    email: Yup.string().required().email(),
  });

  return (
    <WrapperComponent className="bg-white pt-7 pb-9 md:pt-16 md:pb-18 ">
      <div className="mx-auto max-w-202  text-center">
        <h2 className="text-[28px] leading-tight font-bold text-neutral-900 md:text-[31px]">
          Reach our{" "}
          <span className="bg-linear-to-r from-primary-700 via-primary-500 to-primary-200 bg-clip-text text-transparent">
            Help Desk
          </span>{" "}
          for support
        </h2>

        <p className="mx-auto mt-7 max-w-102 text-[12px] leading-[1.45] font-medium text-neutral-300 md:text-[13px]">
          Questions? Need assistance? Our dedicated support team is here to help
          you every step of the way:
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(_, { resetForm }) => {
            toast.success("We Will Contact you.");
            resetForm();
          }}
        >
          <Form className="flex items-start justify-between gap-4 my-10 w-full">
            <InputField
              name="firstName"
              containerClassName="w-full"
              icon={<User />}
              className="w-full!"
              placeholder="First Name"
            />
            <InputField
              name="email"
              containerClassName="w-full"
              icon={<Mail />}
              className="w-full!"
              placeholder="Email Adress"
            />
            <Button
              type="submit"
              size="lg"
              className=" rounded-lg bg-primary-500 px-5 text-[18px] font-bold shadow-none hover:bg-primary-600"
            >
              Contact us
            </Button>
          </Form>
        </Formik>
      </div>
    </WrapperComponent>
  );
};

export default HelpDeskSupport;
