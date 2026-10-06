import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ text }: { text: Dictionary["footer"] }) {
  return (
    <footer className="bg-espresso py-10 text-sm text-ivory/70">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-display text-3xl font-semibold tracking-wider text-ivory"
        >
          D<i className="text-antique-gold">&amp;</i>K
        </a>
        <span>{text.tagline}</span>
        <span>
          © {new Date().getFullYear()} D&amp;K · {text.privacy} · {text.terms}
        </span>
      </div>
    </footer>
  );
}
