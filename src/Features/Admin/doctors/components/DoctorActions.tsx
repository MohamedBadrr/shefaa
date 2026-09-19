import { Eye, Pencil, Trash2 } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import AdminDialog from "../../components/AdminDialog";
import type { AdminDoctor } from "../@types/adminDoctor";
import AdminDoctorTimesManager from "../appointments/components/AdminDoctorTimesManager";
import { useDeleteAdminDoctor } from "../hooks/useAdminDoctorMutations";
import DoctorDetails from "./DoctorDetails";
import DoctorUpdateForm from "./DoctorUpdateForm";

const DoctorActions = ({ doctor }: { doctor: AdminDoctor }) => {
  const deleteDoctor = useDeleteAdminDoctor();

  return (
    <div className="flex items-center justify-end gap-2">
      <AdminDialog
        title={`Dr. ${doctor.firstName} ${doctor.lastName}`}
        description="Doctor full data and weekly times."
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="View doctor">
            <Eye size={16} />
          </Button>
        }
      >
        <DoctorDetails doctor={doctor} />
        <AdminDoctorTimesManager doctorId={doctor.id} />
      </AdminDialog>
      <AdminDialog
        title={`Update Dr. ${doctor.firstName}`}
        description="Update doctor profile, approval, availability, and times."
        wide
        trigger={
          <Button type="button" variant="outline" size="icon-sm" aria-label="Update doctor">
            <Pencil size={16} />
          </Button>
        }
      >
        <DoctorUpdateForm doctor={doctor} />
        <AdminDoctorTimesManager doctorId={doctor.id} />
      </AdminDialog>
      <ConfirmationDialog
        title="Delete doctor?"
        description="This deletes related schedules, reviews, appointments, and profile records."
        confirmLabel="Delete doctor"
        cancelLabel="Cancel"
        isPending={deleteDoctor.isPending}
        onConfirm={() => deleteDoctor.mutate(doctor.id)}
        trigger={
          <Button type="button" variant="destructive" size="icon-sm" aria-label="Delete doctor">
            <Trash2 size={16} />
          </Button>
        }
      />
    </div>
  );
};

export default DoctorActions;
