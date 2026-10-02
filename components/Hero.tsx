import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";

export default function Hero({ text }: { text: Dictionary["hero"] }) {
  return (
    <header
      id="top"
      className="relative overflow-hidden bg-cream bg-[radial-gradient(700px_420px_at_8%_0,var(--color-linen),transparent_60%)] pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/events/ball.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1160px) 950px, 82vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-cream)_0%,rgb(246_240_228/0.82)_15%,rgb(246_240_228/0.35)_40%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(246_240_228/0.12),transparent_35%,rgb(246_240_228/0.08))]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-6 pb-12 md:grid-cols-[1.1fr_.9fr] md:grid-rows-[auto_auto_auto] md:gap-x-10 md:gap-y-7 md:pb-0">
        <div>
          <p className="mb-3.5 font-display text-2xl italic text-chestnut">
            {text.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(50px,7vw,96px)] font-medium leading-[1.02] tracking-tight">
            {text.titleBefore}{" "}
            <em className="text-chestnut">{text.titleEmphasis}</em>{" "}
            {text.titleAfter}
          </h1>
        </div>
        <p className="max-w-[46ch] text-chestnut font-normal md:col-start-1 md:row-start-2">
          {text.description}
        </p>
        <div className="flex flex-wrap gap-3.5 md:col-start-1 md:row-start-3 mb-24">
          <a
            href="#contact"
            className="rounded-full bg-chestnut px-7 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-espresso"
          >
            {text.primaryAction}
          </a>
          <a
            href="#about"
            className="rounded-full border border-espresso px-7 py-3.5 font-medium transition hover:-translate-y-0.5"
          >
            {text.secondaryAction}
          </a>
        </div>
      </div>
    </header>
  );
}
