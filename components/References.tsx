import type { Dictionary } from "@/lib/dictionaries";

export default function References({
  text,
}: {
  text: Dictionary["references"];
}) {
  return (
    <section id="refs" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="font-display text-[clamp(38px,5vw,60px)] leading-[1.05] text-espresso">
          {text.heading}
        </h2>
        <div className="mt-9 grid gap-4 min-[640px]:grid-cols-2 lg:grid-cols-3">
          {text.items.map(({ quote, name, role }) => (
            <div
              key={name}
              className="rounded-[18px] border border-champagne bg-sand p-6"
            >
              <div
                className="text-sm tracking-[3px] text-signature-yolk"
                style={{ WebkitTextStroke: "0.75px #3a2419" }}
              >
                ★★★★★
              </div>
              <p className="my-2.5 mb-5 font-display text-[21px] font-medium italic leading-snug text-espresso">
                {quote}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="grid size-12 place-items-center rounded-full bg-signature-yolk font-medium text-espresso">
                  {name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <b className="font-medium">{name}</b>
                  <small className="block leading-tight text-ink-brown/70">
                    {role}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
