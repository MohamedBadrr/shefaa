export function mapStatus(status: string) {
  const name = status.trim().toLowerCase().replace(/[\s-]+/g, "_");
  let className = "bg-neutral-100 text-neutral-600";

  switch (name) {
    case "pending":
      className = "bg-amber-50 text-amber-700";
      break;
    case "reserved":
      className = "bg-primary-50 text-primary-700";
      break;
    case "paid_cash":
    case "paid_online":
    case "completed":
    case "approved":
    case "active":
    case "available":
      className = "bg-green-50 text-green-700";
      break;
    case "cancelled":
    case "rejected":
      className = "bg-red-50 text-red-700";
      break;
    case "inactive":
    case "unavailable":
      className = "bg-neutral-100 text-neutral-600";
      break;
  }

  const label = name.replaceAll("_", " ");

  return {
    label: label ? label[0].toUpperCase() + label.slice(1) : "Unknown",
    className,
  };
}
