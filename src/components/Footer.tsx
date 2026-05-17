import type { Dictionary } from "@/i18n/dictionaries";

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>{dict.footer.madeWith}</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-foreground"
        >
          {dict.footer.contribute}
        </a>
      </div>
    </footer>
  );
}
