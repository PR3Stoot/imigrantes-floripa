import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Icon } from "./Icon";
import type { Module } from "@/lib/data/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { colorsFor } from "@/lib/data/colors";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  module: Module;
  locale: Locale;
  dict: Dictionary;
}

export function ModuleCard({ module, locale, dict }: ModuleCardProps) {
  const t = module.translations[locale];
  const colors = colorsFor(module.color);
  return (
    <Link
      href={`/${locale}/modulo/${module.slug}`}
      className="group block focus:outline-none"
    >
      <Card
        className={cn(
          "h-full p-6 transition-colors group-focus-visible:ring-2 group-focus-visible:ring-ring",
          colors.cardBorder,
        )}
      >
        <div className="flex items-start gap-4">
          <div className={cn("rounded-lg p-2.5", colors.iconBg, colors.iconText)}>
            <Icon name={module.icon} className="size-6" />
          </div>
          <div className="flex-1">
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-wide",
                colors.stepText,
              )}
            >
              {dict.trail.step} {module.order}
            </p>
            <h3 className="mt-1 text-lg font-semibold leading-tight">
              {t.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.summary}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
