import type { ReactNode } from "react";

type DoctorProfileStatProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

const DoctorProfileStat = ({ icon, label, value }: DoctorProfileStatProps) => (
  <div className="flex items-center gap-3 rounded-lg bg-primary-50/70 p-4">
    <span className="text-primary-600">{icon}</span>
    <div>
      <p className="text-xs font-semibold text-neutral-500">{label}</p>
      <p className="mt-0.5 font-extrabold text-neutral-900">{value}</p>
    </div>
  </div>
);

export default DoctorProfileStat;
