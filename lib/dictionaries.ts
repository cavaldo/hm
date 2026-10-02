import "server-only";

import en from "@/locales/en.json";

export const locales = ["en", "cs"] as const;

export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  cs: () => import("@/locales/cz.json").then((module) => module.default),
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
