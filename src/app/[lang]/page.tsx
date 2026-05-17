import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, PhoneCall } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAllModules } from "@/lib/data/queries";
import { ModuleCard } from "@/components/ModuleCard";
import { buttonVariants } from "@/components/ui/button";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const modules = getAllModules();

  return (
    <>
      <section className="border-b bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-medium text-primary">
            {dict.site.tagline}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {dict.home.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {dict.home.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${lang}/trilha`} className={buttonVariants({ size: "lg" })}>
              <BookOpen className="size-4" />
              {dict.home.ctaTrail}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`/${lang}/contatos`}
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              <PhoneCall className="size-4" />
              {dict.home.ctaContacts}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold">{dict.home.sectionModules}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard
              key={module.slug}
              module={module}
              locale={lang}
              dict={dict}
            />
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h2 className="text-2xl font-semibold">{dict.home.sectionAbout}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {dict.home.aboutBody}
          </p>
        </div>
      </section>
    </>
  );
}
