# Relatório de ajustes — Imigrantes Floripa

**Data:** 15/06/2026
**Escopo:** revisão de curadoria do conteúdo (dados operacionais desatualizados + linguagem)
**Arquivos alterados:** `Footer.tsx`, `pt.json`, `es.json`, `contacts.ts`, `modules.ts`
**Idiomas:** todas as mudanças aplicadas em **português e espanhol**
**Verificação:** cada dado operacional foi conferido em **fonte oficial** antes de publicar

---

## 1. Dados operacionais corrigidos

### 1.1 CPF / Receita Federal
| | Antes | Depois |
|---|---|---|
| Endereço | Rua Felipe Schmidt, 235 | **CAC — Rua Claudino Bento da Silva, 11**, Centro |
| Atendimento | "sai na hora, **sem agendamento**" | **online primeiro** (grátis, na hora); presencial **só com agendamento** (8h–16h) |
| Taxa conveniadas | "~R$ 7" | **até R$ 7,00** (Correios, Caixa, BB, cartórios) |
| Cartão físico | implícito | informado que **hoje é digital, sem cartão de papel** |

_Fonte: Receita Federal (sistema SAGA, unidade 09002) + página de conveniadas + Correios._

### 1.2 Polícia Federal / CRNM
| | Antes | Depois |
|---|---|---|
| Endereço | Av. Gov. Gustavo Richard, 367 | **Floripa Shopping** (Loja 132, térreo — Rod. SC-401, 3116, Saco Grande) |
| Horário | Seg–Sex 08–17h | **Seg–Sex 10h–17h, só com agendamento online** |
| Taxa | "R$ 200 a R$ 300 dependendo do visto" | **R$ 204,77** (emissão) + **R$ 168,13** (processamento da residência, quando houver) + **isenções** (refúgio, apatridia, naturalização, casos humanitários) |

_Fonte: gov.br/pf (release de inauguração 03/2025 + tabela de taxas) + página oficial do Floripa Shopping._

### 1.3 SINE Florianópolis
- **Antes:** Av. Mauro Ramos, 722 · telefone "158"
- **Depois:** **Terminal Rodoviário Rita Maria, 2º andar** (Av. Paulo Fontes, 1101) · **(48) 3664-0625 / 3665-9082** · e-mail florianopolis@sine.sc.gov.br
- _Fonte: SINE/SC (sicos.sc.gov.br) — mudança ocorreu em 05/2021._

### 1.4 Defensoria Pública da União (DPU)
- **Antes:** Rua Paschoal Apóstolo Pítsica, 4863 · (48) 3251-7400
- **Depois:** **Rua Almirante Lamego, 1386**, Centro · **(48) 3221-9400** + WhatsApp de migração **(48) 3221-9420** · presencial com agendamento
- _Fonte: dpu.def.br + notícias da permuta do imóvel (TJSC, 08/2025)._

### 1.5 Cáritas SC
- **Antes:** Rua Esteves Júnior, 447, Centro · (48) 3224-0566
- **Depois:** **Casa de Direitos** — Rua Antônio Mariano de Souza, 1135, São José · WhatsApp **(48) 99829-2008** · e-mail casadedireitos.sc@caritas.org.br
- _Fonte: diretório oficial de parceiros do ACNUR (UNHCR) — a Casa de Direitos é a unidade que atende migrantes._

### 1.6 Consórcio Fênix (transporte)
- **Antes:** telefone (48) 3271-7488
- **Depois:** SAC **(48) 3025-6868** + e-mail sac@consorciofenix.com.br
- **Novo:** nota de que **pagar com Cartão Cidadão sai mais barato**, integração tem prazo, e **dinheiro deixou de ser aceito a bordo desde 2026** (só nas bilheterias)
- _Fonte: consorciofenix.com.br (tarifas + mudança de pagamento jan/2026)._

### 1.7 Aulas de português (era "PLAc UFSC")
- **Problema encontrado:** o link `plac.paginas.ufsc.br` está **morto** (redireciona para a criação de sites do WordPress); o projeto PLAM da UFSC encerrou em 2022.
- **Depois:** reformulado para **"Português para migrantes e refugiados (UFSC e redes locais)"**, ancorado no **PET Letras UFSC** (contato ativo) + Idiomas Sem Fronteiras + IFSC, com aviso de confirmar turmas a cada semestre.
- _Fonte: verificação direta da URL + páginas ativas da UFSC/IFSC._

### 1.8 CRAS
- Mantido o contato geral, mas a descrição agora orienta a **procurar a unidade do bairro** (a Prefeitura mantém lista por território) e confirmar antes de ir.

---

## 2. Ajustes de linguagem (frases menos absolutas)

| Tema | Antes | Depois |
|---|---|---|
| **Documentos / SUS** | "Sem eles, banco, **hospital**, escola, contrato — quase tudo trava" | "facilitam muito… **embora urgência e emergência nunca possam ser negadas por falta de documento**" |
| **Trabalho** | "Sem isso, **só dá trabalho informal**" | "o empregador normalmente vai exigir CPF/documentação… **mas ninguém perde direitos básicos nem deve aceitar exploração** (SINE, DPU, MPT, CRAS)" |
| **Intérprete** | "Você tem **direito a intérprete em qualquer atendimento**… garantido por lei" | "**peça apoio linguístico/intérprete ou mediação e registre** se não conseguir compreender" (ajustado em emergências, CREAS, violência e xenofobia) |
| **Moradia** | bairros fixos "**mais acessíveis**: Trindade, Capoeiras…" | "os preços **variam muito** por bairro, temporada, distância… compare antes; em vulnerabilidade, procure o CRAS e o Cadastro Habitacional" |

---

## 3. Aviso global novo (em todas as páginas)

- **Footer** (renderiza em todo o site) ganhou um banner destacado:
  > _"Informações verificadas em junho de 2026. Serviços públicos podem mudar endereço, horário, taxa, exigências e forma de atendimento. Antes de ir presencialmente, confirme nos canais oficiais."_
- A página **Sobre** teve o disclaimer atualizado com a mesma data de verificação.

---

## 4. Verificação técnica

- `tsc --noEmit` → **0 erros**
- JSON dos dicionários (`pt.json`, `es.json`) → **válidos**
- Varredura de strings antigas (endereços/telefones substituídos) → **nenhuma sobrou**
- Lint: os 4 erros existentes são **pré-existentes** (regra do Next sobre variável `module`, em arquivos não tocados nesta revisão)

---

## 5. Observações

- As informações foram verificadas em **junho de 2026**. Serviços públicos mudam com frequência — o aviso global no rodapé reforça a confirmação nos canais oficiais antes de qualquer deslocamento presencial.
- O `id` interno `plac-ufsc` foi mantido no código (não é visível ao usuário) para não quebrar referências; apenas o conteúdo exibido foi atualizado.
