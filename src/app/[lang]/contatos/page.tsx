import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAllContacts, getAllCategories } from "@/lib/data/queries";
import { ContactsBrowser } from "@/components/ContactsBrowser";

export default async function ContactsPage({
  params,
}: PageProps<"/[lang]/contatos">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const contacts = getAllContacts();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        {dict.contacts.title}
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {dict.contacts.subtitle}
      </p>

      <div className="mt-8">
        <ContactsBrowser
          contacts={contacts}
          categories={categories}
          locale={lang}
          dict={dict}
        />
      </div>
    </div>
  );
}
