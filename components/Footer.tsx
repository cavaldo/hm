import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ text }: { text: Dictionary["footer"] }) {
  return (
    <footer className="bg-[#1E0F07] py-10 text-sm text-cream/60">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-display text-3xl font-semibold tracking-wider text-cream"
        >
          D<i className="text-sand">&amp;</i>K
        </a>
        <span>{text.tagline}</span>
        <span>
          © {new Date().getFullYear()} D&amp;K · {text.privacy} · {text.terms}
        </span>
      </div>
    </footer>
  );
}
