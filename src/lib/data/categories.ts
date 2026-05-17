import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "documentos",
    order: 1,
    icon: "FileText",
    translations: {
      pt: { name: "Documentos" },
      es: { name: "Documentos" },
    },
  },
  {
    slug: "saude",
    order: 2,
    icon: "HeartPulse",
    translations: {
      pt: { name: "Saúde" },
      es: { name: "Salud" },
    },
  },
  {
    slug: "assistencia-social",
    order: 3,
    icon: "HandHeart",
    translations: {
      pt: { name: "Assistência social" },
      es: { name: "Asistencia social" },
    },
  },
  {
    slug: "trabalho",
    order: 4,
    icon: "Briefcase",
    translations: {
      pt: { name: "Trabalho e renda" },
      es: { name: "Trabajo e ingresos" },
    },
  },
  {
    slug: "educacao",
    order: 5,
    icon: "GraduationCap",
    translations: {
      pt: { name: "Educação" },
      es: { name: "Educación" },
    },
  },
  {
    slug: "emergencias",
    order: 6,
    icon: "Siren",
    translations: {
      pt: { name: "Emergências" },
      es: { name: "Emergencias" },
    },
  },
];
