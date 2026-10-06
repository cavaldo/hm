"use client";
import { useEffect, useRef, useState } from "react";
export default function Counter({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let c = 0;
      const t = setInterval(() => { c = Math.min(to, c + Math.ceil(to / 40)); setN(c); if (c >= to) clearInterval(t); }, 30);
    });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref}>
      <b className="block font-display text-4xl font-medium leading-none text-espresso md:text-5xl">{n}+</b>
      <small className="text-sm text-ink-brown/70">{label}</small>
    </div>
  );
}
