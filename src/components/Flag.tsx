import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface FlagProps {
  locale: Locale;
  className?: string;
}

export function Flag({ locale, className }: FlagProps) {
  const base = cn("inline-block overflow-hidden rounded-[2px]", className);
  return locale === "pt" ? (
    <BrazilFlag className={base} />
  ) : (
    <SpainFlag className={base} />
  );
}

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 504"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <rect width="720" height="504" fill="#009c3b" />
      <polygon
        points="360,42 678,252 360,462 42,252"
        fill="#ffdf00"
      />
      <circle cx="360" cy="252" r="100" fill="#002776" />
      <path
        d="M260,232 Q360,180 460,232 L460,242 Q360,194 260,242 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 750 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <rect width="750" height="500" fill="#aa151b" />
      <rect y="125" width="750" height="250" fill="#f1bf00" />
    </svg>
  );
}
