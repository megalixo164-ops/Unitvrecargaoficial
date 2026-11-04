export interface InstallationStep {
  stepNumber: string;
  title: string;
  description: string;
  tip?: string;
}

export interface DeviceGuide {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: 'native' | 'external' | 'mobile' | 'requires-adapter';
  compatibilityStatus: 'Compatível Nativo' | 'Compatível via TV Box / Stick';
  brandsExamples: string[];
  systemRequirement: string;
  minInternetSpeed: string;
  recommendedStorage: string;
  summary: string;
  installationMethod: string;
  estimatedTime: string;
  steps: InstallationStep[];
  technicalNotes: string[];
  whatsappCustomMessage: string;
}

export const DEVICE_GUIDES: DeviceGuide[] = [
  {
    id: 'smart-tv-android',
    slug: 'smart-tv-android',
    name: 'Smart TV com Android TV ou Google TV',
    shortName: 'Smart TV Android',
    category: 'native',
    compatibilityStatus: 'Compatível Nativo',
    brandsExamples: ['TCL', 'Philco (Android)', 'Philips (Android)', 'Sony Bravia', 'AOC (Android)', 'Toshiba'],
    systemRequirement: 'Android TV 5.0 ou superior / Google TV',
    minInternetSpeed: '15 Mbps (Recomendado 30 Mbps+ via cabo ou Wi-Fi 5GHz)',
    recommendedStorage: 'Mínimo de 150 MB livres na memória interna',
    summary:
      'As Smart TVs equipadas de fábrica com o sistema operacional Android TV ou Google TV oferecem compatibilidade nativa e direta com o aplicativo UniTV, sem necessidade de aparelhos externos.',
    installationMethod: 'Aplicativo Downloader ou Navegador / USB',
    estimatedTime: '4 a 6 minutos',
    steps: [
      {
        stepNumber: '01',
        title: 'Acesse a Google Play Store da sua Smart TV',
        description:
          'No menu inicial da sua TV Android ou Google TV, abra a loja oficial Google Play Store utilizando o controle remoto e pesquise pelo aplicativo gratuito "Downloader by AFTVnews" (ícone laranja) ou um navegador de TV.',
        tip: 'O aplicativo Downloader facilita baixar o instalador oficial diretamente na TV digitando apenas o código ou endereço.',
      },
      {
        stepNumber: '02',
        title: 'Habilite a permissão de instalação para o Downloader',
        description:
          'Vá em Configurações da TV > Apps > Segurança e Restrições (ou Acesso Especial > Instalar apps desconhecidos) e marque como "Permitido" para o aplicativo Downloader.',
      },
      {
        stepNumber: '03',
        title: 'Solicite o link ou código atualizado no nosso WhatsApp',
        description:
          'Abra o aplicativo Downloader e insira o endereço ou código oficial fornecido pelo nosso suporte no WhatsApp para baixar a versão atualizada do APK para Smart TV.',
        tip: 'Utilize sempre a versão dedicada para TV (TV Version), que é otimizada para uso com o controle remoto.',
      },
      {
        stepNumber: '04',
        title: 'Conclua a instalação e abra a UniTV',
        description:
          'Assim que o download terminar, clique em "Instalar" e em seguida em "Abrir". O ícone da UniTV ficará disponível na tela inicial da sua Smart TV para acesso imediato.',
      },
    ],
    technicalNotes: [
      'Priorize conectar sua Smart TV via cabo de rede (Ethernet) ou rede Wi-Fi de 5GHz para maior estabilidade.',
      'Caso sua Smart TV solicite permissão do Google Play Protect durante a instalação, selecione "Instalar assim mesmo" por se tratar de um aplicativo instalado fora da Play Store.',
    ],
    whatsappCustomMessage: 'Olá! Preciso de ajuda para instalar a UniTV na minha Smart TV Android / Google TV.',
  },
  {
    id: 'tv-box',
    slug: 'tv-box-android',
    name: 'TV Box Android e Receptores Smart',
    shortName: 'TV Box Android',
    category: 'external',
    compatibilityStatus: 'Compatível Nativo',
    brandsExamples: ['Xiaomi Mi Box S', 'Realme 4K Stick', 'Aquário STV', 'Intelbras Izy Play', 'MXQ Pro', 'TX9', 'BTV / HTV'],
    systemRequirement: 'Android 5.0 ou superior',
    minInternetSpeed: '15 Mbps a 30 Mbps estáveis',
    recommendedStorage: 'Mínimo de 150 MB livres',
    summary:
      'Qualquer aparelho TV Box com sistema Android transforma televisores comuns ou Smart TVs de outros sistemas em uma central completa100% compatível com a UniTV.',
    installationMethod: 'Navegador Chrome, Downloader ou Pendrive (USB)',
    estimatedTime: '3 a 5 minutos',
    steps: [
      {
        stepNumber: '01',
        title: 'Escolha o método de download na sua TV Box',
        description:
          'Na tela inicial da sua TV Box, abra o navegador Google Chrome (ou o aplicativo Downloader) ou conecte um pendrive USB contendo o arquivo APK oficial enviado pelo nosso atendimento.',
      },
      {
        stepNumber: '02',
        title: 'Baixe o instalador oficial para TV',
        description:
          'Digite o link de download informado pela nossa equipe no WhatsApp e aguarde a conclusão do arquivo instalador (.apk).',
      },
      {
        stepNumber: '03',
        title: 'Execute o arquivo pelo Gerenciador de Arquivos',
        description:
          'Abra a pasta "Downloads" (ou o aplicativo File Manager / Explorador de Arquivos da sua TV Box), selecione o arquivo da UniTV e clique em "Instalar".',
        tip: 'Se solicitado, ative a opção "Fontes Desconhecidas" nas configurações de segurança do Android.',
      },
      {
        stepNumber: '04',
        title: 'Inicie o aplicativo e faça login ou recarga',
        description:
          'Abra a UniTV na lista de aplicativos da sua TV Box. Na tela inicial, você poderá testar (se elegível) ou inserir seus dados de acesso / código de recarga de 16 dígitos.',
      },
    ],
    technicalNotes: [
      'A versão para TV Box é totalmente compatível com o controle remoto padrão (setas direcionais e botão OK).',
      'Mantenha pelo menos 300 MB livres na sua TV Box para garantir que atualizações automáticas ocorram sem travamentos.',
    ],
    whatsappCustomMessage: 'Olá! Preciso de ajuda para instalar a UniTV na minha TV Box.',
  },
  {
    id: 'fire-tv-stick',
    slug: 'amazon-fire-tv-stick',
    name: 'Amazon Fire TV Stick (Lite, HD, 4K e 4K Max)',
    shortName: 'Fire TV Stick',
    category: 'external',
    compatibilityStatus: 'Compatível Nativo',
    brandsExamples: ['Fire TV Stick Lite', 'Fire TV Stick Full HD', 'Fire TV Stick 4K', 'Fire TV Stick 4K Max'],
    systemRequirement: 'Fire OS 5.0 ou superior (Baseado em Android)',
    minInternetSpeed: '15 Mbps a 30 Mbps (Wi-Fi 5GHz recomendado)',
    recommendedStorage: 'Mínimo de 150 MB livres',
    summary:
      'O Amazon Fire TV Stick é um dos dispositivos mais rápidos, práticos e recomendados para utilizar a UniTV em qualquer TV com entrada HDMI (incluindo TVs Samsung e LG).',
    installationMethod: 'Aplicativo Downloader (Amazon Appstore)',
    estimatedTime: '4 minutos',
    steps: [
      {
        stepNumber: '01',
        title: 'Instale o app Downloader no Fire Stick',
        description:
          'Na tela inicial do Fire TV Stick, vá até a lupa de "Pesquisar", digite "Downloader" e instale o aplicativo gratuito de ícone laranja.',
      },
      {
        stepNumber: '02',
        title: 'Ative as Opções para Desenvolvedores no Fire OS',
        description:
          'Acesse Configurações (ícone de engrenagem) > Meu Fire TV > Informações. Clique 7 vezes seguidas sobre "Fire TV Stick" até aparecer a mensagem de que você já é um desenvolvedor.',
        tip: 'Volte uma tela, entre em "Opções para Desenvolvedores" e ative a permissão de instalação para o aplicativo Downloader.',
      },
      {
        stepNumber: '03',
        title: 'Digite o código de download no Downloader',
        description:
          'Abra o aplicativo Downloader, digite o código numérico ou link oficial enviado pelo nosso atendimento no WhatsApp e clique em "Go".',
      },
      {
        stepNumber: '04',
        title: 'Instale e fixe a UniTV nos seus favoritos',
        description:
          'Clique em "Instalar" quando a janela surgir na tela. Após concluir, você pode apagar o arquivo APK temporário no Downloader para economizar espaço e abrir a UniTV.',
      },
    ],
    technicalNotes: [
      'O controle remoto Alexa Voice do Fire TV Stick funciona com total precisão na navegação pelos menus da UniTV.',
      'Excelente solução para quem possui Smart TV Samsung ou LG e deseja alto desempenho.',
    ],
    whatsappCustomMessage: 'Olá! Preciso de ajuda para instalar a UniTV no meu Amazon Fire TV Stick.',
  },
  {
    id: 'celular-android',
    slug: 'celular-tablet-android',
    name: 'Celular e Tablet Android',
    shortName: 'Celular Android',
    category: 'mobile',
    compatibilityStatus: 'Compatível Nativo',
    brandsExamples: ['Samsung Galaxy', 'Motorola Moto', 'Xiaomi Redmi / Poco', 'Realme', 'Asus', 'Tablets Android'],
    systemRequirement: 'Android 6.0 ou superior',
    minInternetSpeed: '10 Mbps (4G/5G ou Wi-Fi)',
    recommendedStorage: 'Mínimo de 120 MB livres',
    summary:
      'A UniTV conta com uma versão Mobile exclusiva projetada para telas sensíveis ao toque (touchscreen), permitindo acompanhar a programação onde você estiver.',
    installationMethod: 'Download direto pelo navegador do celular',
    estimatedTime: '2 minutos',
    steps: [
      {
        stepNumber: '01',
        title: 'Solicite o link da versão Mobile no WhatsApp',
        description:
          'Fale com nosso atendimento pelo WhatsApp para receber o link oficial da versão Mobile (específica para toque na tela de smartphones e tablets Android).',
      },
      {
        stepNumber: '02',
        title: 'Baixe o arquivo APK pelo navegador Chrome',
        description:
          'Toque no link recebido e confirme o download do arquivo instalador no navegador do seu smartphone.',
      },
      {
        stepNumber: '03',
        title: 'Autorize a instalação e abra o app',
        description:
          'Toque no arquivo baixado na barra de notificações. Se for sua primeira vez instalando via navegador, autorize "Permitir desta fonte" e toque em "Instalar".',
      },
    ],
    technicalNotes: [
      'Importante: certifique-se de instalar a versão Mobile no celular e a versão TV nos televisores, pois a interface é adaptada para cada tipo de tela.',
      'Dispositivos Apple (iPhone / iPad com sistema iOS) não suportam arquivos APK do sistema Android.',
    ],
    whatsappCustomMessage: 'Olá! Preciso de ajuda para instalar a UniTV no meu celular Android.',
  },
  {
    id: 'samsung-lg',
    slug: 'smart-tv-samsung-lg',
    name: 'Smart TV Samsung (Tizen) e LG (WebOS)',
    shortName: 'Samsung & LG',
    category: 'requires-adapter',
    compatibilityStatus: 'Compatível via TV Box / Stick',
    brandsExamples: ['Samsung Crystal UHD / QLED (Tizen)', 'LG UHD / NanoCell / OLED (WebOS)', 'Roku TV Nativa'],
    systemRequirement: 'Requer dispositivo Android conectado na entrada HDMI (Fire Stick, Mi Box ou TV Box)',
    minInternetSpeed: '15 Mbps a 30 Mbps',
    recommendedStorage: 'Armazenamento no dispositivo HDMI externo',
    summary:
      'As Smart TVs da Samsung utilizam o sistema próprio Tizen e as TVs da LG utilizam o sistema WebOS. Como a UniTV é uma plataforma desenvolvida nativamente para a arquitetura Android, não existe instalação direta na loja interna dessas TVs — mas elas funcionam perfeitamente conectando um Fire TV Stick, Mi Box ou TV Box na porta HDMI.',
    installationMethod: 'Conexão via dispositivo Android externo (HDMI)',
    estimatedTime: '5 minutos (com dispositivo HDMI)',
    steps: [
      {
        stepNumber: '01',
        title: 'Entenda o sistema da sua TV Samsung ou LG',
        description:
          'TVs Samsung (sistema Tizen) e TVs LG (sistema WebOS) possuem sistemas fechados que não aceitam aplicativos no formato Android (.apk) diretamente na memória da TV.',
        tip: 'Desconfie de sites que prometem códigos mágicos de DNS para instalar o aplicativo original da UniTV diretamente no sistema Tizen ou WebOS sem aparelho Android.',
      },
      {
        stepNumber: '02',
        title: 'Conecte um Fire TV Stick, Google Chromecast com Google TV ou TV Box',
        description:
          'Basta conectar um aparelho com sistema Android (como o Amazon Fire TV Stick, Xiaomi Mi Box ou TV Box Android) em qualquer entrada HDMI da sua TV Samsung ou LG.',
      },
      {
        stepNumber: '03',
        title: 'Instale a UniTV no aparelho conectado',
        description:
          'Com o dispositivo Android conectado na porta HDMI, siga o tutorial de Fire TV Stick ou TV Box para instalar o aplicativo oficial da UniTV com máxima qualidade de imagem e som.',
      },
    ],
    technicalNotes: [
      'Alternativa secundária: caso você já tenha a UniTV instalada no seu celular Android, também é possível espelhar a tela do smartphone para a TV Samsung ou LG, embora o uso de um Fire TV Stick ou TV Box ofereça uma experiência muito mais prática com controle remoto.',
      'Nossa equipe no WhatsApp pode orientar qual dispositivo HDMI tem o melhor custo-benefício para o modelo da sua TV.',
    ],
    whatsappCustomMessage: 'Olá! Tenho uma Smart TV Samsung/LG e gostaria de orientação sobre como usar a UniTV.',
  },
];
