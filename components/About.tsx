import type { Dictionary } from "@/lib/dictionaries";
import Counter from "./Counter";
export default function About({ text }: { text: Dictionary["about"] }) {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-6 sm:grid-cols-[.8fr_1.2fr]">
        {/* Replace this block with <Image src="/portrait.jpg" ... /> */}
        <div className="relative mx-auto grid aspect-[4/5] w-full max-w-[280px] place-items-end overflow-hidden rounded-t-full rounded-b-[20px] bg-gradient-to-br from-cognac to-chocolate sm:max-w-none">
          <div className="absolute left-[27%] top-[24%] aspect-square w-[46%] rounded-full bg-champagne/70" />
          <div className="absolute bottom-0 h-2/5 w-[86%] rounded-t-full bg-champagne/70" />
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
