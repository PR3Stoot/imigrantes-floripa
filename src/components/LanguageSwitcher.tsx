"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  current: Locale;
}

export function LanguageSwitcher({ current }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(target: Locale) {
    if (target === current) return;
    const segments = pathname.split("/");
    segments[1] = target;
    router.push(segments.join("/") || `/${target}`);
  }

  return (
    <div className="inline-flex items-center gap-1 text-xs">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          aria-current={locale === current ? "true" : undefined}
          className={cn(
            "rounded-md px-2 py-1 uppercase tracking-wide transition-colors",
            locale === current
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {locale}
          <span className="sr-only"> — {localeLabels[locale]}</span>
        </button>
      ))}
    </div>
  );
}
