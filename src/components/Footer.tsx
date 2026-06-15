import type { Dictionary } from "@/i18n/dictionaries";

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <p className="rounded-lg border border-amber-300/60 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-200">
          {dict.footer.notice}
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>{dict.footer.madeWith}</p>
        <a
          href="https://github.com/PR3Stoot/imigrantes-floripa"
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
