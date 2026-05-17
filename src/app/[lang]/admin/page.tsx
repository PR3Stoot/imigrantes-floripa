import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Admin" };

export default async function AdminPage({ params }: PageProps<"/[lang]/admin">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Painel admin</h1>
      <Card className="mt-6 p-6 space-y-3 text-sm text-muted-foreground">
        <p>
          O painel admin será habilitado após a integração com o Supabase. Quando
          estiver pronto, aqui você vai poder cadastrar novos módulos, editar
          conteúdo bilíngue e gerenciar contatos.
        </p>
        <p>
          O acesso será restrito a usuários com a role <code>admin</code> na
          tabela <code>profiles</code>.
        </p>
      </Card>
    </div>
  );
}
