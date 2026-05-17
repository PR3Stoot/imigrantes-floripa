import type { Module } from "./types";

export const modules: Module[] = [
  {
    slug: "documentos-essenciais",
    order: 1,
    icon: "FileText",
    color: "blue",
    contactIds: ["policia-federal-floripa", "receita-federal-floripa"],
    translations: {
      pt: {
        title: "Documentos essenciais",
        summary:
          "Os primeiros documentos que você precisa tirar ao chegar: CPF, CRNM e CTPS.",
        body: `## Por onde começar

Para acessar quase qualquer serviço no Brasil (banco, escola, posto de saúde, trabalho formal), você vai precisar de dois documentos: o **CPF** e o **CRNM**.

### 1. CPF (Cadastro de Pessoa Física)

É o documento de identificação fiscal. Sem ele, não dá para abrir conta em banco nem assinar contrato.

- **Onde tirar:** em qualquer agência da Receita Federal ou parceiros (Caixa, Banco do Brasil, Correios).
- **Custo:** gratuito quando solicitado na Receita Federal; pequeno custo nos parceiros.
- **Documentos:** passaporte ou documento de identidade do seu país + comprovante de endereço (mesmo que provisório).

### 2. CRNM (Carteira de Registro Nacional Migratório)

É o seu documento oficial como migrante no Brasil. Substitui o antigo RNE.

- **Onde tirar:** Delegacia da Polícia Federal mais próxima. Em Florianópolis, fica no centro.
- **Antes:** você precisa agendar pelo site da PF e pagar a GRU (taxa).
- **Documentos:** passaporte, comprovante de residência, foto 3x4 e comprovante de pagamento da taxa.

### 3. CTPS Digital (Carteira de Trabalho)

Hoje a Carteira de Trabalho é **digital** e gratuita. Basta ter CPF.

- Baixe o aplicativo **Carteira de Trabalho Digital** (Android/iOS).
- Faça login com sua conta gov.br.
- Pronto — não precisa ir a lugar nenhum.

### Dica

Tire o CPF primeiro. Ele é exigido em quase todos os outros passos, inclusive para emitir o CRNM. Sem CPF, você trava.`,
      },
      es: {
        title: "Documentos esenciales",
        summary:
          "Los primeros documentos que necesitás sacar al llegar: CPF, CRNM y CTPS.",
        body: `## Por dónde empezar

Para acceder a casi cualquier servicio en Brasil (banco, escuela, centro de salud, trabajo formal), vas a necesitar dos documentos: el **CPF** y la **CRNM**.

### 1. CPF (Catastro de Persona Física)

Es el documento de identificación fiscal. Sin él, no se puede abrir cuenta en banco ni firmar contrato.

- **Dónde sacarlo:** en cualquier agencia de la Receita Federal o socios (Caixa, Banco do Brasil, Correios).
- **Costo:** gratuito en la Receita Federal; pequeño costo en socios.
- **Documentos:** pasaporte o documento de identidad de tu país + comprobante de domicilio (incluso provisorio).

### 2. CRNM (Cédula de Registro Nacional Migratorio)

Es tu documento oficial como migrante en Brasil. Reemplaza al antiguo RNE.

- **Dónde sacarlo:** Delegación de la Policía Federal más cercana. En Florianópolis está en el centro.
- **Antes:** tenés que agendar por el sitio de la PF y pagar la GRU (tasa).
- **Documentos:** pasaporte, comprobante de domicilio, foto 3x4 y comprobante de pago de la tasa.

### 3. CTPS Digital (Libreta de Trabajo)

Hoy la Libreta de Trabajo es **digital** y gratuita. Solo necesitás tener CPF.

- Descargá la app **Carteira de Trabalho Digital** (Android/iOS).
- Iniciá sesión con tu cuenta gov.br.
- Listo — no tenés que ir a ningún lado.

### Tip

Sacá primero el CPF. Lo van a pedir en casi todos los otros pasos, incluso para emitir la CRNM. Sin CPF, te trabás.`,
      },
    },
  },
  {
    slug: "saude-sus",
    order: 2,
    icon: "HeartPulse",
    color: "rose",
    contactIds: ["sus-cartao", "upa-sul", "samu-192"],
    translations: {
      pt: {
        title: "Saúde pública (SUS)",
        summary:
          "Atendimento médico gratuito pelo SUS, como conseguir o cartão e onde procurar atendimento.",
        body: `## SUS: atendimento gratuito para todos

O **Sistema Único de Saúde (SUS)** atende qualquer pessoa que esteja no Brasil, **independentemente da nacionalidade ou situação migratória**. Não é necessário CPF para uma emergência.

### Cartão SUS

Para atendimentos não emergenciais (consultas, vacinas, exames), é recomendado ter o **Cartão Nacional de Saúde**.

- **Onde tirar:** qualquer Unidade Básica de Saúde (UBS) do seu bairro.
- **Documentos:** passaporte ou outro documento, CPF (se tiver) e comprovante de residência.
- **Custo:** gratuito.

### Tipos de atendimento

- **UBS (posto de saúde):** consultas comuns, vacinas, exames simples. Procure a UBS do seu bairro.
- **UPA (Unidade de Pronto Atendimento):** urgências e emergências 24h.
- **Hospital:** casos graves, geralmente após encaminhamento.
- **SAMU (192):** ambulância para emergências graves. Ligação gratuita.

### Vacinação

A vacinação no Brasil é **gratuita** pelo SUS. Crianças e adultos têm calendários específicos. Leve seu cartão de vacina antigo (se tiver) para a UBS atualizar.

### Dica

Salve no seu celular o telefone e endereço da UBS mais próxima da sua casa. Em uma emergência, você vai precisar dessas informações rapidamente.`,
      },
      es: {
        title: "Salud pública (SUS)",
        summary:
          "Atención médica gratuita por el SUS, cómo conseguir la tarjeta y dónde buscar atención.",
        body: `## SUS: atención gratuita para todos

El **Sistema Único de Salud (SUS)** atiende a cualquier persona que esté en Brasil, **independientemente de la nacionalidad o situación migratoria**. No es necesario tener CPF para una emergencia.

### Tarjeta SUS

Para atenciones no emergenciales (consultas, vacunas, estudios), se recomienda tener la **Tarjeta Nacional de Salud**.

- **Dónde sacarla:** cualquier Unidad Básica de Salud (UBS) de tu barrio.
- **Documentos:** pasaporte u otro documento, CPF (si tenés) y comprobante de domicilio.
- **Costo:** gratuito.

### Tipos de atención

- **UBS (centro de salud):** consultas comunes, vacunas, estudios simples. Andá a la UBS de tu barrio.
- **UPA (Unidad de Atención Inmediata):** urgencias y emergencias 24h.
- **Hospital:** casos graves, normalmente con derivación.
- **SAMU (192):** ambulancia para emergencias graves. Llamada gratuita.

### Vacunación

La vacunación en Brasil es **gratuita** por el SUS. Niños y adultos tienen calendarios específicos. Llevá tu carnet de vacunación antiguo (si tenés) para que la UBS lo actualice.

### Tip

Guardá en tu celular el teléfono y la dirección de la UBS más cercana a tu casa. En una emergencia, vas a necesitar esa información rápidamente.`,
      },
    },
  },
  {
    slug: "transporte-publico",
    order: 3,
    icon: "Bus",
    color: "orange",
    contactIds: ["consorcio-fenix"],
    translations: {
      pt: {
        title: "Transporte público",
        summary:
          "Ônibus, integração e como conseguir o cartão Passe Rápido em Florianópolis.",
        body: `## Como funciona o transporte em Floripa

O transporte público de Florianópolis é feito principalmente por **ônibus**, operado pelo Consórcio Fênix. A cidade tem **6 terminais de integração** que permitem trocar de linha sem pagar tarifa nova.

### Cartão Passe Rápido

É o cartão que você usa para pagar a passagem. Quem usa cartão paga **menos** do que quem paga em dinheiro no ônibus.

- **Onde tirar:** Terminal de Integração do Centro (TICEN) e outros pontos credenciados.
- **Documentos:** documento com foto e CPF.
- **Recarga:** nos terminais, em casas lotéricas ou pelo aplicativo Consórcio Fênix.

### Tarifa social

Pessoas com baixa renda (cadastradas no CadÚnico) podem ter direito ao **Passe Rápido Social**, com tarifa reduzida ou gratuita.

- Informe-se no CRAS mais próximo ou diretamente no Consórcio Fênix.

### Aplicativos úteis

- **Google Maps** ou **Moovit:** mostram rotas e horários atualizados dos ônibus.
- **Consórcio Fênix:** app oficial para recarga e horários.

### Dica

Em horários de pico (07:00-09:00 e 17:00-19:00) o trânsito fica pesado, especialmente no centro. Planeje com folga.`,
      },
      es: {
        title: "Transporte público",
        summary:
          "Colectivos, integración y cómo conseguir la tarjeta Passe Rápido en Florianópolis.",
        body: `## Cómo funciona el transporte en Floripa

El transporte público de Florianópolis es principalmente por **colectivos (ônibus)**, operado por el Consorcio Fênix. La ciudad tiene **6 terminales de integración** que permiten cambiar de línea sin pagar tarifa nueva.

### Tarjeta Passe Rápido

Es la tarjeta que usás para pagar el pasaje. Quien usa tarjeta paga **menos** que quien paga en efectivo en el colectivo.

- **Dónde sacarla:** Terminal de Integración del Centro (TICEN) y otros puntos habilitados.
- **Documentos:** documento con foto y CPF.
- **Recarga:** en los terminales, en casas lotéricas o por la app del Consorcio Fênix.

### Tarifa social

Personas de bajos ingresos (registradas en el CadÚnico) pueden tener derecho al **Passe Rápido Social**, con tarifa reducida o gratuita.

- Informate en el CRAS más cercano o directamente en el Consorcio Fênix.

### Apps útiles

- **Google Maps** o **Moovit:** muestran rutas y horarios actualizados de los colectivos.
- **Consórcio Fênix:** app oficial para recarga y horarios.

### Tip

En horas pico (07:00-09:00 y 17:00-19:00) el tránsito es pesado, sobre todo en el centro. Planeá con margen.`,
      },
    },
  },
  {
    slug: "trabalho-e-renda",
    order: 4,
    icon: "Briefcase",
    color: "emerald",
    contactIds: ["sine-floripa"],
    translations: {
      pt: {
        title: "Trabalho e renda",
        summary:
          "Como procurar emprego, direitos básicos e onde se cadastrar para vagas.",
        body: `## Trabalhar legalmente no Brasil

Para trabalhar de carteira assinada no Brasil, você precisa de **CPF** e **CRNM** (ou outro documento que comprove sua situação migratória regular).

### Onde procurar vagas

- **SINE (Sistema Nacional de Emprego):** cadastro gratuito para vagas formais. Há postos físicos e o site **gov.br/sine**.
- **Plataformas online:** Catho, Vagas.com, LinkedIn, Indeed, Gupy.
- **Grupos de WhatsApp e Facebook:** comuns em Floripa, especialmente para hotelaria, gastronomia e construção civil.

### Seus direitos básicos (CLT)

Se você trabalha com carteira assinada, tem direito a:

- Salário mínimo (R$ 1.518/mês em 2025) ou o da categoria, o que for maior.
- 13º salário.
- Férias remuneradas (30 dias por ano + 1/3).
- FGTS (depositado pelo empregador).
- Aviso prévio se for demitido sem justa causa.
- Seguro-desemprego (em alguns casos).

### Trabalho informal

Muita gente começa em trabalhos informais (autônomos, MEI, plataformas como Uber/iFood). É legal, mas você não tem os mesmos direitos que um trabalho CLT. Pense nisso ao decidir.

### Cuidado com golpes

- Vaga **nunca** cobra dinheiro para te contratar.
- Desconfie de promessas de salário muito acima do mercado.
- Se algo parece bom demais, provavelmente é golpe.

### Dica

Em Florianópolis há muitas vagas em **turismo, hotelaria e gastronomia** (alta temporada: dezembro a março) e em **tecnologia** (várias startups na cidade).`,
      },
      es: {
        title: "Trabajo e ingresos",
        summary:
          "Cómo buscar empleo, derechos básicos y dónde registrarse para vacantes.",
        body: `## Trabajar legalmente en Brasil

Para trabajar en blanco (carteira assinada) en Brasil, necesitás **CPF** y **CRNM** (u otro documento que pruebe tu situación migratoria regular).

### Dónde buscar vacantes

- **SINE (Sistema Nacional de Empleo):** registro gratuito para vacantes formales. Hay puestos físicos y el sitio **gov.br/sine**.
- **Plataformas online:** Catho, Vagas.com, LinkedIn, Indeed, Gupy.
- **Grupos de WhatsApp y Facebook:** comunes en Floripa, sobre todo para hotelería, gastronomía y construcción.

### Tus derechos básicos (CLT)

Si trabajás con carteira assinada, tenés derecho a:

- Salario mínimo (R$ 1.518/mes en 2025) o el de la categoría, lo que sea mayor.
- 13° sueldo (aguinaldo).
- Vacaciones pagas (30 días al año + 1/3).
- FGTS (depositado por el empleador).
- Aviso previo si te despiden sin causa.
- Seguro de desempleo (en algunos casos).

### Trabajo informal

Mucha gente arranca con trabajos informales (autónomos, MEI, plataformas como Uber/iFood). Es legal, pero no tenés los mismos derechos que un trabajo CLT. Tenelo en cuenta al decidir.

### Cuidado con estafas

- Una vacante **nunca** cobra dinero para contratarte.
- Desconfiá de promesas de salario muy por encima del mercado.
- Si algo parece demasiado bueno, probablemente sea estafa.

### Tip

En Florianópolis hay muchas vacantes en **turismo, hotelería y gastronomía** (alta temporada: diciembre a marzo) y en **tecnología** (varias startups en la ciudad).`,
      },
    },
  },
  {
    slug: "assistencia-social",
    order: 5,
    icon: "HandHeart",
    color: "violet",
    contactIds: ["cras-floripa", "caritas-sc"],
    translations: {
      pt: {
        title: "Assistência social",
        summary:
          "CRAS, ONGs e serviços de apoio para famílias em situação de vulnerabilidade.",
        body: `## A quem recorrer quando precisar de apoio

O Brasil tem uma rede pública e privada de assistência social que atende migrantes. Tudo gratuito.

### CRAS - Centros de Referência de Assistência Social

O CRAS é a porta de entrada para:

- **Cadastro Único (CadÚnico):** te dá acesso a vários benefícios sociais, incluindo Bolsa Família, tarifa social de água/luz, tarifa social do ônibus.
- **Bolsa Família:** auxílio mensal para famílias de baixa renda.
- **Orientação jurídica e social.**

Há várias unidades de CRAS espalhadas pelos bairros de Florianópolis. Procure a mais próxima da sua casa.

### CREAS

O **CREAS** atende casos mais específicos: violência doméstica, exploração de crianças, situação de rua, abandono. Se você está em uma situação assim ou conhece alguém, procure o CREAS.

### ONGs e entidades

- **Cáritas Brasileira (SC):** atende migrantes, refugiados e solicitantes de refúgio. Tem orientação jurídica e ajuda em vários processos.
- **Pastoral do Migrante:** apoio espiritual e social para imigrantes católicos (e abertos a todos).
- **ACNUR (parceiros locais):** apoio específico para refugiados.

### O que levar quando for ao CRAS

- Documento de identidade (passaporte ou CRNM).
- CPF de todos os membros da família.
- Comprovante de residência.
- Comprovante de renda (mesmo que informal).

### Dica

Não tenha vergonha de pedir ajuda. Esses serviços existem exatamente para isso e são um direito seu.`,
      },
      es: {
        title: "Asistencia social",
        summary:
          "CRAS, ONGs y servicios de apoyo para familias en situación de vulnerabilidad.",
        body: `## A quién recurrir cuando necesitás apoyo

Brasil tiene una red pública y privada de asistencia social que atiende a migrantes. Todo gratuito.

### CRAS - Centros de Referencia de Asistencia Social

El CRAS es la puerta de entrada para:

- **Cadastro Único (CadÚnico):** te da acceso a varios beneficios sociales, incluyendo Bolsa Família, tarifa social de agua/luz, tarifa social del colectivo.
- **Bolsa Família:** subsidio mensual para familias de bajos ingresos.
- **Orientación jurídica y social.**

Hay varias unidades de CRAS distribuidas por los barrios de Florianópolis. Buscá la más cercana a tu casa.

### CREAS

El **CREAS** atiende casos más específicos: violencia doméstica, explotación de niños, situación de calle, abandono. Si estás en una situación así o conocés a alguien, andá al CREAS.

### ONGs y entidades

- **Cáritas Brasileña (SC):** atiende migrantes, refugiados y solicitantes de refugio. Tiene orientación jurídica y ayuda en varios trámites.
- **Pastoral del Migrante:** apoyo espiritual y social para inmigrantes católicos (y abiertos a todos).
- **ACNUR (socios locales):** apoyo específico para refugiados.

### Qué llevar al CRAS

- Documento de identidad (pasaporte o CRNM).
- CPF de todos los miembros de la familia.
- Comprobante de domicilio.
- Comprobante de ingresos (incluso informal).

### Tip

No tengas vergüenza de pedir ayuda. Estos servicios existen exactamente para eso y son un derecho tuyo.`,
      },
    },
  },
  {
    slug: "educacao",
    order: 6,
    icon: "GraduationCap",
    color: "teal",
    contactIds: ["plac-ufsc"],
    translations: {
      pt: {
        title: "Educação",
        summary:
          "Matrícula em escola pública, cursos gratuitos de português e revalidação de diploma.",
        body: `## Escola pública e cursos gratuitos

A educação pública no Brasil é **gratuita** e **garantida por lei a todas as crianças**, inclusive imigrantes em situação irregular.

### Matrícula escolar para crianças

- Procure a **Secretaria Municipal de Educação** (para creche/fundamental) ou a **Secretaria Estadual** (para ensino médio).
- Documentos: certidão de nascimento (mesmo do país de origem), comprovante de residência, histórico escolar (se tiver). **Não precisa de visto ou CRNM** para matricular criança.
- Há vagas em escolas próximas a você. Se houver dificuldade, peça apoio ao CRAS.

### Português como Língua de Acolhimento (PLAc)

A UFSC oferece cursos **gratuitos** de português especificamente para imigrantes e refugiados.

- Aulas presenciais e online.
- Vários níveis (do básico ao avançado).
- Aberto para qualquer nacionalidade.

Há também cursos em **escolas técnicas, igrejas e ONGs** — pergunte na Cáritas ou na Pastoral do Migrante.

### Revalidação de diploma estrangeiro

Se você tem um diploma do seu país (graduação, ensino médio), pode revalidar no Brasil:

- **Ensino médio:** Secretaria Estadual de Educação.
- **Graduação:** universidades públicas (a UFSC participa do Carolina Bori, processo nacional).
- **Pós-graduação:** também via universidades.

O processo pode ser demorado e ter custos (taxas, traduções juramentadas).

### Dica

Mesmo sem revalidar o diploma, **muitos cursos de qualificação profissional gratuitos** (SENAI, SENAC, IFSC) estão abertos para imigrantes. É um caminho mais rápido para entrar no mercado de trabalho.`,
      },
      es: {
        title: "Educación",
        summary:
          "Matrícula en escuela pública, cursos gratuitos de portugués y revalidación de título.",
        body: `## Escuela pública y cursos gratuitos

La educación pública en Brasil es **gratuita** y **garantizada por ley a todos los niños**, incluso inmigrantes en situación irregular.

### Matrícula escolar para niños

- Andá a la **Secretaría Municipal de Educación** (para jardín/primaria) o a la **Secretaría Estadual** (para secundaria).
- Documentos: partida de nacimiento (incluso del país de origen), comprobante de domicilio, historial escolar (si tenés). **No se necesita visa ni CRNM** para matricular a un niño.
- Hay vacantes en escuelas cerca de tu casa. Si tenés dificultad, pedí apoyo en el CRAS.

### Portugués como Lengua de Acogida (PLAc)

La UFSC ofrece cursos **gratuitos** de portugués específicamente para inmigrantes y refugiados.

- Clases presenciales y online.
- Varios niveles (de básico a avanzado).
- Abierto a cualquier nacionalidad.

También hay cursos en **escuelas técnicas, iglesias y ONGs** — preguntá en la Cáritas o en la Pastoral del Migrante.

### Revalidación de título extranjero

Si tenés un título de tu país (universitario, secundario), podés revalidarlo en Brasil:

- **Secundario:** Secretaría Estadual de Educación.
- **Universitario:** universidades públicas (la UFSC participa del Carolina Bori, proceso nacional).
- **Posgrado:** también vía universidades.

El proceso puede ser largo y tener costos (tasas, traducciones juradas).

### Tip

Aun sin revalidar el título, **muchos cursos de capacitación profesional gratuitos** (SENAI, SENAC, IFSC) están abiertos a inmigrantes. Es un camino más rápido para entrar al mercado laboral.`,
      },
    },
  },
  {
    slug: "moradia",
    order: 7,
    icon: "Home",
    color: "amber",
    contactIds: ["cras-floripa", "caritas-sc"],
    translations: {
      pt: {
        title: "Moradia",
        summary:
          "Orientações para alugar imóvel, programas habitacionais e abrigos emergenciais.",
        body: `## Onde morar em Floripa

Florianópolis tem aluguéis caros, principalmente perto da praia e no centro. Bairros mais acessíveis: Trindade, Capoeiras, Estreito, Coqueiros.

### Alugar um imóvel

A maioria das imobiliárias exige um destes três:

1. **Fiador** com imóvel próprio em Floripa.
2. **Seguro fiança** (você paga um valor mensal extra à seguradora).
3. **Depósito caução** (3 meses de aluguel adiantado, devolvido no fim).

Se você não tem fiador, o seguro fiança e o caução são os caminhos mais comuns para quem está chegando.

### Alternativas para começar

- **República:** dividir aluguel com outras pessoas. Muito comum entre estudantes e jovens trabalhadores.
- **Aluguel direto com proprietário:** sem imobiliária, costuma ser mais flexível. Procure em grupos do Facebook ou OLX.
- **Pousadas e quartos baratos:** para os primeiros dias enquanto procura algo fixo.

### Situação de rua ou emergência

Se você ou sua família estiver sem onde dormir:

- **CREAS / Centro POP:** atendem população em situação de rua. Procure o CRAS para encaminhamento.
- **Casa de passagem:** abrigo temporário enquanto se busca solução.
- **Cáritas:** pode orientar para abrigos parceiros.

### Programas habitacionais

- **Minha Casa Minha Vida:** financiamento subsidiado para compra de imóvel próprio. Tem critérios de renda e exige documentos brasileiros (CPF, comprovante de renda).
- **Aluguel social municipal:** em casos de vulnerabilidade extrema. Via CRAS.

### Dica

Em alta temporada (dez-mar), preços de aluguel sobem muito em Florianópolis. Se possível, feche contrato antes de dezembro.`,
      },
      es: {
        title: "Vivienda",
        summary:
          "Orientaciones para alquilar, programas habitacionales y refugios de emergencia.",
        body: `## Dónde vivir en Floripa

Florianópolis tiene alquileres caros, sobre todo cerca de la playa y en el centro. Barrios más accesibles: Trindade, Capoeiras, Estreito, Coqueiros.

### Alquilar un inmueble

La mayoría de las inmobiliarias exige uno de estos tres:

1. **Fiador (garante)** con propiedad propia en Floripa.
2. **Seguro fianza** (pagás un valor mensual extra a la aseguradora).
3. **Depósito (caución)** (3 meses de alquiler por adelantado, devuelto al final).

Si no tenés garante, el seguro fianza y el depósito son los caminos más comunes para quien está llegando.

### Alternativas para empezar

- **República (compartido):** dividir alquiler con otras personas. Muy común entre estudiantes y jóvenes trabajadores.
- **Alquiler directo con propietario:** sin inmobiliaria, suele ser más flexible. Buscá en grupos de Facebook o OLX.
- **Hostels y cuartos baratos:** para los primeros días mientras buscás algo fijo.

### Situación de calle o emergencia

Si vos o tu familia están sin dónde dormir:

- **CREAS / Centro POP:** atienden a personas en situación de calle. Andá al CRAS para derivación.
- **Casa de pasaje:** refugio temporal mientras se busca solución.
- **Cáritas:** puede orientar a refugios socios.

### Programas habitacionales

- **Minha Casa Minha Vida:** financiación subsidiada para comprar inmueble propio. Tiene criterios de ingresos y exige documentos brasileños (CPF, comprobante de ingresos).
- **Alquiler social municipal:** en casos de vulnerabilidad extrema. Vía CRAS.

### Tip

En alta temporada (dic-mar), los alquileres suben mucho en Florianópolis. Si podés, cerrá contrato antes de diciembre.`,
      },
    },
  },
  {
    slug: "emergencias",
    order: 8,
    icon: "Siren",
    color: "red",
    contactIds: [
      "samu-192",
      "policia-militar-190",
      "bombeiros-193",
      "disque-100",
      "defensoria-publica-uniao",
    ],
    translations: {
      pt: {
        title: "Emergências e segurança",
        summary:
          "Números de emergência, o que fazer em situação de violência e como denunciar discriminação.",
        body: `## Números de emergência (ligação gratuita)

| Serviço | Número |
| --- | --- |
| Polícia Militar | **190** |
| SAMU (ambulância) | **192** |
| Bombeiros | **193** |
| Defesa Civil | **199** |
| Direitos Humanos (denúncias) | **100** |
| Atendimento à mulher | **180** |

Esses números funcionam de qualquer telefone, **mesmo sem chip ativo e sem crédito**.

### Em caso de violência

Se você for vítima de violência (qualquer tipo):

- **Em emergência:** ligue 190 (polícia) ou 180 (violência contra mulher).
- **Para registrar boletim:** vá à **Delegacia de Polícia** mais próxima. O atendimento é gratuito e em qualquer delegacia. Para mulheres, há a **DEAM** (Delegacia Especializada).
- **Apoio jurídico:** Defensoria Pública (gratuito).

Você tem direito a **intérprete** se não falar português bem. Peça.

### Xenofobia e discriminação

Discriminação por nacionalidade ou origem é **crime** no Brasil (Lei de Crimes Raciais). Se você sofrer:

- Registre boletim de ocorrência na delegacia mais próxima.
- Denuncie no **Disque 100** (Direitos Humanos), gratuito e anônimo.
- Procure a Defensoria Pública ou a Cáritas para orientação.

### Documentos perdidos ou roubados

Se perdeu seus documentos ou foram roubados:

1. Faça boletim de ocorrência online (site da Polícia Civil de SC) ou em qualquer delegacia.
2. Vá à Polícia Federal para emitir 2ª via de CRNM.
3. Se for passaporte, procure o consulado do seu país.

### Dica

Tire foto ou faça cópia de todos os seus documentos importantes e salve em um lugar seguro (e-mail, nuvem). Em caso de perda, agiliza muito a recuperação.`,
      },
      es: {
        title: "Emergencias y seguridad",
        summary:
          "Números de emergencia, qué hacer en situación de violencia y cómo denunciar discriminación.",
        body: `## Números de emergencia (llamada gratuita)

| Servicio | Número |
| --- | --- |
| Policía Militar | **190** |
| SAMU (ambulancia) | **192** |
| Bomberos | **193** |
| Defensa Civil | **199** |
| Derechos Humanos (denuncias) | **100** |
| Atención a la mujer | **180** |

Estos números funcionan desde cualquier teléfono, **incluso sin chip activo y sin crédito**.

### En caso de violencia

Si sos víctima de violencia (de cualquier tipo):

- **En emergencia:** llamá al 190 (policía) o 180 (violencia contra la mujer).
- **Para hacer denuncia:** andá a la **Delegacia de Polícia** más cercana. La atención es gratuita y en cualquier comisaría. Para mujeres, hay la **DEAM** (Delegación Especializada).
- **Apoyo jurídico:** Defensoría Pública (gratuito).

Tenés derecho a **intérprete** si no hablás bien portugués. Pedilo.

### Xenofobia y discriminación

La discriminación por nacionalidad u origen es **delito** en Brasil (Ley de Delitos Raciales). Si sufrís:

- Hacé denuncia en la comisaría más cercana.
- Denunciá en el **Disque 100** (Derechos Humanos), gratuito y anónimo.
- Buscá la Defensoría Pública o la Cáritas para orientación.

### Documentos perdidos o robados

Si perdés tus documentos o te los roban:

1. Hacé denuncia online (sitio de la Policía Civil de SC) o en cualquier comisaría.
2. Andá a la Policía Federal para emitir 2ª vía de CRNM.
3. Si es pasaporte, contactá al consulado de tu país.

### Tip

Sacá foto o copia de todos tus documentos importantes y guardalos en un lugar seguro (correo, nube). En caso de pérdida, agiliza mucho la recuperación.`,
      },
    },
  },
];
