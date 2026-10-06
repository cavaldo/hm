import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";
import Counter from "./Counter";

export default function About({ text }: { text: Dictionary["about"] }) {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-6 sm:grid-cols-[.8fr_1.2fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-t-full rounded-b-[20px] bg-linen sm:max-w-none">
          <Image
            src="/about/portrait.jpg"
            alt={text.photoAlt}
            fill
            sizes="(min-width: 640px) 40vw, 280px"
            className="object-cover object-center"
          />
        </div>
        <div>
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
