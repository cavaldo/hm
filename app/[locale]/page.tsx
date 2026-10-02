import { notFound } from "next/navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import References from "@/components/References";
import Services from "@/components/Services";
import { getDictionary, isLocale } from "@/lib/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const text = await getDictionary(locale);

  return (
    <main>
      <Nav locale={locale} text={text.nav} />
      <Hero text={text.hero} />
      <About text={text.about} />
      <Services text={text.services} />
      <Events text={text.events} />
      <References text={text.references} />
      <Contact text={text.contact} locale={locale} />
      <Footer text={text.footer} />
    </main>
  );
}
