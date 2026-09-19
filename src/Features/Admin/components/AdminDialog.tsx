import type { ReactElement, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type AdminDialogProps = {
  trigger: ReactElement;
  title: string;
  description: string;
  children: ReactNode;
  wide?: boolean;
};

const AdminDialog = ({
  trigger,
  title,
  description,
  children,
  wide = false,
}: AdminDialogProps) => (
  <Dialog>
    <DialogTrigger render={trigger} />
    <DialogContent
      className={
        wide
          ? "max-h-[90vh] overflow-y-auto sm:max-w-5xl"
          : "max-h-[90vh] overflow-y-auto sm:max-w-2xl"
      }
    >
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  </Dialog>
);

export default AdminDialog;
