import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Check, ArrowRight, ShieldCheck, HelpCircle, Tv, Smartphone } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const FreeTrialPage: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Teste Grátis UniTV', path: '/teste-gratis' },
  ];

  const trialSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Como funciona o teste grátis da UniTV?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: config.trial.durationDescription,
        },
      },
      {
        '@type': 'Question',
        name: 'Como testar a UniTV grátis na Smart TV ou TV Box?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Basta instalar o aplicativo oficial da UniTV em um dispositivo Android compatível (Smart TV Android, TV Box, Fire TV Stick ou celular Android) que ainda não tenha utilizado o período de degustação inicial.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Teste Grátis UniTV 3 Dias — Smart TV, TV Box e Celular"
        description="Liberamos Teste Grátis de 3 dias da UniTV para novos usuários! Saiba como testar na Smart TV Android, TV Box, Fire Stick e celular pelo WhatsApp."
        canonicalPath="/teste-gratis"
        breadcrumbs={breadcrumbs}
        schemaData={trialSchema}
      />

      {/* Page Hero */}
      <section
        id="teste-condicoes"
        className="relative bg-[#030712] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800/90 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -top-28 right-1/4 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-emerald-600/15 via-orange-600/15 to-purple-600/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                Exclusivo para Novos Usuários · 3 Dias Grátis · Sem Cartão de Crédito
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight">
                UniTV Teste Grátis: Liberamos 3 dias grátis para novos usuários
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Ainda não conhece a UniTV? Liberamos um <strong>Teste Grátis de 3 dias (72 horas)</strong> para novos
                usuários avaliarem a interface, a fluidez de navegação e o desempenho completo da plataforma na sua
                internet antes de escolher um plano.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppLink('freeTrial')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Solicitar Teste Grátis de 3 Dias no WhatsApp</span>
                </a>
                <Link
                  to="/como-instalar"
                  className="min-h-[52px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all active:scale-[0.98]"
                >
                  <span>Ver Tutorial de Instalação</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-500/50 via-orange-500/40 to-purple-600/50 shadow-2xl">
              <div className="bg-slate-950 rounded-[14px] p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" aria-hidden="true" />
                  <div>
                    <h2 className="text-base font-bold text-white">Condições Transparentes de Avaliação</h2>
                    <p className="text-xs text-slate-400">Sem cobrança automática após o período</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {config.trial.eligibilityRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                  {config.trial.importantNotice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona o Teste na Prática */}
      <section id="teste-passo-a-passo" className="py-16 lg:py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
              Como testar a UniTV grátis passo a passo?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              O processo de avaliação é realizado diretamente no aplicativo oficial instalado no seu dispositivo
              Android compatível. Confira as 3 etapas para realizar o teste:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {config.trial.stepsToTest.map((step) => (
              <div
                key={step.stepNumber}
                className="relative bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-2xs hover:shadow-md transition-all overflow-hidden"
              >
                <div
                  className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
                  aria-hidden="true"
                />
                <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200/70 text-xs font-mono-tabular font-bold text-orange-600">
                  ETAPA {step.stepNumber}
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-950">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esclarecimento sobre "UniTV 3 dias grátis" e Teste de Primeiro Acesso */}
      <section id="teste-esclarecimento" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-semibold text-orange-600">
                Esclarecimento Técnico · Dúvidas Comuns
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
                Entenda como funciona a liberação de teste em novos aparelhos (Teste de Primeiro Acesso e Vinculação)
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Muitos usuários pesquisam por termos como <strong>"UniTV teste grátis"</strong> ou{' '}
                <strong>"UniTV 3 dias grátis"</strong>. É importante explicar com total honestidade comercial como o
                sistema oficial da UniTV gerencia essa avaliação:
              </p>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>1. Identificação automática do aparelho novo:</strong> Quando o aplicativo UniTV é
                  instalado pela primeira vez em uma Smart TV Android, TV Box, Fire TV Stick ou smartphone que nunca
                  teve o aplicativo registrado antes, o servidor da plataforma identifica o novo dispositivo e pode
                  conceder automaticamente o período de degustação de boas-vindas, além de bônus adicionais ao
                  vincular uma conta de e-mail pela primeira vez no menu Perfil.
                </p>
                <p>
                  <strong>2. Aparelhos que já utilizaram o teste anteriormente:</strong> Como a degustação inicial
                  fica vinculada ao endereço físico (ID/MAC) do aparelho, reinstalar o aplicativo ou criar outro
                  e-mail no mesmo equipamento que já utilizou o período gratuito não gera um novo teste automático.
                  Para esses casos, recomendamos o{' '}
                  <Link to="/planos" className="text-orange-600 font-semibold underline">
                    Plano Mensal de 30 dias
                  </Link>{' '}
                  como opção acessível e sem fidelidade.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-950">
                  Em quais aparelhos posso fazer o teste?
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <Tv className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-slate-900">Na Televisão:</strong> Smart TVs com Android TV ou Google
                      TV (TCL, Sony, Philips, Philco, AOC), qualquer TV Box Android e Amazon Fire TV Stick.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-slate-900">No Celular ou Tablet:</strong> Smartphones e tablets com
                      sistema Android 6.0 ou superior usando a versão Mobile da UniTV.
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <Link
                    to="/dispositivos-compativeis"
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                  >
                    <span>Conferir lista completa de compatibilidade</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <HelpCircle className="w-4 h-4" />
                  <span>Suporte Direto pelo WhatsApp</span>
                </div>
                <h3 className="text-base font-bold">
                  Fale conosco para receber o link e código de instalação do aplicativo
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nossa equipe orienta gratuitamente como baixar o aplicativo correto no seu aparelho para você
                  verificar seu teste ou ativar seu acesso.
                </p>
                <a
                  href={getWhatsAppLink('freeTrial')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Chamar no WhatsApp Agora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
