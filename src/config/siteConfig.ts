export interface PlanItem {
  id: string;
  name: string;
  periodLabel: string;
  durationDays: string;
  price: string;
  equivalentMonthly?: string;
  savingsLabel?: string;
  featured: boolean;
  description: string;
  features: string[];
  whatsappMessage: string;
}

export interface TrialConfig {
  available: boolean;
  headline: string;
  durationDescription: string;
  eligibilityRules: string[];
  stepsToTest: {
    stepNumber: string;
    title: string;
    description: string;
  }[];
  importantNotice: string;
}

export interface SiteConfig {
  brandName: string;
  portalSubtitle: string;
  officialLogoUrl: string;
  siteUrl: string;
  whatsapp: {
    rawNumber: string; // e.g., 47992733349
    countryCode: string; // 55
    formattedNumber: string; // (47) 99273-3349
    baseUrl: string; // https://wa.me/5547992733349
    supportHours: string;
    messages: {
      home: string;
      freeTrial: string;
      plans: string;
      howItWorks: string;
      installation: string;
      compatibility: string;
      faq: string;
      renewal: string;
      blog: string;
      contact: string;
    };
  };
  seo: {
    ga4MeasurementId: string;
    googleSiteVerification: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  trial: TrialConfig;
  plans: PlanItem[];
  paymentMethods: {
    name: string;
    detail: string;
    releaseTime: string;
  }[];
  commercialDisclaimer: string;
}

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  brandName: 'UniTV',
  portalSubtitle: 'Comercialização Autorizada e Suporte ao Cliente',
  officialLogoUrl: '/assets/aistudio/image_10db7815.png',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.unitvportal.com.br',
  whatsapp: {
    rawNumber: '47992733349',
    countryCode: '55',
    formattedNumber: '(47) 99273-3349',
    baseUrl: 'https://wa.me/5547992733349',
    supportHours: 'Segunda a Domingo, das 08h às 22h (Horário de Brasília)',
    messages: {
      home: 'Olá! Vim pelo portal da UniTV e gostaria de atendimento.',
      freeTrial: 'Olá! Sou novo usuário e gostaria de solicitar o teste grátis de 3 dias da UniTV.',
      plans: 'Olá! Gostaria de conhecer os planos disponíveis da UniTV.',
      howItWorks: 'Olá! Gostaria de tirar uma dúvida sobre como funciona a UniTV.',
      installation: 'Olá! Preciso de ajuda para instalar a UniTV.',
      compatibility: 'Olá! Gostaria de confirmar se meu aparelho é compatível com a UniTV.',
      faq: 'Olá! Tenho uma dúvida sobre a UniTV e gostaria de atendimento.',
      renewal: 'Olá! Gostaria de renovar meu acesso da UniTV.',
      blog: 'Olá! Li um artigo no blog da UniTV e gostaria de mais informações.',
      contact: 'Olá! Gostaria de falar com o suporte comercial da UniTV.',
    },
  },
  seo: {
    ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID || '',
    googleSiteVerification: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || '',
    defaultTitle: 'UniTV — Teste Grátis 3 Dias, Planos e Instalação',
    defaultDescription:
      'Portal comercial autorizado UniTV. Teste grátis de 3 dias para novos usuários, planos a partir de R$ 29,90, instalação passo a passo e suporte no WhatsApp.',
  },
  trial: {
    available: true,
    headline: 'Liberamos Teste Grátis de 3 Dias para novos usuários conhecerem toda a plataforma UniTV',
    durationDescription:
      'Novos usuários contam com 3 dias de Teste Grátis (72 horas) para avaliar todos os recursos, canais, filmes, séries e a estabilidade do aplicativo no seu aparelho compatível antes de contratar um plano.',
    eligibilityRules: [
      '3 dias completos de Teste Grátis liberados exclusivamente para novos usuários e aparelhos em primeiro acesso.',
      'Disponível para dispositivos Android (Smart TV Android/Google TV, TV Box, Fire TV Stick ou Celular Android).',
      'Requer conexão de internet banda larga estável (recomendado mínimo de 15 Mbps a 30 Mbps).',
      '100% sem compromisso: não exige cartão de crédito nem gera cobrança automática após os 3 dias.',
    ],
    stepsToTest: [
      {
        stepNumber: '01',
        title: 'Solicite seu Teste de 3 Dias no WhatsApp',
        description:
          'Chame nosso atendimento no WhatsApp informando qual é o seu aparelho (Smart TV Android, TV Box, Fire TV Stick ou celular Android).',
      },
      {
        stepNumber: '02',
        title: 'Instale o aplicativo oficial UniTV',
        description:
          'Receba o passo a passo e o código atualizado de instalação para baixar o aplicativo oficial em poucos minutos.',
      },
      {
        stepNumber: '03',
        title: 'Aproveite 3 dias grátis de acesso completo',
        description:
          'Ative sua avaliação de novo usuário e teste toda a grade e qualidade da plataforma durante 3 dias sem qualquer custo.',
      },
    ],
    importantNotice:
      'O Teste Grátis de 3 dias é válido exclusivamente para novos usuários (primeira ativação/instalação no dispositivo compatível). Chame nossa equipe no WhatsApp para receber o guia de instalação e liberar sua avaliação gratuita.',
  },
  plans: [
    {
      id: 'mensal',
      name: 'Plano Mensal',
      periodLabel: '30 dias de acesso',
      durationDays: '30 dias',
      price: 'R$ 29,90',
      equivalentMonthly: 'R$ 29,90 / mês',
      featured: false,
      description: 'Ideal para quem deseja conhecer a plataforma com flexibilidade mês a mês e sem fidelidade.',
      features: [
        'Acesso completo à plataforma UniTV por 30 dias',
        'Código de recarga de 16 dígitos ou ativação direta',
        'Compatível com Smart TV Android, TV Box, Fire Stick e Celular',
        'Suporte passo a passo para instalação e ativação via WhatsApp',
      ],
      whatsappMessage: 'Olá! Gostaria de adquirir o Plano Mensal (30 dias - R$ 29,90) da UniTV.',
    },
    {
      id: 'trimestral',
      name: 'Plano Trimestral',
      periodLabel: '90 dias de acesso',
      durationDays: '90 dias',
      price: 'R$ 79,90',
      equivalentMonthly: 'Equivalente a R$ 26,63 / mês',
      savingsLabel: 'Economia no trimestre',
      featured: true,
      description: 'Excelente equilíbrio entre economia e comodidade para manter seu acesso ativo por 3 meses.',
      features: [
        'Acesso completo à plataforma UniTV por 90 dias',
        'Código de recarga de 16 dígitos ou ativação direta',
        'Compatível com Smart TV Android, TV Box, Fire Stick e Celular',
        'Atendimento prioritário via WhatsApp durante todo o período',
      ],
      whatsappMessage: 'Olá! Gostaria de adquirir o Plano Trimestral (90 dias - R$ 79,90) da UniTV.',
    },
    {
      id: 'semestral',
      name: 'Plano Semestral',
      periodLabel: '180 dias de acesso',
      durationDays: '180 dias',
      price: 'R$ 159,90',
      equivalentMonthly: 'Equivalente a R$ 26,65 / mês',
      savingsLabel: 'Mais comodidade por 6 meses',
      featured: false,
      description: 'Indicada para quem busca tranquilidade por meio ano sem precisar renovar todo mês.',
      features: [
        'Acesso completo à plataforma UniTV por 180 dias',
        'Código de recarga de 16 dígitos ou ativação direta',
        'Compatível com Smart TV Android, TV Box, Fire Stick e Celular',
        'Suporte técnico completo via WhatsApp',
      ],
      whatsappMessage: 'Olá! Gostaria de adquirir o Plano Semestral (180 dias - R$ 159,90) da UniTV.',
    },
    {
      id: 'anual',
      name: 'Plano Anual',
      periodLabel: '365 dias de acesso',
      durationDays: '365 dias',
      price: 'R$ 289,90',
      equivalentMonthly: 'Equivalente a R$ 24,15 / mês',
      savingsLabel: 'Menor valor mensal',
      featured: false,
      description: 'O melhor custo-benefício anual para quem já conhece e utiliza a UniTV diariamente.',
      features: [
        'Acesso completo à plataforma UniTV por 365 dias',
        'Código de recarga de 16 dígitos ou ativação direta',
        'Compatível com Smart TV Android, TV Box, Fire Stick e Celular',
        'Acompanhamento e suporte dedicado via WhatsApp o ano inteiro',
      ],
      whatsappMessage: 'Olá! Gostaria de adquirir o Plano Anual (365 dias - R$ 289,90) da UniTV.',
    },
  ],
  paymentMethods: [
    {
      name: 'Pix (Envio Rápido)',
      detail: 'Pagamento à vista via chave Pix ou QR Code com confirmação imediata.',
      releaseTime: 'Envio ágil após confirmação no atendimento',
    },
    {
      name: 'Cartão de Crédito',
      detail: 'Consulte condições de pagamento via link seguro diretamente com nossa equipe.',
      releaseTime: 'Liberação após aprovação da operadora',
    },
  ],
  commercialDisclaimer:
    'Este site atua como portal comercial autorizado dedicado à comercialização de códigos de ativação/recarga e suporte de instalação ao usuário UniTV. Os valores e condições comerciais apresentados na tabela são referenciais e podem ser confirmados ou ajustados diretamente no atendimento via WhatsApp.',
};

export function buildWhatsAppUrl(baseNumber: string, message: string): string {
  const cleanNumber = baseNumber.replace(/\D/g, '');
  const fullNumber = cleanNumber.startsWith('55') ? cleanNumber : `55${cleanNumber}`;
  return `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
}
