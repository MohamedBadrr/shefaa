import { Trash2 } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import type { DoctorTime } from "@/Features/DoctorDashboard/@types/doctorTimes";
import { useRemoveAdminDoctorTime } from "../hooks/useAdminDoctorTimeMutations";

const DoctorTimeItem = ({ doctorId, time }: { doctorId: string; time: DoctorTime }) => {
  const removeTime = useRemoveAdminDoctorTime(doctorId);

  return (
    <div className="flex items-center gap-3 rounded-full border border-primary-100 bg-primary-50 px-3 py-2 text-sm font-bold text-neutral-700">
      <span>{time.day} {time.timeSlot.slice(0, 5)}</span>
      <ConfirmationDialog
        title="Remove this doctor time?"
        description="Patients will no longer see this time as bookable."
        confirmLabel="Remove"
        cancelLabel="Cancel"
        isPending={removeTime.isPending}
        onConfirm={() => removeTime.mutate(time.id)}
        trigger={
          <Button
            type="button"
            variant="ghost"
            size="icon-xs"
            className="text-red-600 hover:bg-red-50"
            aria-label={`Remove ${time.day} ${time.timeSlot.slice(0, 5)}`}
            disabled={removeTime.isPending}
          >
            <Trash2 size={14} />
          </Button>
        }
      />
    </div>
  );
};

export default DoctorTimeItem;
