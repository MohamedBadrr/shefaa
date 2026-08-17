import type { LoginFormValues } from "@/@types";
import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import { loginValidationSchema } from "../validations/loginValidation";
import { useLogin } from "../hooks/useLogin";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { mutate: loginMutation, isPending: loginPending } = useLogin();

  const handleSubmit = (values: LoginFormValues) => {
    loginMutation({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="mt-5 space-y-2">
        <InputField
          name="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          icon={<Mail size={18} />}
          className="bg-primary-50/25"
          labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          icon={<LockKeyhole size={18} />}
          className="bg-primary-50/25"
          labelClassName="not-sr-only mb-2 block text-[12px] font-extrabold text-neutral-700"
        />

        <Button
          type="submit"
          loading={loginPending}
          disabled={loginPending}
          variant="gradient"
          size="lg"
          className=" w-full"
        >
          Sign in to Shefaa
          <LogIn size={18} aria-hidden="true" />
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
