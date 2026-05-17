import { modules } from "./modules";
import { contacts } from "./contacts";
import { categories } from "./categories";
import type { Module, Contact, Category } from "./types";

export function getAllModules(): Module[] {
  return [...modules].sort((a, b) => a.order - b.order);
}

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getAllContacts(): Contact[] {
  return contacts;
}

export function getContactsByIds(ids: string[]): Contact[] {
  return ids
    .map((id) => contacts.find((c) => c.id === id))
    .filter((c): c is Contact => c !== undefined);
}

export function getContactsByCategory(categorySlug: string): Contact[] {
  return contacts.filter((c) => c.categorySlug === categorySlug);
}

export function getAllCategories(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
