import { Clock3, Trash2 } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { getNextDateForWeekDay } from "@/lib/date";
import type { DoctorTime } from "../@types/doctorTimes";
import { useRemoveDoctorTime } from "../hooks/useRemoveDoctorTime";
import dayjs from "dayjs";
const DoctorTimeCard = ({ time }: { time: DoctorTime }) => {
  const removeTimeMutation = useRemoveDoctorTime();
  const nextDate = getNextDateForWeekDay(time.day);

  return (
    <article className="flex flex-col justify-between gap-4 rounded-xl border border-primary-100 bg-white p-4 shadow-[0_10px_24px_rgba(0,132,212,0.06)] sm:flex-row sm:items-center">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-primary-600">
          {time.day}
          {nextDate && (
            <span className="ml-2 italic tracking-normal text-neutral-400">
              {dayjs(nextDate).format("D-M-YYYY")}
            </span>
          )}
        </p>
        <p className="mt-2 flex items-center gap-2 text-lg font-extrabold text-neutral-900">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <Clock3 size={18} />
          </span>
          {time.timeSlot.slice(0, 5)}
        </p>
      </div>
      <ConfirmationDialog
        trigger={
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 size={16} />
            Remove
          </Button>
        }
        title="Remove this time?"
        description="Patients will no longer be able to book this weekly time. Existing appointments will stay saved."
        confirmLabel="Remove time"
        isPending={removeTimeMutation.isPending}
        onConfirm={() => removeTimeMutation.mutate(time.id)}
      />
    </article>
  );
};

export default DoctorTimeCard;
