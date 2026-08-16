import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "w-full h-12 rounded-lg border border-primary-300 bg-white pr-5 pl-5 text-[13px] font-semibold text-neutral-700 shadow-none placeholder:text-neutral-300 focus-visible:border-primary-500 focus-visible:ring-primary-200",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
