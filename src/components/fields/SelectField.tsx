import { useField } from "formik";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  label?: string | ReactNode;
  placeholder?: string;
  options: Option[];
  containerClassName?: string;
  labelClassName?: string;
  triggerClassName?: string;
  onChange?: (value: string) => void;
};

const SelectField = ({
  name,
  label,
  placeholder = "Select an option",
  options,
  containerClassName,
  labelClassName,
  triggerClassName,
  onChange,
}: SelectFieldProps) => {
  const [field, meta, helpers] = useField(name);

  const { setValue, setTouched } = helpers;
  const selectedOption = options.find((option) => option.value === field.value);
  return (
    <div className={cn(containerClassName)}>
      <Label htmlFor={name} className={cn("sr-only", labelClassName)}>
        {label}
      </Label>

      <Select
        value={field.value}
        onValueChange={(value) => {
          setValue(value, true);
          setTouched(true, false);
          onChange?.(value);
        }}
      >
        <SelectTrigger
          id={name}
          className={cn(
            "h-12! w-full bg-white px-5 text-[13px] font-semibold text-neutral-700",
            meta.touched && meta.error
              ? "border-red-500 focus-visible:border-red-500"
              : "border-primary-300 focus-visible:border-primary-500",
            triggerClassName,
          )}
        >
          <SelectValue>{selectedOption?.label || placeholder}</SelectValue>
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <p className="mt-1 h-4 text-start text-xs text-red-500">
        {meta.touched && meta.error ? meta.error : ""}
      </p>
    </div>
  );
};

export default SelectField;
