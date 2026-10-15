import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";
import Counter from "./Counter";

export default function About({ text }: { text: Dictionary["about"] }) {
  return (
    <section id="about" className="pb-8 md:pb-16">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-6 sm:grid-cols-[.8fr_1.2fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-none">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[72%] z-0 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signature-yolk"
          />
          <div className="absolute inset-0 z-10 overflow-hidden rounded-t-full rounded-b-[20px] bg-linen">
            <Image
              src="/about/portrait.png"
              alt={text.photoAlt}
              fill
              sizes="(min-width: 640px) 40vw, 280px"
              className="object-cover object-[center_65%]"
            />
          </div>
        </div>
        <div id="about-text" className="flex h-full flex-col justify-end">
          <h2 className="mb-4 font-display text-[clamp(38px,5vw,60px)] leading-[1.05] text-espresso">
            {text.heading}
          </h2>
          <p className="max-w-[52ch] text-ink-brown/75">{text.body}</p>
          <div className="mt-7 flex gap-8 border-y border-champagne py-6 md:gap-10">
            {text.stats.map(({ value, label }) => (
              <Counter key={label} to={value} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
