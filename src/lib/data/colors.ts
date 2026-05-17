// Tailwind v4 generates utilities statically by scanning source files for class
// strings, so every class used below must appear LITERALLY in the source.
// That's why we don't build classes via string templates.

export const moduleColors = [
  "blue",
  "rose",
  "orange",
  "emerald",
  "violet",
  "teal",
  "amber",
  "red",
] as const;

export type ModuleColor = (typeof moduleColors)[number];

export interface ColorClasses {
  /** Background tint behind the icon. */
  iconBg: string;
  /** Icon stroke color. */
  iconText: string;
  /** Hover border on the module card. */
  cardBorder: string;
  /** Color of the small "Passo N" / step indicator. */
  stepText: string;
  /** Badge background + foreground for category chips. */
  badge: string;
  /** Active filter pill (used in /contatos). */
  pillActive: string;
}

export const colorClasses: Record<ModuleColor, ColorClasses> = {
  blue: {
    iconBg: "bg-blue-100 dark:bg-blue-950/40",
    iconText: "text-blue-700 dark:text-blue-300",
    cardBorder: "group-hover:border-blue-400 dark:group-hover:border-blue-700",
    stepText: "text-blue-700 dark:text-blue-300",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300",
    pillActive: "border-blue-500 bg-blue-500 text-white hover:bg-blue-600",
  },
  rose: {
    iconBg: "bg-rose-100 dark:bg-rose-950/40",
    iconText: "text-rose-700 dark:text-rose-300",
    cardBorder: "group-hover:border-rose-400 dark:group-hover:border-rose-700",
    stepText: "text-rose-700 dark:text-rose-300",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300",
    pillActive: "border-rose-500 bg-rose-500 text-white hover:bg-rose-600",
  },
  orange: {
    iconBg: "bg-orange-100 dark:bg-orange-950/40",
    iconText: "text-orange-700 dark:text-orange-300",
    cardBorder:
      "group-hover:border-orange-400 dark:group-hover:border-orange-700",
    stepText: "text-orange-700 dark:text-orange-300",
    badge:
      "bg-orange-100 text-orange-800 dark:bg-orange-950/50 dark:text-orange-300",
    pillActive:
      "border-orange-500 bg-orange-500 text-white hover:bg-orange-600",
  },
  emerald: {
    iconBg: "bg-emerald-100 dark:bg-emerald-950/40",
    iconText: "text-emerald-700 dark:text-emerald-300",
    cardBorder:
      "group-hover:border-emerald-400 dark:group-hover:border-emerald-700",
    stepText: "text-emerald-700 dark:text-emerald-300",
    badge:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300",
    pillActive:
      "border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600",
  },
  violet: {
    iconBg: "bg-violet-100 dark:bg-violet-950/40",
    iconText: "text-violet-700 dark:text-violet-300",
    cardBorder:
      "group-hover:border-violet-400 dark:group-hover:border-violet-700",
    stepText: "text-violet-700 dark:text-violet-300",
    badge:
      "bg-violet-100 text-violet-800 dark:bg-violet-950/50 dark:text-violet-300",
    pillActive:
      "border-violet-500 bg-violet-500 text-white hover:bg-violet-600",
  },
  teal: {
    iconBg: "bg-teal-100 dark:bg-teal-950/40",
    iconText: "text-teal-700 dark:text-teal-300",
    cardBorder: "group-hover:border-teal-400 dark:group-hover:border-teal-700",
    stepText: "text-teal-700 dark:text-teal-300",
    badge: "bg-teal-100 text-teal-800 dark:bg-teal-950/50 dark:text-teal-300",
    pillActive: "border-teal-500 bg-teal-500 text-white hover:bg-teal-600",
  },
  amber: {
    iconBg: "bg-amber-100 dark:bg-amber-950/40",
    iconText: "text-amber-700 dark:text-amber-300",
    cardBorder:
      "group-hover:border-amber-400 dark:group-hover:border-amber-700",
    stepText: "text-amber-700 dark:text-amber-300",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300",
    pillActive: "border-amber-500 bg-amber-500 text-white hover:bg-amber-600",
  },
  red: {
    iconBg: "bg-red-100 dark:bg-red-950/40",
    iconText: "text-red-700 dark:text-red-300",
    cardBorder: "group-hover:border-red-400 dark:group-hover:border-red-700",
    stepText: "text-red-700 dark:text-red-300",
    badge: "bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300",
    pillActive: "border-red-500 bg-red-500 text-white hover:bg-red-600",
  },
};

export function colorsFor(color: ModuleColor | undefined): ColorClasses {
  return colorClasses[color ?? "blue"];
}
