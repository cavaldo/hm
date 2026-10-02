import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-sand/30 bg-black/20 px-3.5 py-2 text-[15px] text-cream shadow-sm transition-colors placeholder:text-cream/45 focus-visible:border-sand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sand disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
