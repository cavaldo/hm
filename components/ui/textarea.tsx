import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-40 w-full rounded-md border border-champagne bg-ivory px-3.5 py-3 text-[15px] text-ink-brown shadow-sm transition-colors placeholder:text-ink-brown/45 focus-visible:border-antique-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-antique-gold disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
