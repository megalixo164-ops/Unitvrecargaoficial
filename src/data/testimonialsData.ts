export interface CustomerTestimonial {
  id: string;
  name: string;
  cityState: string;
  roleOrContext: string;
  deviceUsed: string;
  planUsed: string;
  category: 'atendimento' | 'app' | 'instalacao';
  avatarUrl: string;
  rating: number;
  dateLabel: string;
  comment: string;
}

export const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    id: 'carlos-joinville',
    name: 'Carlos Eduardo Mendes',
    cityState: 'Joinville, SC',
    roleOrContext: 'Representante Comercial · Cliente há 8 meses',
    deviceUsed: 'Smart TV TCL 55" (Google TV)',
    planUsed: 'Plano Trimestral',
    category: 'atendimento',
    avatarUrl: '/src/assets/images/avatar_carlos_sc_1793827874582.jpg',
    rating: 5,
    dateLabel: 'Há 2 dias',
    comment:
      'Comecei pedindo o teste grátis de 3 dias pelo WhatsApp porque queria ver se não ia travar na minha internet. O pessoal me atendeu super rápido, me mandou o código do Downloader e em 5 minutos já estava funcionando na minha TV TCL. Hoje já estou no segundo plano trimestral e indico de olhos fechados.',
  },
  {
    id: 'fernanda-curitiba',
    name: 'Fernanda Oliveira Costa',
    cityState: 'Curitiba, PR',
    roleOrContext: 'Professora · Cliente há 6 meses',
    deviceUsed: 'Fire TV Stick na TV Samsung',
    planUsed: 'Plano Anual',
    category: 'instalacao',
    avatarUrl: '/src/assets/images/avatar_fernanda_pr_1793827876128.jpg',
    rating: 5,
    dateLabel: 'Há 4 dias',
    comment:
      'Eu tinha dúvida porque minha TV da sala é Samsung e eu não sabia que precisava do Fire Stick. O atendente no WhatsApp foi super sincero e paciente, me explicou certinho sem enrolação e me ajudou passo a passo a instalar no meu Fire TV Stick. O app da UniTV é muito organizado e fácil de mexer.',
  },
  {
    id: 'marcos-sao-paulo',
    name: 'Marcos Vinícius Ribeiro',
    cityState: 'São Paulo, SP',
    roleOrContext: 'Analista de Logística · Cliente há 1 ano',
    deviceUsed: 'TV Box Xiaomi Mi Box S',
    planUsed: 'Plano Anual',
    category: 'app',
    avatarUrl: '/src/assets/images/avatar_marcos_sp_1793827882092.jpg',
    rating: 5,
    dateLabel: 'Há 1 semana',
    comment:
      'O que mais gostei na UniTV é que não tem aquela complicação de ficar colocando lista que para de funcionar. Você instala o aplicativo, coloca o código de 16 dígitos e pronto. Fiz o Pix da renovação anual num domingo à noite e em menos de 3 minutos já me mandaram o código no WhatsApp.',
  },
  {
    id: 'juliana-bh',
    name: 'Juliana Martins Almeida',
    cityState: 'Belo Horizonte, MG',
    roleOrContext: 'Contadora · Cliente há 5 meses',
    deviceUsed: 'Smart TV Philips Android + Celular',
    planUsed: 'Plano Semestral',
    category: 'app',
    avatarUrl: '/src/assets/images/avatar_juliana_mg_1793827885282.jpg',
    rating: 5,
    dateLabel: 'Há 1 semana',
    comment:
      'Aqui em casa todo mundo usa. Coloquei a senha de controle parental para as crianças na TV da sala e também instalei a versão mobile no meu celular Samsung para assistir quando estou viajando. A imagem é limpa, o menu é super rápido e o suporte pelo WhatsApp sempre responde na hora.',
  },
  {
    id: 'roberto-poa',
    name: 'Roberto Silveira Júnior',
    cityState: 'Porto Alegre, RS',
    roleOrContext: 'Aposentado · Cliente há 9 meses',
    deviceUsed: 'TV Box Aquário na TV LG',
    planUsed: 'Plano Trimestral',
    category: 'instalacao',
    avatarUrl: '/src/assets/images/avatar_roberto_rs_1793827880388.jpg',
    rating: 5,
    dateLabel: 'Há 2 semanas',
    comment:
      'Não tenho muita prática com tecnologia, mas o rapaz que me atendeu no WhatsApp teve uma paciência nota dez comigo. Me ensinou onde clicar no controle da TV Box e até a vincular meu e-mail no aplicativo para não perder meus dias. Atendimento humano de verdade, coisa rara hoje em dia.',
  },
  {
    id: 'patricia-florianopolis',
    name: 'Patrícia Vieira Santos',
    cityState: 'Florianópolis, SC',
    roleOrContext: 'Arquiteta · Cliente há 7 meses',
    deviceUsed: 'Amazon Fire TV Stick 4K',
    planUsed: 'Plano Semestral',
    category: 'atendimento',
    avatarUrl: '/src/assets/images/avatar_patricia_sc_1793827881587.jpg',
    rating: 5,
    dateLabel: 'Há 2 semanas',
    comment:
      'Fiz o teste de 3 dias grátis primeiro e fiquei impressionada com a rapidez para abrir tudo no Fire Stick 4K. Quando acabou os 3 dias, chamei no WhatsApp e peguei o plano semestral. Muito prático não precisar cadastrar cartão de crédito e poder renovar por código quando quiser.',
  },
  {
    id: 'anderson-rj',
    name: 'Anderson Nascimento',
    cityState: 'Rio de Janeiro, RJ',
    roleOrContext: 'Comerciante · Cliente há 10 meses',
    deviceUsed: 'Smart TV Philco Android + TV Box',
    planUsed: 'Plano Trimestral',
    category: 'app',
    avatarUrl: '/src/assets/images/avatar_anderson_rj_1793827881947.jpg',
    rating: 5,
    dateLabel: 'Há 3 semanas',
    comment:
      'Já tinha testado outros aplicativos antes que travavam toda hora, mas a UniTV roda liso demais mesmo na minha internet de 100 mega no Wi-Fi. A busca por nome funciona muito bem e toda vez que preciso renovar o código de 16 dígitos cai na hora depois do Pix.',
  },
  {
    id: 'camila-goiania',
    name: 'Camila Ferreira Rocha',
    cityState: 'Goiânia, GO',
    roleOrContext: 'Enfermeira · Cliente há 4 meses',
    deviceUsed: 'Smart TV Sony Bravia Android',
    planUsed: 'Plano Mensal',
    category: 'atendimento',
    avatarUrl: '/src/assets/images/avatar_camila_go_1793827882906.jpg',
    rating: 5,
    dateLabel: 'Há 3 semanas',
    comment:
      'Atendimento impecável! Chamei no WhatsApp só para tirar uma dúvida sobre como funcionava na minha TV Sony e acabei testando os 3 dias grátis na mesma hora. O aplicativo tem tudo muito bem separado por categorias, até minha mãe consegue usar sozinha pelo controle remoto.',
  },
  {
    id: 'eduardo-campinas',
    name: 'Eduardo Henrique Lima',
    cityState: 'Campinas, SP',
    roleOrContext: 'Desenvolvedor de Sistemas · Cliente há 11 meses',
    deviceUsed: 'Chromecast com Google TV 4K',
    planUsed: 'Plano Anual',
    category: 'app',
    avatarUrl: '/src/assets/images/avatar_eduardo_sp_1793827884650.jpg',
    rating: 5,
    dateLabel: 'Há 1 mês',
    comment:
      'Como sou da área de tecnologia, reparei logo na qualidade da interface da UniTV. O aplicativo é muito leve, não consome quase nada de memória do Google TV e a troca entre áudio dublado e legendado é instantânea. Peguei o plano anual pelo custo-benefício e vale cada centavo.',
  },
  {
    id: 'luciana-salvador',
    name: 'Luciana Souza Barbosa',
    cityState: 'Salvador, BA',
    roleOrContext: 'Nutricionista · Cliente há 6 meses',
    deviceUsed: 'Fire TV Stick na Smart TV LG',
    planUsed: 'Plano Trimestral',
    category: 'instalacao',
    avatarUrl: '/src/assets/images/avatar_luciana_ba_1793827884819.jpg',
    rating: 5,
    dateLabel: 'Há 1 mês',
    comment:
      'Nota 1000 para o suporte! Eu tinha acabado de comprar meu Fire Stick para colocar na minha TV LG e não sabia instalar nada. O pessoal do WhatsApp me mandou o passo a passo certinho, liberou os 3 dias grátis de teste para eu conhecer e desde então renovo sempre por aqui.',
  },
];
