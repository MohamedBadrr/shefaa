import { Check, X } from "lucide-react";
import ConfirmationDialog from "@/components/Shared/ConfirmationDialog";
import { Button } from "@/components/ui/button";
import { useUpdateAdminDoctorApproval } from "../hooks/useUpdateAdminDoctorApproval";

const PendingDoctorActions = ({ doctorId }: { doctorId: string }) => {
  const approval = useUpdateAdminDoctorApproval();

  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        type="button"
        variant="gradient"
        size="sm"
        loading={approval.isPending && approval.variables?.approvalStatus === "approved"}
        disabled={approval.isPending}
        onClick={() => approval.mutate({ doctorId, approvalStatus: "approved" })}
      >
        <Check size={16} />
        Approve
      </Button>
      <ConfirmationDialog
        title="Reject doctor request?"
        description="Are you sure you want to reject this doctor's registration request?"
        confirmLabel="Reject request"
        cancelLabel="Cancel"
        isPending={approval.isPending}
        onConfirm={() => approval.mutate({ doctorId, approvalStatus: "rejected" })}
        trigger={
          <Button
            type="button"
            variant="destructive"
            size="sm"
            loading={approval.isPending && approval.variables?.approvalStatus === "rejected"}
            disabled={approval.isPending}
          >
            <X size={16} />
            Reject
          </Button>
        }
      />
    </div>
  );
};

export default PendingDoctorActions;
