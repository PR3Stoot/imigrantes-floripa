import type { Contact } from "./types";

export const contacts: Contact[] = [
  {
    id: "policia-federal-floripa",
    categorySlug: "documentos",
    phone: "(48) 3281-6500",
    address:
      "Floripa Shopping (Loja 132, térreo) - Rod. SC-401, 3116, Saco Grande, Florianópolis - SC",
    lat: -27.554043,
    lng: -48.498529,
    website: "https://www.gov.br/pf/pt-br",
    hours: "Seg-Sex 10:00-17:00 (somente com agendamento online)",
    translations: {
      pt: {
        name: "Polícia Federal - Atendimento de Migração",
        description:
          "Emissão de CRNM (Carteira de Registro Nacional Migratório) e regularização migratória. O atendimento de migração foi transferido para o Floripa Shopping — confirme o local atual e agende em gov.br/pf antes de ir.",
      },
      es: {
        name: "Policía Federal - Atención de Migración",
        description:
          "Emisión de CRNM (Cédula de Registro Nacional Migratorio) y regularización migratoria. La atención de migración fue trasladada al Floripa Shopping — confirmá el lugar actual y agendá en gov.br/pf antes de ir.",
      },
    },
  },
  {
    id: "receita-federal-floripa",
    categorySlug: "documentos",
    phone: "146",
    address: "Rua Claudino Bento da Silva, 11 - Centro, Florianópolis - SC",
    lat: -27.594728,
    lng: -48.560605,
    website: "https://www.gov.br/receitafederal/pt-br",
    hours: "Seg-Sex 08:00-16:00 (atendimento presencial mediante agendamento)",
    translations: {
      pt: {
        name: "Receita Federal - CPF",
        description:
          "Inscrição e regularização de CPF, gratuita pelos canais oficiais. Em muitos casos dá pra resolver online; o atendimento presencial costuma exigir agendamento. Confirme endereço e agendamento antes de ir.",
      },
      es: {
        name: "Receita Federal - CPF",
        description:
          "Inscripción y regularización del CPF, gratuita por los canales oficiales. En muchos casos se resuelve online; la atención presencial suele exigir agendamiento. Confirmá dirección y turno antes de ir.",
      },
    },
  },
  {
    id: "cras-floripa",
    categorySlug: "assistencia-social",
    website: "https://www.pmf.sc.gov.br/entidades/semas/",
    hours: "Seg-Sex 08:00-18:00",
    translations: {
      pt: {
        name: "CRAS - Centros de Referência de Assistência Social",
        description:
          "Apoio social, Cadastro Único, Bolsa Família e orientação para famílias em situação de vulnerabilidade. Há 10 unidades em vários bairros — procure a do seu território (lista no site da SEMAS). Atendimento mediante agendamento; confirme endereço, telefone e horário antes de ir.",
      },
      es: {
        name: "CRAS - Centros de Referencia de Asistencia Social",
        description:
          "Apoyo social, Cadastro Único, Bolsa Família y orientación para familias en situación de vulnerabilidad. Hay 10 unidades en varios barrios — buscá la de tu territorio (lista en el sitio de SEMAS). Atención con cita previa; confirmá dirección, teléfono y horario antes de ir.",
      },
    },
  },
  {
    id: "caritas-sc",
    categorySlug: "assistencia-social",
    phone: "(48) 3234-7033",
    whatsapp: "(48) 99829-2008",
    email: "casadedireitos.sc@caritas.org.br",
    address:
      "Casa de Direitos - Rua Antônio Mariano de Souza, 1135 - Ipiranga, São José - SC",
    lat: -27.564678,
    lng: -48.626107,
    website: "https://sc.caritas.org.br",
    hours: "Seg-Sex 13:30-18:00",
    translations: {
      pt: {
        name: "Cáritas SC - Casa de Direitos (migrantes e refugiados)",
        description:
          "Atendimento a migrantes, refugiados e solicitantes de refúgio (parceira do ACNUR): orientação sobre acesso a direitos e serviços públicos e encaminhamentos. Confirme endereço, contato e horário atuais antes de ir presencialmente.",
      },
      es: {
        name: "Cáritas SC - Casa de Direitos (migrantes y refugiados)",
        description:
          "Atención a migrantes, refugiados y solicitantes de refugio (aliada del ACNUR): orientación sobre acceso a derechos y servicios públicos y derivaciones. Confirmá dirección, contacto y horario actuales antes de ir presencialmente.",
      },
    },
  },
  {
    id: "circulos-hospitalidade",
    categorySlug: "assistencia-social",
    whatsapp: "(48) 99638-0528",
    email: "contato@circulosdehospitalidade.org",
    website: "https://circulosdehospitalidade.org/",
    translations: {
      pt: {
        name: "Círculos de Hospitalidade",
        description:
          "Rede de apoio e acolhimento para migrantes e famílias em Florianópolis. Parceira deste portal.",
      },
      es: {
        name: "Círculos de Hospitalidade",
        description:
          "Red de apoyo y acogida para migrantes y familias en Florianópolis. Aliada de este portal.",
      },
    },
  },
  {
    id: "sus-cartao",
    categorySlug: "saude",
    phone: "136",
    website: "https://www.gov.br/saude/pt-br",
    translations: {
      pt: {
        name: "Cartão SUS - Cadastro",
        description:
          "Cadastro do Cartão Nacional de Saúde feito gratuitamente em qualquer Unidade Básica de Saúde (UBS). Documento, comprovante de residência e foto são suficientes.",
      },
      es: {
        name: "Tarjeta SUS - Registro",
        description:
          "Registro de la Tarjeta Nacional de Salud realizado gratis en cualquier Unidad Básica de Salud (UBS). Documento, comprobante de residencia y foto son suficientes.",
      },
    },
  },
  {
    id: "alo-saude-floripa",
    categorySlug: "saude",
    phone: "0800 333 3233",
    hours: "24 horas, todos os dias",
    translations: {
      pt: {
        name: "Alô Saúde Floripa (teleatendimento médico)",
        description:
          "Atendimento médico gratuito por telefone, 24h, pelo SUS. Triagem por enfermagem e teleconsulta médica por vídeo; receitas e atestados chegam por WhatsApp ou e-mail. Para moradores de Florianópolis com cadastro no SUS (pode ser feito na hora, durante a ligação).",
      },
      es: {
        name: "Alô Saúde Floripa (teleatención médica)",
        description:
          "Atención médica gratuita por teléfono, 24h, por el SUS. Triage por enfermería y teleconsulta médica por video; recetas y certificados llegan por WhatsApp o e-mail. Para residentes de Florianópolis con registro en el SUS (puede hacerse en el momento, durante la llamada).",
      },
    },
  },
  {
    id: "upa-sul",
    categorySlug: "saude",
    phone: "0800 000 4310",
    address:
      "MultiHospital - Av. Dep. Diomício Freitas, 3393 - Carianos, Florianópolis - SC",
    lat: -27.66495,
    lng: -48.544795,
    hours: "24 horas",
    translations: {
      pt: {
        name: "UPA Sul (Unidade de Pronto Atendimento)",
        description:
          "Atendimento de urgência e emergência 24h, gratuito pelo SUS.",
      },
      es: {
        name: "UPA Sur (Unidad de Atención Inmediata)",
        description:
          "Atención de urgencia y emergencia 24h, gratuita por el SUS.",
      },
    },
  },
  {
    id: "consorcio-fenix",
    categorySlug: "transporte",
    phone: "(48) 3025-6868",
    email: "sac@consorciofenix.com.br",
    address: "Av. Paulo Fontes, 701 - TICEN, Centro, Florianópolis - SC",
    lat: -27.59859,
    lng: -48.55382,
    website: "https://www.consorciofenix.com.br/passe-rapido",
    hours: "Seg-Sex 08:00-17:00 (venda de créditos no TICEN até 22h)",
    translations: {
      pt: {
        name: "Passe Rápido - Consórcio Fênix",
        description:
          "Emissão e recarga do cartão para o transporte público de Florianópolis. Pagar com Cartão Cidadão costuma sair mais barato que dinheiro, QR Code ou Pix. Confira valores, regras de integração e locais de atendimento atualizados no site oficial. Há também tarifa social para quem se qualifica.",
      },
      es: {
        name: "Passe Rápido - Consorcio Fênix",
        description:
          "Emisión y recarga de la tarjeta para el transporte público de Florianópolis. Pagar con Cartão Cidadão suele salir más barato que efectivo, QR Code o Pix. Consultá valores, reglas de integración y puntos de atención actualizados en el sitio oficial. También hay tarifa social para quien califica.",
      },
    },
  },
  {
    id: "sine-floripa",
    categorySlug: "trabalho",
    phone: "(48) 3664-0625",
    email: "florianopolis@sine.sc.gov.br",
    address:
      "Terminal Rodoviário Rita Maria, 2º andar - Av. Paulo Fontes, 1101, Centro, Florianópolis - SC",
    lat: -27.597167,
    lng: -48.558026,
    website: "https://www.sicos.sc.gov.br/sine/",
    hours: "Seg-Sex (confirme o horário de atendimento)",
    translations: {
      pt: {
        name: "SINE - Sistema Nacional de Emprego",
        description:
          "Intermediação de vagas, encaminhamento para entrevistas e habilitação do seguro-desemprego. Telefones: (48) 3664-0625 e (48) 3665-9082. Confirme horário e atendimento pelos canais oficiais do SINE/SC antes de ir.",
      },
      es: {
        name: "SINE - Sistema Nacional de Empleo",
        description:
          "Intermediación de vacantes, derivación a entrevistas y solicitud de seguro de desempleo. Teléfonos: (48) 3664-0625 y (48) 3665-9082. Confirmá horario y atención por los canales oficiales del SINE/SC antes de ir.",
      },
    },
  },
  {
    id: "plac-ufsc",
    categorySlug: "educacao",
    email: "neplac.ufsc@gmail.com",
    website: "https://neplac.paginas.ufsc.br",
    translations: {
      pt: {
        name: "Português para migrantes e refugiados (UFSC e redes locais)",
        description:
          "Cursos gratuitos de português de acolhimento em Florianópolis. Na UFSC, o NePLAc (projeto Rodamundo) oferece turmas para imigrantes e refugiados, com inscrições por edital a cada semestre e aulas no campus Trindade; há também o PET Letras, o Idiomas Sem Fronteiras (UFSC) e cursos do IFSC. As turmas mudam a cada semestre — confirme a disponibilidade antes.",
      },
      es: {
        name: "Portugués para migrantes y refugiados (UFSC y redes locales)",
        description:
          "Cursos gratuitos de portugués de acogida en Florianópolis. En la UFSC, el NePLAc (proyecto Rodamundo) ofrece clases para inmigrantes y refugiados, con inscripciones por convocatoria cada semestre y clases en el campus Trindade; también está el PET Letras, el Idiomas Sem Fronteiras (UFSC) y cursos del IFSC. Los grupos cambian cada semestre — confirmá la disponibilidad antes.",
      },
    },
  },
  {
    id: "defensoria-publica-uniao",
    categorySlug: "emergencias",
    phone: "(48) 3221-9400",
    whatsapp: "(48) 3221-9420",
    address: "Rua Almirante Lamego, 1386 - Centro, Florianópolis - SC",
    website: "https://www.dpu.def.br",
    hours: "Seg-Sex 09:00-17:00 (confirme se o atendimento é presencial ou remoto)",
    translations: {
      pt: {
        name: "Defensoria Pública da União",
        description:
          "Assistência jurídica gratuita, inclusive para migrantes e solicitantes de refúgio. O atendimento também pode ser remoto — agendamento por telefone/WhatsApp, pelo site (siage.dpu.def.br) ou pelo app DPU Cidadão. Confirme endereço e forma de atendimento antes de ir.",
      },
      es: {
        name: "Defensoría Pública de la Unión",
        description:
          "Asistencia jurídica gratuita, también para migrantes y solicitantes de refugio. La atención también puede ser remota — agendamiento por teléfono/WhatsApp, por el sitio (siage.dpu.def.br) o por la app DPU Cidadão. Confirmá dirección y forma de atención antes de ir.",
      },
    },
  },
  {
    id: "samu-192",
    categorySlug: "emergencias",
    phone: "192",
    translations: {
      pt: {
        name: "SAMU - Emergência Médica",
        description: "Ambulância e emergência médica 24h. Ligação gratuita.",
      },
      es: {
        name: "SAMU - Emergencia Médica",
        description: "Ambulancia y emergencia médica 24h. Llamada gratuita.",
      },
    },
  },
  {
    id: "policia-militar-190",
    categorySlug: "emergencias",
    phone: "190",
    translations: {
      pt: {
        name: "Polícia Militar",
        description: "Emergência policial 24h. Ligação gratuita.",
      },
      es: {
        name: "Policía Militar",
        description: "Emergencia policial 24h. Llamada gratuita.",
      },
    },
  },
  {
    id: "bombeiros-193",
    categorySlug: "emergencias",
    phone: "193",
    translations: {
      pt: {
        name: "Corpo de Bombeiros",
        description: "Incêndios, resgates e emergências em geral. Ligação gratuita.",
      },
      es: {
        name: "Bomberos",
        description: "Incendios, rescates y emergencias en general. Llamada gratuita.",
      },
    },
  },
  {
    id: "disque-100",
    categorySlug: "emergencias",
    phone: "100",
    website: "https://www.gov.br/mdh/pt-br/disque100",
    translations: {
      pt: {
        name: "Disque 100 - Direitos Humanos",
        description:
          "Denúncias de violação de direitos humanos, incluindo xenofobia e discriminação contra imigrantes.",
      },
      es: {
        name: "Disque 100 - Derechos Humanos",
        description:
          "Denuncias de violación de derechos humanos, incluyendo xenofobia y discriminación contra inmigrantes.",
      },
    },
  },
];
