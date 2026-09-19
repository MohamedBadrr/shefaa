import { cn } from "@/lib/utils";
import { CircleOffIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface NoDataProps {
  message?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  iconClassName?: string;
  messageClassName?: string;
  descriptionClassName?: string;
}

function NoData({
  message = "No data found",
  description,
  className = "",
  icon = <CircleOffIcon size={50} className="text-950" />,
  iconClassName = "",
  messageClassName = "",
  descriptionClassName = "",
}: NoDataProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center p-8 text-center",
        className,
      )}
    >
      <div className={cn("mb-4 text-primary-950", iconClassName)}>{icon}</div>
      <h3
        className={cn(
          "mb-1 text-lg font-medium text-gray-900",
          messageClassName,
        )}
      >
        {message}
      </h3>
      {description && (
        <p
          className={cn("max-w-md text-sm text-gray-500", descriptionClassName)}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default NoData;
