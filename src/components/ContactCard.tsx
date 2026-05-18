import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe, Clock, MessageCircle } from "lucide-react";
import type { Contact } from "@/lib/data/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { getCategoryBySlug } from "@/lib/data/queries";
import { colorsFor } from "@/lib/data/colors";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  contact: Contact;
  locale: Locale;
  dict: Dictionary;
}

export function ContactCard({ contact, locale, dict }: ContactCardProps) {
  const t = contact.translations[locale];
  const category = getCategoryBySlug(contact.categorySlug);
  const categoryName = category?.translations[locale].name;
  const colors = colorsFor(category?.color);

  const hasDetails = Boolean(
    contact.phone ||
      contact.whatsapp ||
      contact.email ||
      contact.address ||
      contact.website ||
      contact.hours,
  );

  return (
    <Card className="overflow-hidden p-0">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-tight">{t.name}</h3>
          {categoryName && (
            <span
              className={cn(
                "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
                colors.badge,
              )}
            >
              {categoryName}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
      </div>

      {hasDetails && (
        <dl className="space-y-2.5 border-t bg-muted/40 px-5 py-4 text-sm">
          {contact.phone && (
            <Row icon={<Phone className="size-3.5" />} label={dict.contacts.phone}>
              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="hover:underline"
              >
                {contact.phone}
              </a>
            </Row>
          )}
          {contact.whatsapp && (
            <Row
              icon={<MessageCircle className="size-3.5" />}
              label={dict.contacts.whatsapp}
            >
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {contact.whatsapp}
              </a>
            </Row>
          )}
          {contact.email && (
            <Row icon={<Mail className="size-3.5" />} label={dict.contacts.email}>
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </Row>
          )}
          {contact.address && (
            <Row
              icon={<MapPin className="size-3.5" />}
              label={dict.contacts.address}
            >
              <span>{contact.address}</span>
            </Row>
          )}
          {contact.website && (
            <Row icon={<Globe className="size-3.5" />} label={dict.contacts.website}>
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="hover:underline break-all"
              >
                {contact.website.replace(/^https?:\/\//, "")}
              </a>
            </Row>
          )}
          {contact.hours && (
            <Row icon={<Clock className="size-3.5" />} label={dict.contacts.hours}>
              <span>{contact.hours}</span>
            </Row>
          )}
        </dl>
      )}
    </Card>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function Row({ icon, label, children }: RowProps) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden
        className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border bg-background text-muted-foreground"
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </dt>
        <dd className="text-foreground leading-snug break-words">{children}</dd>
      </div>
    </div>
  );
}
