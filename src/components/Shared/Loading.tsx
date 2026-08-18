import { LoaderCircle } from "lucide-react";

type LoadingProps = {
  label?: string;
};

const Loading = ({ label = "Loading" }: LoadingProps) => (
  <div className="flex min-h-48 flex-col items-center justify-center gap-3 text-primary-700" role="status" aria-live="polite">
    <LoaderCircle size={32} className="animate-spin" aria-hidden="true" />
    <span className="text-sm font-bold text-neutral-500">{label}</span>
  </div>
);

export default Loading;
