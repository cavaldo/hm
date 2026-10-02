"use client";

import Image from "next/image";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export default function Events({ text }: { text: Dictionary["events"] }) {
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  return (
    <section id="events" className="bg-linen py-16 text-espresso md:py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="max-w-[16ch] font-display text-[clamp(44px,6vw,72px)] leading-[0.98] text-chestnut">
          {text.heading}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {text.items.map(
            ({ key, title, description, attendees, detail, image, alt }) => (
              <article key={key} className="overflow-hidden rounded-lg">
                <button
                  type="button"
                  aria-label={title}
                  aria-expanded={openEvent === key}
                  onClick={() => setOpenEvent(openEvent === key ? null : key)}
                  className="group relative block aspect-[16/10] w-full overflow-hidden text-left md:aspect-[16/9]"
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <h3
                    className={`absolute inset-x-0 bottom-0 z-20 px-5 py-4 font-display text-3xl font-semibold leading-none text-white transition-colors duration-300 [text-shadow:0_2px_12px_rgb(0_0_0/0.9)] group-hover:bg-transparent group-focus-visible:bg-transparent md:px-6 md:text-4xl ${openEvent === key ? "bg-transparent" : "bg-espresso/60"}`}
                  >
                    {title}
                  </h3>
                  <div
                    className={`absolute inset-0 z-10 flex flex-col justify-end bg-espresso/60 p-5 pb-16 text-cream transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:p-6 md:pb-20 ${openEvent === key ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold uppercase text-sand md:text-base">
                      <span>{attendees}</span>
                      <span>{detail}</span>
                    </div>
                    <p className="max-w-[42ch] text-lg leading-snug md:text-xl">
                      {description}
                    </p>
                  </div>
                </button>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
