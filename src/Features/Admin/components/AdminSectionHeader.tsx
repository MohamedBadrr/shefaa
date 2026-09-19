type AdminSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  count?: number;
};

const AdminSectionHeader = ({
  eyebrow,
  title,
  description,
  count,
}: AdminSectionHeaderProps) => (
  <div className="mb-6 flex flex-col justify-between gap-4 border-b border-primary-100 pb-5 md:flex-row md:items-end">
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-extrabold text-neutral-900">
        {title}
      </h2>
      <p className="mt-2 text-sm font-medium text-neutral-500">
        {description}
      </p>
    </div>
    {typeof count === "number" && (
      <span className="w-fit rounded-full bg-primary-50 px-4 py-2 text-sm font-extrabold text-primary-700">
        {count} total
      </span>
    )}
  </div>
);

export default AdminSectionHeader;
