"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, getDefaultClassNames, type DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/utils";

function Calendar({ className, classNames, ...props }: DayPickerProps) {
  const defaults = getDefaultClassNames();

  return (
    <DayPicker
      className={cn(
        "p-3 text-cream [--rdp-accent-color:var(--color-sand)] [--rdp-accent-background-color:var(--color-mahogany)] [--rdp-today-color:var(--color-sand)]",
        className,
      )}
      classNames={{
        ...defaults,
        month: "relative space-y-4",
        month_caption: "flex h-9 items-center justify-center px-9",
        caption_label: "text-sm font-medium text-cream",
        nav: "absolute inset-x-0 top-0 flex h-9 items-center justify-between",
        button_previous:
          "inline-flex size-9 items-center justify-center rounded-md text-cream/75 transition-colors hover:bg-sand/10 hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sand",
        button_next:
          "inline-flex size-9 items-center justify-center rounded-md text-cream/75 transition-colors hover:bg-sand/10 hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sand",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "w-9 rounded-md text-[0.8rem] font-normal text-cream/55",
        weeks: "mt-2 flex flex-col gap-1",
        week: "flex w-full",
        day: "relative size-9 p-0 text-center text-sm",
        day_button:
          "inline-flex size-9 items-center justify-center rounded-md p-0 font-normal text-cream transition-colors hover:bg-sand/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sand",
        selected: "[&>button]:bg-sand [&>button]:font-medium [&>button]:text-espresso [&>button]:hover:bg-sand/90",
        today: "[&>button]:border [&>button]:border-sand/45",
        outside: "text-cream/30 [&>button]:text-cream/30",
        disabled: "text-cream/25 [&>button]:cursor-not-allowed [&>button]:opacity-35",
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
