import { cn } from "@/lib/utils";
import { useField } from "formik";
import React, { type ReactNode } from "react";
import { Label } from "../ui/label";
type TextareaFieldProps = {
  name: string;
  label?: string | ReactNode;
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
};

const TextareaField = ({
  className,
  name,
  label,
  placeholder,
  containerClassName,
  labelClassName,
  ...props
}: React.ComponentProps<"textarea"> & TextareaFieldProps) => {
  const [field, meta] = useField(name);
  return (
    <div className={cn(containerClassName)}>
      <Label htmlFor={name} className={cn("sr-only", labelClassName)}>
        {label}
      </Label>
      <textarea
        data-slot="textarea"
        placeholder={placeholder}
        className={cn(
          "flex field-sizing-content min-h-20 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          meta.touched && meta.error
            ? "border-red-500 focus-visible:border-red-500"
            : "border-primary-300 focus-visible:border-primary-500",
          className,
        )}
        {...field}
        {...props}
      />
      <p className="mt-1 h-4 text-xs text-start text-red-500">
        {meta.touched && meta.error ? meta.error : ""}
      </p>
    </div>
  );
};

export default TextareaField;
