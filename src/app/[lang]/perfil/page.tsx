import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Card } from "@/components/ui/card";

export default async function ProfilePage({
  params,
}: PageProps<"/[lang]/perfil">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        {dict.auth.profileTitle}
      </h1>

      <Card className="mt-6 p-6">
        <h2 className="text-lg font-semibold">{dict.auth.progressTitle}</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {dict.auth.progressEmpty}
        </p>
        <p className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">
          {dict.common.comingSoon}
        </p>
      </Card>
    </div>
  );
}
