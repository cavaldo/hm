import type { Dictionary } from "@/lib/dictionaries";

const icons = [
  <path key="a" d="M4 12l5 5L20 6" />,
  <g key="b"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></g>,
  <path key="c" d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  <g key="d"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 3-6 6-6s6 2 6 6" /><circle cx="17" cy="9" r="2.5" /></g>,
];
export default function Services({ text }: { text: Dictionary["services"] }) {
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="mb-7 font-display text-[clamp(38px,5vw,60px)] leading-[1.05] text-espresso">{text.heading}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {text.items.map(({ title, description }, index) => (
            <div key={title} className="w-64 shrink-0 rounded-[18px] border border-champagne bg-sand p-5 md:p-6">
              <span className="mb-4 grid size-[50px] place-items-center rounded-full bg-signature-yolk">
                <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-espresso" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">{icons[index]}</svg>
              </span>
              <h3 className="mb-1.5 font-display text-2xl font-medium text-espresso">{title}</h3>
              <p className="text-[15px] leading-normal text-ink-brown/75">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
