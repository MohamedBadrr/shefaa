import { useField } from "formik";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AdminBooleanSelectProps = {
  name: string;
  label: string;
  trueLabel: string;
  falseLabel: string;
};

const AdminBooleanSelect = ({
  name,
  label,
  trueLabel,
  falseLabel,
}: AdminBooleanSelectProps) => {
  const [field, meta, helpers] = useField<boolean>(name);

  return (
    <div className="w-full!">
      <Label
        htmlFor={name}
        className="mb-2 block text-xs font-extrabold text-neutral-700"
      >
        {label}
      </Label>
      <Select
        value={field.value ? "true" : "false"}
        onValueChange={(value) => helpers.setValue(value === "true")}
      >
        <SelectTrigger
          id={name}
          className="h-12! w-full! border-primary-300 bg-white px-5 text-[13px] font-semibold"
        >
          <SelectValue>{field.value ? trueLabel : falseLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="true">{trueLabel}</SelectItem>
          <SelectItem value="false">{falseLabel}</SelectItem>
        </SelectContent>
      </Select>
      <p className="mt-1 h-4 text-xs text-red-500">
        {meta.touched && meta.error ? meta.error : ""}
      </p>
    </div>
  );
};

export default AdminBooleanSelect;
