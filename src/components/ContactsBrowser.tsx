"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { ContactCard } from "./ContactCard";
import { Icon } from "./Icon";
import type { Contact, Category } from "@/lib/data/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { colorsFor } from "@/lib/data/colors";
import { cn } from "@/lib/utils";

interface ContactsBrowserProps {
  contacts: Contact[];
  categories: Category[];
  locale: Locale;
  dict: Dictionary;
}

export function ContactsBrowser({
  contacts,
  categories,
  locale,
  dict,
}: ContactsBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return contacts.filter((contact) => {
      if (activeCategory && contact.categorySlug !== activeCategory) {
        return false;
      }
      if (!q) return true;
      const t = contact.translations[locale];
      return (
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      );
    });
  }, [contacts, query, activeCategory, locale]);

  return (
    <div>
      <Input
        placeholder={dict.contacts.searchPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-md"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={cn(
            "rounded-full border px-3 py-1 text-sm transition-colors",
            activeCategory === null
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
          )}
        >
          {dict.contacts.filterAll}
        </button>
        {categories.map((category) => {
          const isActive = activeCategory === category.slug;
          const colors = colorsFor(category.color);
          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition-colors",
                isActive
                  ? colors.pillActive
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              <Icon name={category.icon} className="size-3.5" />
              {category.translations[locale].name}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">
          {dict.contacts.noResults}
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filtered.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>
      )}
    </div>
  );
}
