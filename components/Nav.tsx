"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/lib/dictionaries";

export default function Nav({
  locale,
  text,
}: {
  locale: Locale;
  text: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnOutsideClick(event: PointerEvent) {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-3xl font-semibold tracking-wider"
        >
          D<i className="text-chestnut">&amp;</i>K
        </a>
        <ul className="hidden gap-7 text-sm md:flex">
          {text.links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="opacity-80 hover:text-chestnut hover:opacity-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center text-xs font-medium"
            aria-label={text.language}
          >
            {(["cs", "en"] as const).map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`px-2 py-2 uppercase transition hover:text-chestnut ${locale === item ? "text-chestnut underline underline-offset-4" : "opacity-55"}`}
                aria-current={locale === item ? "page" : undefined}
              >
                {item === "cs" ? "cz" : item}
              </Link>
            ))}
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-10 place-items-center md:hidden"
            aria-label={open ? text.closeMenu : text.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-0.5 w-full bg-espresso transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-espresso transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-espresso transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`absolute inset-x-0 top-full bg-espresso/90 text-cream shadow-lg backdrop-blur-xl md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto grid max-w-[1160px] justify-items-center gap-1 px-6 py-5 text-center">
          {text.links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 transition hover:text-sand"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex rounded-full bg-cream px-6 py-3 text-center font-medium text-espresso transition hover:bg-sand"
            >
              {text.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
