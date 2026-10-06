"use client";

import { format } from "date-fns";
import { cs, enGB } from "date-fns/locale";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

const labelClass = "mb-1.5 block text-[13px] text-champagne";

export default function Contact({
  text,
  locale,
}: {
  text: Dictionary["contact"];
  locale: Locale;
}) {
  const [picked, setPicked] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState<Date>();
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [guests, setGuests] = useState(text.guestOptions[0]);
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          date: eventDate ? format(eventDate, "yyyy-MM-dd") : "",
          guests,
          types: picked,
        }),
      });

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`);
      }

      form.reset();
      setPicked([]);
      setEventDate(undefined);
      setGuests(text.guestOptions[0]);
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  }

  const calendarLocale = locale === "cs" ? cs : enGB;

  return (
    <section
      id="contact"
      className="bg-espresso py-16 text-ivory md:py-24"
    >
      <div className="mx-auto grid max-w-[1160px] gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-[1.02]">
            {text.headingBefore}{" "}
            <em className="text-yolk">{text.headingEmphasis}</em>
          </h2>
          <div className="my-8 grid gap-3.5">
            {text.details.map(({ label, value }) => (
              <div key={label}>
                <span className="block text-[13px] text-champagne">{label}</span>
                {value}
              </div>
            ))}
          </div>
          <div className="flex gap-2.5">
            {text.socials.map((social) => {
              return (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  title={social}
                  className="grid size-11 place-items-center text-champagne transition hover:text-cognac"
                >
                  {social === "Instagram" ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-[30px]"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-[30px]"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-12.1 7H4.5v9h2.4v-9Zm8.4-.2c-1.3 0-2.2.7-2.6 1.3V10H10.3v9h2.4v-4.5c0-1.2.2-2.4 1.7-2.4s1.5 1.4 1.5 2.5V19h2.4v-5c0-2.5-.5-4.2-3-4.2ZM5.7 5.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z" />
                    </svg>
                  )}
                </a>
              );
            })}
          </div>
        </div>
        <form
          onSubmit={submit}
          className="grid content-start gap-4 rounded-3xl border border-champagne/30 bg-chocolate p-6 sm:grid-cols-2 sm:p-9"
        >
          <div>
            <label className={labelClass} htmlFor="name">
              {text.name}
            </label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              className="border-champagne/40 bg-chocolate text-ivory placeholder:text-champagne focus-visible:border-cognac focus-visible:ring-cognac"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              {text.email}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="border-champagne/40 bg-chocolate text-ivory placeholder:text-champagne focus-visible:border-cognac focus-visible:ring-cognac"
            />
          </div>
          <fieldset className="sm:col-span-2">
            <legend className={labelClass}>{text.lookingFor}</legend>
            <div className="flex flex-wrap gap-2">
              {text.types.map(({ id, label }) => {
                const active = picked.includes(id);
                return (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    key={id}
                    aria-pressed={active}
                    className={
                      active
                        ? "border-cognac bg-chocolate text-ivory hover:bg-chocolate focus-visible:ring-cognac"
                        : "border-champagne/50 bg-chocolate text-ivory hover:bg-chocolate focus-visible:ring-cognac"
                    }
                    onClick={() =>
                      setPicked((current) =>
                        active
                          ? current.filter((item) => item !== id)
                          : [...current, id],
                      )
                    }
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          </fieldset>
          <div>
            <label className={labelClass} htmlFor="date">
              {text.eventDate}
            </label>
            <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  type="button"
                  variant="outline"
                  aria-label={text.eventDate}
                  aria-expanded={datePickerOpen}
                  className="h-11 w-full justify-between border-champagne/40 bg-chocolate px-3.5 text-left text-[15px] font-normal text-ivory hover:bg-cognac/30 focus-visible:ring-cognac"
                >
                  <span
                    className={
                      eventDate ? "text-ivory" : "text-champagne"
                    }
                  >
                    {eventDate
                      ? format(eventDate, "PPP", { locale: calendarLocale })
                      : text.eventDate}
                  </span>
                  <CalendarDays className="size-4 shrink-0 text-champagne" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-auto">
                <Calendar
                  mode="single"
                  selected={eventDate}
                  onSelect={(date) => {
                    setEventDate(date);
                    setDatePickerOpen(false);
                  }}
                  locale={calendarLocale}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label className={labelClass} htmlFor="guests">
              {text.guests}
            </label>
            <Select value={guests} onValueChange={setGuests} name="guests">
              <SelectTrigger
                id="guests"
                className="border-champagne/40 bg-chocolate text-ivory focus:ring-cognac"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {text.guestOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="msg">
              {text.message}
            </label>
            <Textarea
              id="msg"
              name="message"
              autoComplete="off"
              required
              className="min-h-[190px] resize-y border-champagne/40 bg-chocolate text-ivory placeholder:text-champagne focus-visible:border-cognac focus-visible:ring-cognac"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="h-auto rounded-full px-7 py-3.5 text-base hover:-translate-y-0.5 hover:brightness-105"
            >
              {status === "submitting" ? text.sending : text.submit}
            </Button>
            {status === "success" && (
              <span
                className="font-display text-[22px] italic text-champagne"
                role="status"
              >
                {text.success}
              </span>
            )}
            {status === "error" && (
              <span className="text-sm text-ivory" role="alert">
                {text.error}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
