import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAllModules, getModuleBySlug, getContactsByIds } from "@/lib/data/queries";
import { Icon } from "@/components/Icon";
import { ContactCard } from "@/components/ContactCard";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  const modules = getAllModules();
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/modulo/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const module = getModuleBySlug(slug);
  if (!module) return {};
  const t = module.translations[lang];
  return {
    title: t.title,
    description: t.summary,
  };
}

export default async function ModulePage({
  params,
}: PageProps<"/[lang]/modulo/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const module = getModuleBySlug(slug);
  if (!module) notFound();

  const dict = await getDictionary(lang);
  const t = module.translations[lang];
  const allModules = getAllModules();
  const currentIndex = allModules.findIndex((m) => m.slug === module.slug);
  const previousModule = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const nextModule =
    currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;
  const relatedContacts = getContactsByIds(module.contactIds);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <Link
        href={`/${lang}/trilha`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> {dict.nav.trail}
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
          <Icon name={module.icon} className="size-6" />
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          {dict.trail.step} {module.order}
        </p>
      </div>

      <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        {t.title}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">{t.summary}</p>

      <Separator className="my-8" />

      <div className="prose prose-stone max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-h2:text-2xl prose-h3:text-lg prose-a:text-primary">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{t.body}</ReactMarkdown>
      </div>

      {relatedContacts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">{dict.trail.relatedContacts}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {relatedContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                locale={lang}
                dict={dict}
              />
            ))}
          </div>
        </section>
      )}

      <nav className="mt-12 flex items-center justify-between gap-4 border-t pt-6 text-sm">
        {previousModule ? (
          <Link
            href={`/${lang}/modulo/${previousModule.slug}`}
            className="group flex flex-1 items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="truncate">
              {previousModule.translations[lang].title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {nextModule && (
          <Link
            href={`/${lang}/modulo/${nextModule.slug}`}
            className="group flex flex-1 items-center justify-end gap-2 text-right text-muted-foreground hover:text-foreground"
          >
            <span className="truncate">
              {nextModule.translations[lang].title}
            </span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </nav>
    </article>
  );
}
