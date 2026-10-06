"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, getDefaultClassNames, type DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/utils";

function Calendar({ className, classNames, ...props }: DayPickerProps) {
  const defaults = getDefaultClassNames();

  return (
    <DayPicker
      className={cn(
        "p-3 text-ivory [--rdp-accent-color:var(--color-cognac)] [--rdp-accent-background-color:var(--color-cognac)] [--rdp-today-color:var(--color-champagne)]",
        className,
      )}
      classNames={{
        ...defaults,
        month: "relative space-y-4",
        month_caption: "flex h-9 items-center justify-center px-9",
        caption_label: "text-sm font-medium text-ivory",
        nav: "absolute inset-x-0 top-0 flex h-9 items-center justify-between",
        button_previous:
          "inline-flex size-9 items-center justify-center rounded-md text-champagne transition-colors hover:bg-cognac/30 hover:text-ivory focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cognac",
        button_next:
          "inline-flex size-9 items-center justify-center rounded-md text-champagne transition-colors hover:bg-cognac/30 hover:text-ivory focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cognac",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "w-9 rounded-md text-[0.8rem] font-normal text-champagne",
        weeks: "mt-2 flex flex-col gap-1",
        week: "flex w-full",
        day: "relative size-9 p-0 text-center text-sm",
        day_button:
          "inline-flex size-9 items-center justify-center rounded-md p-0 font-normal text-ivory transition-colors hover:bg-cognac/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cognac",
        selected: "[&>button]:bg-cognac [&>button]:font-medium [&>button]:text-ivory [&>button]:hover:bg-cognac/90",
        today: "[&>button]:border [&>button]:border-champagne",
        outside: "text-champagne/45 [&>button]:text-champagne/45",
        disabled: "text-champagne/30 [&>button]:cursor-not-allowed [&>button]:opacity-35",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, ...props }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight;
          return <Icon aria-hidden="true" className="size-4" {...props} />;
        },
      }}
      {...props}
    />
  );
}

export { Calendar };
