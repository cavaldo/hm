"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/lib/dictionaries";

const palettes = [
  { value: "original", label: "Original" },
  { value: "amber-oxblood", label: "Amber" },
  { value: "navy-gold", label: "Navy" },
  { value: "slate-teal", label: "Slate teal" },
  { value: "monochrome", label: "Monochrome" },
  { value: "sunset-amber", label: "Sunset amber" },
  { value: "honey-wheat", label: "Honey wheat" },
  { value: "sage-honey", label: "Sage honey" },
] as const;

type Palette = (typeof palettes)[number]["value"];
const paletteStorageKey = "dk-site-color-palette";

export default function Nav({
  locale,
  text,
}: {
  locale: Locale;
  text: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState<Palette>("original");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const savedPalette = window.localStorage.getItem(paletteStorageKey);
      const migratedPalette =
        savedPalette === "berry-rose"
          ? "slate-teal"
          : savedPalette === "olive-burgundy" ||
              savedPalette === "olive-harvest"
            ? "sage-honey"
          : savedPalette === "simple"
            ? "original"
            : savedPalette;
      const selectedPalette = palettes.find(
        ({ value }) => value === migratedPalette,
      );
      if (selectedPalette) {
        setPalette(selectedPalette.value);
        if (selectedPalette.value !== "original") {
          document.documentElement.dataset.palette = selectedPalette.value;
        }
        if (migratedPalette !== savedPalette) {
          if (selectedPalette.value === "original") {
            window.localStorage.removeItem(paletteStorageKey);
          } else {
            window.localStorage.setItem(
              paletteStorageKey,
              selectedPalette.value,
            );
          }
        }
      }
    } catch (error) {
      console.error("Unable to load the saved color palette:", error);
    }
  }, []);

  function changePalette(value: string) {
    const selectedPalette = palettes.find((item) => item.value === value);
    if (!selectedPalette) return;

    setPalette(selectedPalette.value);
    if (selectedPalette.value === "original") {
      delete document.documentElement.dataset.palette;
    } else {
      document.documentElement.dataset.palette = selectedPalette.value;
    }

    try {
      window.localStorage.setItem(paletteStorageKey, selectedPalette.value);
    } catch (error) {
      console.error("Unable to save the selected color palette:", error);
    }
  }

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
    <nav className="sticky top-0 z-50 border-b border-champagne bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-3xl font-semibold tracking-wider"
        >
          D<i className="text-antique-gold">&amp;</i>K
        </a>
        <ul className="hidden gap-7 text-sm md:flex">
          {text.links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="opacity-80 hover:text-cognac hover:opacity-100"
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
                className={`px-2 py-2 uppercase transition hover:text-cognac ${locale === item ? "text-espresso underline decoration-yolk underline-offset-4" : "opacity-55"}`}
                aria-current={locale === item ? "page" : undefined}
              >
                {item === "cs" ? "cz" : item}
              </Link>
            ))}
          </div>
          <select
            aria-label={text.palette}
            value={palette}
            onChange={(event) => changePalette(event.target.value)}
            className="h-9 max-w-[112px] rounded-full border border-espresso/25 bg-ivory px-2 text-xs text-espresso outline-none transition hover:border-cognac focus-visible:ring-1 focus-visible:ring-antique-gold"
          >
            {palettes.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
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
        className={`absolute inset-x-0 top-full bg-espresso/95 text-ivory shadow-lg backdrop-blur-xl md:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="mx-auto grid max-w-[1160px] justify-items-center gap-1 px-6 py-5 text-center">
          {text.links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3 transition hover:text-cognac"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex rounded-full bg-button-surface px-6 py-3 text-center font-medium text-espresso transition hover:bg-button-hover"
            >
              {text.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
