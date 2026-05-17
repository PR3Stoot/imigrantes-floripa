import { notFound } from "next/navigation";
import { Mail } from "lucide-react";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function SignInPage({
  params,
}: PageProps<"/[lang]/entrar">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const supabaseConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  return (
    <div className="mx-auto max-w-md px-4 py-12 md:py-20">
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">{dict.auth.signInTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {dict.auth.signInSubtitle}
        </p>

        {!supabaseConfigured && (
          <div className="mt-4 rounded-md border border-amber-300/50 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-700/40 dark:bg-amber-950/40 dark:text-amber-200">
            {dict.auth.configMissing}
          </div>
        )}

        <form className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{dict.auth.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder={dict.auth.emailPlaceholder}
              disabled={!supabaseConfigured}
            />
          </div>
          <Button type="submit" className="w-full" disabled={!supabaseConfigured}>
            <Mail className="size-4" />
            {dict.auth.sendLink}
          </Button>
        </form>
      </Card>
    </div>
  );
}
