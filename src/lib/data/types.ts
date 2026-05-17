import type { Locale } from "@/i18n/config";
import type { ModuleColor } from "./colors";

export interface ModuleTranslation {
  title: string;
  summary: string;
  body: string;
}

export interface Module {
  slug: string;
  order: number;
  icon: string;
  color: ModuleColor;
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
  color: ModuleColor;
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
