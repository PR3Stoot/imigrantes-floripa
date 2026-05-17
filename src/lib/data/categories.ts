import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "documentos",
    order: 1,
    icon: "FileText",
    color: "blue",
    translations: {
      pt: { name: "Documentos" },
      es: { name: "Documentos" },
    },
  },
  {
    slug: "saude",
    order: 2,
    icon: "HeartPulse",
    color: "rose",
    translations: {
      pt: { name: "Saúde" },
      es: { name: "Salud" },
    },
  },
  {
    slug: "transporte",
    order: 3,
    icon: "Bus",
    color: "orange",
    translations: {
      pt: { name: "Transporte" },
      es: { name: "Transporte" },
    },
  },
  {
    slug: "trabalho",
    order: 4,
    icon: "Briefcase",
    color: "emerald",
    translations: {
      pt: { name: "Trabalho e renda" },
      es: { name: "Trabajo e ingresos" },
    },
  },
  {
    slug: "assistencia-social",
    order: 5,
    icon: "HandHeart",
    color: "violet",
    translations: {
      pt: { name: "Assistência social" },
      es: { name: "Asistencia social" },
    },
  },
  {
    slug: "educacao",
    order: 6,
    icon: "GraduationCap",
    color: "teal",
    translations: {
      pt: { name: "Educação" },
      es: { name: "Educación" },
    },
  },
  {
    slug: "moradia",
    order: 7,
    icon: "Home",
    color: "amber",
    translations: {
      pt: { name: "Moradia" },
      es: { name: "Vivienda" },
    },
  },
  {
    slug: "emergencias",
    order: 8,
    icon: "Siren",
    color: "red",
    translations: {
      pt: { name: "Emergências" },
      es: { name: "Emergencias" },
    },
  },
];
