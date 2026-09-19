type AdminDetailsGridProps = {
  items: {
    label: string;
    value: string | number | null | undefined;
  }[];
};

const AdminDetailsGrid = ({ items }: AdminDetailsGridProps) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <div
        key={item.label}
        className="rounded-lg border border-primary-100 bg-primary-50/50 p-3"
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-primary-600">
          {item.label}
        </p>
        <p className="mt-1 wrap-break-word text-sm font-bold text-neutral-800">
          {item.value || "N/A"}
        </p>
      </div>
    ))}
  </div>
);

export default AdminDetailsGrid;
