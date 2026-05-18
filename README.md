# Imigrantes Floripa

Portal público e open-source para imigrantes que chegam ou se preparam para morar em Florianópolis. Trilha guiada com módulos práticos (documentos, saúde, transporte, trabalho, etc.) e diretório de contatos úteis. Disponível em português e espanhol.

**🌐 Acesse agora:** [imigrantes-floripa.vercel.app](https://imigrantes-floripa.vercel.app)

Projeto de extensão da **CESUTech** — *Conectando Gerações e Impulsionando o Futuro e o Protagonismo Digital* — vinculado ao Centro Universitário Cesusc (CESUSC), em Florianópolis.

> Status: **MVP em desenvolvimento.** O site público funciona com dados estáticos. A integração com Supabase (login opcional + painel admin) será habilitada na próxima etapa.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Base UI)
- **Supabase** (Postgres + Auth) — schema definido em `supabase/migrations/`, integração ainda não ativa
- i18n nativo do Next 16 (dictionaries em `src/i18n/dictionaries/`)

## Rodar localmente

Pré-requisitos: **Node.js 20.9+** e **npm**.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). A raiz redireciona para `/pt` (ou `/es`, dependendo do seu navegador).

## Estrutura

```
src/
├── app/[lang]/         # rotas localizadas (pt, es)
│   ├── page.tsx        # home
│   ├── trilha/         # lista de módulos
│   ├── modulo/[slug]/  # conteúdo de um módulo
│   ├── contatos/       # diretório de contatos
│   ├── sobre/
│   ├── entrar/         # login (placeholder — aguardando Supabase)
│   ├── perfil/         # progresso do usuário (placeholder)
│   └── admin/          # painel admin (placeholder)
├── components/         # Header, Footer, LanguageSwitcher, cards
├── i18n/               # config + dictionaries pt/es
├── lib/
│   ├── data/           # dados mock (módulos, categorias, contatos)
│   └── supabase/       # clientes (browser, server, admin)
└── proxy.ts            # detecção de locale + redirect (era middleware no Next 15)

supabase/
├── migrations/         # schema SQL + RLS
└── seed.sql            # vazio por enquanto
```

## Configurar Supabase (passo opcional, ainda não obrigatório)

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Copie `.env.local.example` para `.env.local` e preencha as 3 chaves do dashboard (Settings → API).
3. No SQL Editor, cole o conteúdo de `supabase/migrations/0001_initial_schema.sql` e execute.
4. (Opcional) Promova seu usuário a admin:
   ```sql
   update profiles set role = 'admin' where id = '<seu-uuid>';
   ```

Enquanto não houver `.env.local`, as páginas de login e admin mostram um aviso amigável e o resto do site funciona normalmente.

## Contribuir

Aceitamos contribuições de conteúdo (textos, traduções, novos contatos) e código. Veja [CONTRIBUTING.md](./CONTRIBUTING.md).

Para reportar informações desatualizadas, abra uma issue no GitHub.

## Licença

[MIT](./LICENSE)
