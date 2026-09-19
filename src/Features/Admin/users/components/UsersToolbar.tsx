import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminDialog from "../../components/AdminDialog";
import UserCreateForm from "./UserCreateForm";

const UsersToolbar = ({
  searchValue,
  onSearchChange,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
}) => (
  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center">
    <input
      value={searchValue}
      onChange={(event) => onSearchChange(event.target.value)}
      aria-label="Search users by name or email"
      placeholder="Search by user name or email"
      className="h-12 w-full rounded-lg border border-primary-300 bg-white px-5 text-sm font-semibold text-neutral-700 outline-none transition-colors placeholder:text-neutral-400 focus-visible:border-primary-500"
    />
    <AdminDialog
      title="Add user"
      description="Create a patient or admin profile."
      wide
      trigger={
        <Button type="button" variant="gradient" className="w-full md:w-fit">
          <Plus size={17} />
          Add user
        </Button>
      }
    >
      <UserCreateForm />
    </AdminDialog>
  </div>
);

export default UsersToolbar;
