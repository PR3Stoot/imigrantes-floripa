import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function AboutPage({ params }: PageProps<"/[lang]/sobre">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        {dict.about.title}
      </h1>

      <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
        <p>{dict.about.intro}</p>
        <p>
          {dict.about.openSource}{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline hover:text-primary"
          >
            github.com
          </a>
          .
        </p>
      </div>

      <div className="mt-10 rounded-lg border border-dashed bg-muted/40 p-5">
        <p className="text-sm font-medium">{dict.about.disclaimerTitle}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {dict.about.disclaimer}
        </p>
      </div>
    </div>
  );
}
