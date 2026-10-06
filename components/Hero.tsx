import type { Dictionary } from "@/lib/dictionaries";

export default function Hero({ text }: { text: Dictionary["hero"] }) {
  return (
    <header
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-ivory bg-[radial-gradient(700px_420px_at_8%_0,var(--color-sand),transparent_60%)] pt-12"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-6 pb-12 md:grid-cols-[1.1fr_.9fr] md:grid-rows-[auto_auto_auto] md:gap-x-10 md:gap-y-7 md:pb-0">
        <div>
          <h1 className="font-display text-[clamp(50px,7vw,96px)] font-medium leading-[1.02] tracking-tight">
            {text.titleBefore}{" "}
            <em className="text-yolk">{text.titleEmphasis}</em>{" "}
            {text.titleAfter}
          </h1>
        </div>
        <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[380px] md:col-start-2 md:row-span-3 md:row-start-1 md:max-w-[440px] md:self-center">
          <div className="absolute inset-0 rounded-[58%_42%_46%_54%/48%_56%_44%_52%] bg-[radial-gradient(circle_at_50%_45%,var(--color-cognac),var(--color-espresso)_78%)]">
            <div className="absolute left-1/2 top-[48%] aspect-square w-[78%] animate-float rounded-full bg-[radial-gradient(circle,var(--color-ivory)_0_34%,var(--color-champagne)_35%_37%,var(--color-ivory)_38%_70%,var(--color-sand)_72%)] shadow-[0_30px_60px_color-mix(in_srgb,var(--color-ink-brown)_35%,transparent)] [translate:-50%_-50%]">
              <div className="absolute inset-[26%] rounded-full bg-signature-yolk shadow-[inset_0_-8px_16px_color-mix(in_srgb,var(--color-ink-brown)_18%,transparent),0_4px_12px_color-mix(in_srgb,var(--color-ink-brown)_20%,transparent)]" />
              <i className="absolute left-[48%] top-[30%] size-2.5 rounded-full bg-ink-brown/40" />
              <i className="absolute left-[56%] top-[38%] size-1.5 rounded-full bg-ink-brown/40" />
              <i className="absolute left-[42%] top-[44%] size-2.5 rounded-full bg-signature-yolk" />
            </div>
          </div>
          <div className="absolute -right-2 top-[6%] grid size-[110px] place-items-center rounded-full bg-signature-yolk text-espresso md:size-32">
            <svg
              viewBox="0 0 128 128"
              className="absolute inset-0 animate-spin-slow"
            >
              <defs>
                <path
                  id="c"
                  d="M64 64m-48 0a48 48 0 1 1 96 0a48 48 0 1 1-96 0"
                />
              </defs>
              <text
                className="fill-espresso"
                fontSize="11.5"
                letterSpacing="3.2"
                fontWeight="500"
              >
                <textPath href="#c">{text.ring} </textPath>
              </text>
            </svg>
            <span className="font-display text-4xl font-semibold">&amp;</span>
          </div>
          <div className="absolute -left-2 bottom-[12%] -rotate-[5deg] rounded-md bg-ivory px-4 py-3.5 font-display text-xl italic shadow-2xl">
            {text.stamp}
            <small className="block font-sans text-xs not-italic text-ink-brown/70">
              {text.stampSmall}
            </small>
          </div>
        </div>
        <p className="max-w-[46ch] text-ink-brown/70 md:col-start-1 md:row-start-2">
          {text.description}
        </p>
        <div className="flex flex-wrap gap-3.5 md:col-start-1 md:row-start-3">
          <a
            href="#contact"
            className="rounded-full bg-button-surface px-7 py-3.5 font-medium text-espresso transition hover:-translate-y-0.5 hover:bg-button-hover hover:brightness-95"
          >
            {text.primaryAction}
          </a>
          <a
            href="#about"
            className="rounded-full border border-button-surface bg-button-surface px-7 py-3.5 font-medium text-espresso transition hover:-translate-y-0.5 hover:bg-button-hover hover:brightness-95"
          >
            {text.secondaryAction}
          </a>
        </div>
      </div>
    </header>
  );
}
