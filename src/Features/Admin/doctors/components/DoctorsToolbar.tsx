import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminDialog from "../../components/AdminDialog";
import DoctorCreateForm from "./DoctorCreateForm";

const DoctorsToolbar = ({ searchValue, onSearchChange }: {
  searchValue: string;
  onSearchChange: (value: string) => void;
}) => (
  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center">
    <input
      value={searchValue}
      onChange={(event) => onSearchChange(event.target.value)}
      aria-label="Search doctors by name or email"
      placeholder="Search by doctor name or email"
      className="h-12 w-full rounded-lg border border-primary-300 bg-white px-5 text-sm font-semibold text-neutral-700 outline-none transition-colors placeholder:text-neutral-400 focus-visible:border-primary-500"
    />
    <AdminDialog
      title="Add doctor"
      description="Create a doctor account and approve it directly if needed."
      wide
      trigger={
        <Button type="button" variant="gradient" className="w-full md:w-fit">
          <Plus size={17} />
          Add doctor
        </Button>
      }
    >
      <DoctorCreateForm />
    </AdminDialog>
  </div>
);

export default DoctorsToolbar;
