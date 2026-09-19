import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

export interface ErrorMessageProps {
  message?: string;
  description?: string;
  icon?: ReactNode;
  onRetry?: () => void;
  className?: string;
  iconClassName?: string;
  messageClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}

function ErrorMessage({
  message = "Something went wrong",
  description = "Please try again later",
  className = "",
  icon = <AlertCircle size={50} />,
  onRetry,
  iconClassName = "",
  messageClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center p-8 text-center",
        className,
      )}
    >
      <div className={cn("mb-4 text-red-500", iconClassName)}>{icon}</div>
      <h3
        className={cn(
          "mb-1 text-lg font-medium text-gray-900",
          messageClassName,
        )}
      >
        {message}
      </h3>
      <p
        className={cn(
          "mb-4 max-w-md text-sm text-gray-500",
          descriptionClassName,
        )}
      >
        {description}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className={cn(
            "rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none",
            buttonClassName,
          )}
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
