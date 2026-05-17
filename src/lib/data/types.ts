import type { Locale } from "@/i18n/config";

export interface ModuleTranslation {
  title: string;
  summary: string;
  body: string;
}

export interface Module {
  slug: string;
  order: number;
  icon: string;
  contactIds: string[];
  translations: Record<Locale, ModuleTranslation>;
}

export interface CategoryTranslation {
  name: string;
}

export interface Category {
  slug: string;
  order: number;
  icon: string;
  translations: Record<Locale, CategoryTranslation>;
}

export interface ContactTranslation {
  name: string;
  description: string;
}

export interface Contact {
  id: string;
  categorySlug: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  website?: string;
  hours?: string;
  translations: Record<Locale, ContactTranslation>;
}
