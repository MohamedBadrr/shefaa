import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { useState, type ReactNode } from "react";
import { useField } from "formik";
import { Eye, EyeClosed } from "lucide-react";
type InputFieldProps = {
  icon?: ReactNode;
  name: string;
  label?: string | ReactNode;
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
};
const InputField = ({
  className,
  type,
  label,
  disabled,
  name,
  placeholder,
  icon,
  containerClassName,
  labelClassName,
  ...props
}: React.ComponentProps<"input"> & InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(name);
  const isPasswordType = type === "password";
  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className={cn(containerClassName)}>
      <Label htmlFor={name} className={cn("sr-only", labelClassName)}>
        {label}
      </Label>

      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 inset-s-0 flex items-center ps-2.5 text-xl text-primary-500">
            {icon}
          </span>
        )}

        <InputPrimitive
          {...field}
          {...props}
          id={name}
          type={isPasswordType ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "h-12 w-full rounded-lg border bg-white pr-5 pl-5 text-[13px] font-semibold text-neutral-700",
            meta.touched && meta.error
              ? "border-red-500 focus-visible:border-red-500"
              : "border-primary-300 focus-visible:border-primary-500",
            icon && "ps-10!",
            className,
          )}
        />

        {isPasswordType && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute top-1/2 right-4 -translate-y-1/2"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>

      <p className="mt-1 h-4 text-xs text-start text-red-500">
        {meta.touched && meta.error ? meta.error : ""}
      </p>
    </div>
  );
};

export default InputField;
