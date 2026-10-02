import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-40 w-full rounded-md border border-sand/30 bg-black/20 px-3.5 py-3 text-[15px] text-cream shadow-sm transition-colors placeholder:text-cream/45 focus-visible:border-sand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sand disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
