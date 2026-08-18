type AppointmentStatusMeta = {
  label: string;
  className: string;
};

const statusStyles: Record<string, AppointmentStatusMeta> = {
  pending: { label: "Pending", className: "bg-amber-50 text-amber-700" },
  reserved: { label: "Reserved", className: "bg-primary-50 text-primary-700" },
  paid_cash: { label: "Paid cash", className: "bg-emerald-50 text-emerald-700" },
  paid_online: { label: "Paid online", className: "bg-green-50 text-green-700" },
  completed: { label: "Completed", className: "bg-green-50 text-green-700" },
  cancelled: { label: "Cancelled", className: "bg-red-100 text-red-600" },
  rejected: { label: "Rejected", className: "bg-red-50 text-red-700" },
};

export const getAppointmentStatusMeta = (status: string): AppointmentStatusMeta =>
  statusStyles[status] ?? {
    label: status.replaceAll("_", " "),
    className: "bg-neutral-100 text-neutral-600",
  };
