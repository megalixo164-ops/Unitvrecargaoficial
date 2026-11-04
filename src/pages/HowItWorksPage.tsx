import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Tv, Key, CheckCircle2, Smartphone, Shield } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const HowItWorksPage: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Como Funciona', path: '/como-funciona' },
  ];

  const howItWorksSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como funciona, como adquirir e ativar a UniTV',
    description:
      'Guia passo a passo explicando o que é a UniTV, como instalar no sistema Android, como adquirir um plano e como ativar o código de recarga.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Verifique seu dispositivo Android e internet',
        text: 'Certifique-se de possuir uma Smart TV Android/Google TV, TV Box, Amazon Fire TV Stick ou smartphone Android conectado à internet banda larga.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Instale o aplicativo oficial UniTV',
        text: 'Baixe a versão dedicada para TV ou Mobile seguindo nosso guia de instalação ou auxílio no WhatsApp.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Adquira e ative seu código de 16 dígitos',
        text: 'Escolha seu plano (Mensal, Trimestral, Semestral ou Anual) pelo WhatsApp e insira o código de recarga na aba Perfil do aplicativo.',
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Como Funciona a UniTV — O que é, Como Adquirir, Ativar e Utilizar"
        description="Entenda detalhadamente o que é a UniTV, como funciona a tecnologia via internet em aparelhos Android, como adquirir seu plano, ativar o código e utilizar."
        canonicalPath="/como-funciona"
        breadcrumbs={breadcrumbs}
        schemaData={howItWorksSchema}
      />

      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-orange-400">
              Guia Explicativo Completo · Da Instalação ao Uso Diário
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Como Funciona a UniTV: O que é, como adquirir, ativar e utilizar
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tudo o que você precisa saber sobre a plataforma UniTV explicado de forma clara, técnica e objetiva
              para tirar suas dúvidas antes de instalar ou contratar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section 1: O que é UniTV & Como funciona */}
          <div id="cf-tecnologia" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono-tabular font-bold text-orange-600">
                01. O QUE É E COMO FUNCIONA
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                O que é a UniTV e qual sua tecnologia de funcionamento?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                A UniTV é uma aplicação multimídia projetada nativamente para o sistema operacional Android (presente
                em Smart TVs Android TV/Google TV, aparelhos TV Box, Amazon Fire TV Stick e celulares Android).
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Seu funcionamento dispensa antenas externas, cabos coaxiais ou visitas técnicas: toda a comunicação
                é realizada pela sua conexão de internet doméstica (Wi-Fi ou cabo de rede) ou dados móveis 4G/5G no
                smartphone. O aplicativo organiza todo o catálogo em categorias intuitivas, com sistema de busca por
                nome, lista de favoritos e ajuste inteligente de resolução.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900">Requisitos técnicos básicos:</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Aparelho compatível:</strong> Smart TV Android/Google TV, TV Box, Fire TV Stick ou
                    Celular Android.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Velocidade de internet:</strong> Mínimo de 15 Mbps (recomendado 30 Mbps+ para alta
                    definição e 4K).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Espaço livre:</strong> Cerca de 150 MB disponíveis na memória interna do dispositivo.
                  </span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/dispositivos-compativeis"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                >
                  <span>Consultar compatibilidade por marca de TV</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Section 2: Como Adquirir, Ativar e Utilizar */}
          <div id="cf-etapas" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tabular font-bold text-orange-600">02. COMO ADQUIRIR</span>
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Aquisição segura e sem fidelidade</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Para adquirir a UniTV, você escolhe o plano desejado (Mensal de 30 dias, Trimestral de 90 dias,
                Semestral de 180 dias ou Anual de 365 dias) diretamente com nosso atendimento autorizado no WhatsApp.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Por funcionar no sistema pré-pago, você paga apenas pelo período escolhido via Pix ou cartão, sem
                fidelidade e sem renovações automáticas indesejadas.
              </p>
              <Link
                to="/planos"
                className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 pt-2"
              >
                <span>Ver Planos e Preços</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tabular font-bold text-orange-600">03. COMO ATIVAR</span>
                <Key className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Ativação imediata por código ou conta</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Após a confirmação do seu pedido no WhatsApp, você recebe seu Código de Recarga de 16 dígitos.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Com o aplicativo UniTV aberto na sua TV ou celular, basta acessar a aba <strong>Perfil</strong>,
                clicar em <strong>Código de Recarga</strong>, digitar os 16 números e confirmar. O tempo contratado é
                liberado instantaneamente na sua tela.
              </p>
              <Link
                to="/blog/como-ativar-unitv"
                className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 pt-2"
              >
                <span>Ver passo a passo de ativação</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tabular font-bold text-orange-600">04. COMO UTILIZAR</span>
                <Tv className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Uso simples no dia a dia</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No uso diário, recomendamos vincular um endereço de e-mail e senha dentro da aba Perfil do
                aplicativo. Assim, sua conta fica salva na nuvem da UniTV.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Você pode navegar pelas categorias usando o controle remoto da TV, salvar seus conteúdos favoritos,
                configurar senha de Controle Parental e consultar quantos dias restam no seu plano a qualquer
                momento.
              </p>
              <Link
                to="/como-instalar"
                className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 pt-2"
              >
                <span>Ver tutoriais de instalação</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl font-display font-bold">
                Restou alguma dúvida sobre como a UniTV funciona no seu aparelho?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nossa equipe atende todos os dias pelo WhatsApp para orientar a instalação e explicar todos os
                detalhes de funcionamento.
              </p>
            </div>
            <a
              href={getWhatsAppLink('howItWorks')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Tirar Dúvidas no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
