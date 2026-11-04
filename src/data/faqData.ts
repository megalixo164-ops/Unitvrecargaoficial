export interface FaqItem {
  id: string;
  category: 'geral' | 'teste-gratis' | 'planos-renovacao' | 'instalacao-dispositivos' | 'suporte';
  categoryLabel: string;
  question: string;
  answer: string;
  relatedLink?: {
    label: string;
    path: string;
  };
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'o-que-e-unitv',
    category: 'geral',
    categoryLabel: 'Sobre a UniTV',
    question: 'O que é a UniTV e como funciona?',
    answer:
      'A UniTV é uma plataforma digital de entretenimento desenvolvida para o ecossistema Android (Smart TVs Android/Google TV, TV Box, Amazon Fire TV Stick e smartphones Android). Ela reúne uma interface organizada por categorias, busca rápida, controle parental e reprodução via internet banda larga, sendo ativada por meio de conta de usuário ou código de recarga de 16 dígitos.',
    relatedLink: {
      label: 'Ver página completa Como Funciona',
      path: '/como-funciona',
    },
  },
  {
    id: 'unitv-e-bom',
    category: 'geral',
    categoryLabel: 'Sobre a UniTV',
    question: 'A UniTV é boa? Quais são suas principais características?',
    answer:
      'A UniTV destaca-se pela interface intuitiva adaptada tanto para controle remoto quanto para telas sensíveis ao toque, atualização contínua do aplicativo, suporte a múltiplas resoluções conforme a velocidade da sua internet, recurso de favoritos e histórico de reprodução, além de fácil renovação via código ou conta vinculada.',
    relatedLink: {
      label: 'Ler análise completa no Blog',
      path: '/blog/unitv-e-bom-conheca-suas-caracteristicas',
    },
  },
  {
    id: 'como-funciona-teste-gratis',
    category: 'teste-gratis',
    categoryLabel: 'Teste Grátis',
    question: 'Como funciona o teste grátis de 3 dias da UniTV?',
    answer:
      'Liberamos um Teste Grátis de 3 dias (72 horas) para novos usuários em dispositivos Android compatíveis (que ainda não utilizaram degustação anteriormente). Durante esses 3 dias, o novo usuário pode avaliar toda a navegação, a organização dos menus e a estabilidade na sua internet sem precisar cadastrar cartão de crédito.',
    relatedLink: {
      label: 'Solicitar Teste Grátis de 3 Dias',
      path: '/teste-gratis',
    },
  },
  {
    id: 'teste-gratis-cobra-depois',
    category: 'teste-gratis',
    categoryLabel: 'Teste Grátis',
    question: 'O teste grátis gera alguma cobrança automática?',
    answer:
      'Não. Para instalar o aplicativo e verificar a disponibilidade do período de teste no seu aparelho Android, não é solicitado cartão de crédito nem dados bancários. Após o término do período de avaliação, o acesso simplesmente aguarda a ativação de um plano caso você decida continuar utilizando.',
  },
  {
    id: 'quais-os-planos',
    category: 'planos-renovacao',
    categoryLabel: 'Planos e Renovação',
    question: 'Quais são os planos disponíveis da UniTV?',
    answer:
      'Trabalhamos com opções de acesso Mensal (30 dias), Trimestral (90 dias), Semestral (180 dias) e Anual (365 dias). Todos os planos oferecem acesso integral aos recursos da plataforma, variando apenas o período de vigência e a economia proporcional nos planos mais longos.',
    relatedLink: {
      label: 'Ver tabela de Planos e Valores',
      path: '/planos',
    },
  },
  {
    id: 'como-ativar-unitv',
    category: 'planos-renovacao',
    categoryLabel: 'Planos e Renovação',
    question: 'Como faço para ativar ou renovar minha UniTV?',
    answer:
      'Após escolher seu plano pelo nosso atendimento no WhatsApp e realizar o pagamento (como Pix), você recebe seu código de recarga de 16 dígitos ou as instruções de ativação direta na conta. Basta abrir o aplicativo UniTV, acessar a aba "Perfil" ou "Recarga", digitar o código recebido e confirmar para que os dias sejam creditados imediatamente.',
    relatedLink: {
      label: 'Ver guia de ativação passo a passo',
      path: '/blog/como-ativar-unitv',
    },
  },
  {
    id: 'formas-de-pagamento',
    category: 'planos-renovacao',
    categoryLabel: 'Planos e Renovação',
    question: 'Quais são as formas de pagamento aceitas?',
    answer:
      'A forma mais rápida e utilizada é o Pix, pois permite confirmação imediata e envio ágil do seu código de recarga pelo WhatsApp. Também é possível consultar condições para pagamento via cartão de crédito diretamente com nossa equipe comercial.',
  },
  {
    id: 'funciona-smart-tv',
    category: 'instalacao-dispositivos',
    categoryLabel: 'Instalação e Dispositivos',
    question: 'A UniTV funciona em qualquer Smart TV?',
    answer:
      'A UniTV funciona nativamente (instalação direta) em todas as Smart TVs que possuem sistema operacional Android TV ou Google TV (como diversos modelos da TCL, Philips, Philco, Sony, AOC e Toshiba). Já nas Smart TVs com sistema fechado próprio, como Samsung (Tizen) e LG (WebOS), é necessário utilizar um aparelho Android conectado na entrada HDMI, como Amazon Fire TV Stick, Xiaomi Mi Box ou TV Box.',
    relatedLink: {
      label: 'Verificar Dispositivos Compatíveis',
      path: '/dispositivos-compativeis',
    },
  },
  {
    id: 'funciona-samsung-lg',
    category: 'instalacao-dispositivos',
    categoryLabel: 'Instalação e Dispositivos',
    question: 'Como usar a UniTV em uma TV Samsung ou LG?',
    answer:
      'Como as TVs Samsung usam o sistema Tizen e as TVs LG usam o WebOS, elas não instalam aplicativos Android (.apk) diretamente na memória da TV. Para utilizar a UniTV na sua TV Samsung ou LG com total qualidade, basta plugar um Amazon Fire TV Stick, Chromecast com Google TV ou uma TV Box na porta HDMI da televisão.',
    relatedLink: {
      label: 'Ver tutorial para TVs Samsung e LG',
      path: '/como-instalar',
    },
  },
  {
    id: 'velocidade-internet',
    category: 'instalacao-dispositivos',
    categoryLabel: 'Instalação e Dispositivos',
    question: 'Qual a velocidade de internet necessária para usar a UniTV?',
    answer:
      'Recomendamos uma conexão de internet banda larga estável de pelo menos 15 Mbps para reprodução padrão e de 30 Mbps ou mais para conteúdos em alta definição e 4K. Sempre que possível, conecte sua Smart TV ou TV Box via cabo de rede (Ethernet) ou utilize a rede Wi-Fi de 5GHz para evitar oscilações de sinal.',
  },
  {
    id: 'posso-usar-em-mais-de-um-aparelho',
    category: 'planos-renovacao',
    categoryLabel: 'Planos e Renovação',
    question: 'Posso instalar o aplicativo na TV e no celular Android?',
    answer:
      'Sim, você pode instalar o aplicativo nos seus dispositivos Android compatíveis e vincular sua conta UniTV. Consulte nosso suporte no WhatsApp para verificar as regras vigentes de conexões simultâneas do seu plano.',
  },
  {
    id: 'suporte-whatsapp',
    category: 'suporte',
    categoryLabel: 'Suporte e Atendimento',
    question: 'Como funciona o suporte caso eu tenha dúvidas na instalação?',
    answer:
      'Nosso atendimento funciona todos os dias pelo WhatsApp. Fornecemos o link atualizado de download, os códigos para o aplicativo Downloader e auxiliamos passo a passo desde a instalação até a ativação ou renovação do seu plano.',
  },
];
