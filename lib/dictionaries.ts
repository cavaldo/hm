import "server-only";

import { sanityClient } from "@/lib/sanity";
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
  if (!sanityClient) return dictionaries[locale]();

  return sanityClient
    .fetch<Dictionary | null>(
      '*[_type == "siteContent" && locale == $locale][0].content',
      { locale },
      { next: { revalidate: 60 } },
    )
    .then((content) => {
      if (!content) {
        throw new Error(
          `Sanity content for "${locale}" is missing. Run "npm run sanity:import" to import the starter content.`,
        );
      }
      return content;
    });
}
