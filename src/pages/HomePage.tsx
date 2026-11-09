import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Check,
  ChevronDown,
  ArrowRight,
  Tv,
  Smartphone,
  Gift,
  HelpCircle,
  BookOpen,
  Layers,
  ShieldCheck,
  Zap,
  Wifi,
  Lock,
  Download,
} from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { FAQ_ITEMS } from '../data/faqData';
import { CustomerTestimonialsSection } from '../components/CustomerTestimonialsSection';
import { buildWhatsAppUrl } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const salesFaqs = FAQ_ITEMS.slice(0, 5);

  const annualPlan = config.plans.find((p) => p.id === 'anual') || config.plans[3];
  const monthlyPlan = config.plans.find((p) => p.id === 'mensal') || config.plans[0];
  const quarterlyPlan = config.plans.find((p) => p.id === 'trimestral') || config.plans[1];

  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UniTV',
      operatingSystem: 'Android TV, Google TV, Fire OS, Android 5.0+',
      applicationCategory: 'MultimediaApplication',
      description:
        'Plataforma digital de entretenimento para Smart TVs Android, TV Box, Amazon Fire TV Stick e dispositivos móveis Android.',
      offers: config.plans.map((plan) => ({
        '@type': 'Offer',
        name: plan.name,
        price: plan.price.replace(/[^\d,]/g, '').replace(',', '.'),
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: salesFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  const quickInstallDevices = [
    {
      title: 'TV Box Android',
      subtitle: 'Instalação rápida via Downloader ou USB',
      path: '/como-instalar?dispositivo=tv-box',
      icon: Layers,
    },
    {
      title: 'Smart TV Android / Google TV',
      subtitle: 'TCL, Philips, Philco, Sony e AOC',
      path: '/como-instalar?dispositivo=smart-tv-android',
      icon: Tv,
    },
    {
      title: 'Amazon Fire TV Stick',
      subtitle: 'Código direto no app Downloader',
      path: '/como-instalar?dispositivo=fire-tv-stick',
      icon: Zap,
    },
    {
      title: 'Celular e Tablet Android',
      subtitle: 'App Mobile APK + permissões simples',
      path: '/como-instalar?dispositivo=celular-android',
      icon: Smartphone,
    },
  ];

  const usageProTips = [
    {
      kicker: 'Antes de Ativar',
      title: 'Vincular Conta no App UniTV',
      description:
        'Essencial ao criar seu acesso ou ativar seu código de recarga UniTV. Vincular seu e-mail ou número no menu Perfil garante a segurança da sua assinatura caso troque ou formate o aparelho.',
      linkPath: '/blog/como-ativar-unitv',
      linkLabel: 'Ver como vincular e ativar',
      icon: Lock,
    },
    {
      kicker: 'Estabilidade Máxima',
      title: 'Melhore a Conexão na TV Box e Smart TV',
      description:
        'Para assistir canais ao vivo e conteúdos em Alta Definição (HD/FHD/4K) sem travamentos, prefira conectar sua TV Box ou Smart TV via cabo de rede (Ethernet) ou Wi-Fi 5GHz com pelo menos 15 Mbps.',
      linkPath: '/como-funciona',
      linkLabel: 'Ver requisitos de conexão',
      icon: Wifi,
    },
    {
      kicker: 'Dispositivo Ideal',
      title: 'Qual Aparelho Usar com a UniTV?',
      description:
        'O aplicativo oficial roda de forma nativa em qualquer TV Box Android, Smart TV Android, Fire TV Stick e Celular Android. Tem TV Samsung ou LG? Basta conectar um Fire Stick ou TV Box na porta HDMI.',
      linkPath: '/dispositivos-compativeis',
      linkLabel: 'Consultar aparelhos compatíveis',
      icon: Tv,
    },
  ];

  const topicHubCards = [
    {
      title: 'Como Instalar no seu Aparelho',
      description: 'Passo a passo rápido para Smart TV Android, TV Box, Fire TV Stick e Celular.',
      path: '/como-instalar',
      linkText: 'Abrir Guia de Instalação',
      icon: Tv,
    },
    {
      title: 'Aparelhos e TVs Compatíveis',
      description: 'Consulte se sua TV aceita instalação direta ou como usar em Samsung e LG.',
      path: '/dispositivos-compativeis',
      linkText: 'Verificar Compatibilidade',
      icon: Smartphone,
    },
    {
      title: 'Como Funciona a UniTV',
      description: 'Entenda a plataforma, velocidade de internet e ativação por código de 16 dígitos.',
      path: '/como-funciona',
      linkText: 'Ver Como Funciona',
      icon: Layers,
    },
    {
      title: 'Teste Grátis de 3 Dias',
      description: 'Regras de elegibilidade e como liberar 72 horas grátis para novos usuários.',
      path: '/teste-gratis',
      linkText: 'Detalhes do Teste Grátis',
      icon: Gift,
    },
    {
      title: 'Dúvidas Frequentes (FAQ)',
      description: 'Respostas diretas sobre recarga, renovação, pagamento via Pix e suporte.',
      path: '/duvidas-frequentes',
      linkText: 'Abrir Central de Ajuda',
      icon: HelpCircle,
    },
    {
      title: 'Blog e Tutoriais UniTV',
      description: 'Artigos práticos, dicas de configuração e análises completas da plataforma.',
      path: '/blog',
      linkText: 'Acessar Artigos do Blog',
      icon: BookOpen,
    },
  ];

  return (
    <>
      <SEOHead
        title="UniTV — Teste Grátis 3 Dias, Planos e Instalação"
        description="Portal comercial autorizado UniTV. Teste grátis de 3 dias para novos usuários, planos a partir de R$ 29,90, instalação passo a passo e suporte no WhatsApp."
        canonicalPath="/"
        schemaData={homeSchema}
      />

      {/* 1. HERO DE VENDAS DIRETO COM ATALHOS DE OFERTA E 3 PILARES DE CONFIANÇA */}
      <section
        id="sec-hero"
        className="relative bg-[#030712] text-white overflow-hidden border-b border-slate-800/90"
      >
        <div
          className="pointer-events-none absolute -top-36 right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-orange-600/20 via-rose-600/15 to-purple-600/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-14 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Direct Sales Pitch + Plan Shortcuts (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="text-orange-400">Aplicativo UniTV Oficial</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-emerald-400">Código Entregue na Hora após o PIX</span>
              </div>

              <h1
                className="font-display font-extrabold tracking-tight text-white leading-[1.11]"
                style={{ fontSize: 'clamp(1.95rem, 4.1vw, 3.25rem)' }}
              >
                UniTV com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400">
                  suporte humanizado
                </span>{' '}
                e ajuda especializada na ativação.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Garanta sua assinatura UniTV com código de 16 dígitos enviado na hora pelo WhatsApp, ou peça seu{' '}
                <strong className="text-white">Teste Grátis de 3 Dias</strong> (para novos usuários) com auxílio passo a
                passo para configurar na sua TV, TV Box ou Celular.
              </p>

              {/* Main Sales Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={getWhatsAppLink('freeTrial')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[54px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Pedir Teste Grátis de 3 Dias</span>
                </a>

                <a
                  href={buildWhatsAppUrl(config.whatsapp.rawNumber, annualPlan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[54px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 hover:from-orange-400 hover:via-rose-400 hover:to-purple-500 rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]"
                >
                  <span>Comprar Anual + Suporte VIP</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              {/* Quick Plan Offer Buttons (Inspired by reference site) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                <a
                  href={buildWhatsAppUrl(config.whatsapp.rawNumber, monthlyPlan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 hover:border-orange-500/60 text-xs font-bold text-slate-200 inline-flex items-center gap-1.5 transition-all active:scale-[0.98]"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-400" aria-hidden="true" />
                  <span>Comprar Mensal ({monthlyPlan.price}) + Ajuda</span>
                </a>

                <a
                  href={buildWhatsAppUrl(config.whatsapp.rawNumber, quarterlyPlan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 hover:border-orange-500/60 text-xs font-bold text-slate-200 inline-flex items-center gap-1.5 transition-all active:scale-[0.98]"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-400" aria-hidden="true" />
                  <span>Comprar Trimestral ({quarterlyPlan.price}) + Suporte</span>
                </a>

                <a
                  href="#planos"
                  className="min-h-[40px] px-3.5 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-orange-400 inline-flex items-center gap-1 transition-all"
                >
                  <span>Comparar todos os planos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 3 Pillar Cards inside Hero (Suporte Humanizado, Guia de Instalação, Acesso Protegido) */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-3.5 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                    Pagamento &amp; PIX
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Suporte Humanizado</div>
                  <div className="text-xs text-slate-400 leading-snug">
                    Atendimento completo via WhatsApp com entrega na hora
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-3.5 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    Código UniTV
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Guia de Instalação</div>
                  <div className="text-xs text-slate-400 leading-snug">
                    Auxílio passo a passo para configurar na TV ou Celular
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-slate-800/90 rounded-xl p-3.5 space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Assinatura UniTV
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">Conta Vinculada</div>
                  <div className="text-xs text-slate-400 leading-snug">
                    Segurança total da sua recarga e renovação cumulativa
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Official App Interface Preview (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 shadow-2xl">
                <div className="bg-slate-950 rounded-[14px] p-3.5 sm:p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2 px-1">
                    <div className="flex items-center gap-2">
                      <picture className="shrink-0 bg-white p-1 rounded-md">
                        <source srcSet="/assets/images/logo_unitv.webp" type="image/webp" />
                        <img
                          src={config.officialLogoUrl}
                          alt="Logotipo UniTV"
                          width={22}
                          height={22}
                          loading="eager"
                          decoding="async"
                          className="h-5 w-5 object-contain"
                        />
                      </picture>
                      <span className="text-xs sm:text-sm font-bold text-white">Prévia do App Oficial UniTV</span>
                    </div>
                    <span className="text-[11px] font-semibold text-orange-400">TV · TV Box · Celular</span>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <picture className="block w-full">
                      <source
                        media="(max-width: 640px)"
                        srcSet="/assets/images/previa_interface_unitv_mobile.webp"
                        type="image/webp"
                      />
                      <source srcSet="/assets/images/previa_interface_unitv.webp" type="image/webp" />
                      <img
                        src="/assets/aistudio/Pr_via_Neon_do_App_UniTV_71255ce8.png"
                        alt="Prévia oficial da interface do aplicativo UniTV na Smart TV, TV Box e no Celular Android"
                        width={1200}
                        height={794}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="w-full h-auto object-cover block"
                      />
                    </picture>
                  </div>

                  <div className="flex items-center justify-between px-1 text-xs text-slate-400">
                    <span>Canais SD/HD/FHD/4K, Filmes, Séries e Kids</span>
                    <Link
                      to="/como-instalar"
                      className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1"
                    >
                      <span>Baixar App</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLANOS E PREÇOS - VITRINE DE RECARGA OFICIAL COM LOGO E DUPLO BOTÃO */}
      <section id="planos" className="py-14 lg:py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              UniTV Planos e Preços · Recarga Oficial de 16 Dígitos
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              Compare os Planos e Escolha sua Recarga UniTV
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600">
              Planos pré-pagos sem fidelidade com entrega imediata via PIX e suporte passo a passo no WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {config.plans.map((plan) => (
              <div
                key={plan.id}
                className={`group relative rounded-2xl transition-all duration-300 flex flex-col ${
                  plan.featured
                    ? 'p-[2px] bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 shadow-2xl shadow-orange-500/20 lg:-translate-y-2'
                    : 'p-[1.5px] bg-gradient-to-br from-orange-500/40 via-rose-500/35 to-purple-600/40 hover:from-orange-500 hover:via-rose-500 hover:to-purple-600 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div
                  className={`relative rounded-[14px] h-full p-5 sm:p-6 flex flex-col justify-between overflow-hidden ${
                    plan.featured ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
                  }`}
                >
                  {/* Top UniTV Logo Gradient Bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
                    aria-hidden="true"
                  />

                  {/* Subtle ambient logo glow inside card */}
                  <div
                    className={`pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br from-orange-500/20 via-rose-500/15 to-purple-600/20 blur-2xl ${
                      plan.featured ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                    } transition-opacity`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Official Voucher Header with Logo Icon */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <picture className="shrink-0 bg-white p-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                          <source srcSet="/assets/images/logo_unitv.webp" type="image/webp" />
                          <img
                            src={config.officialLogoUrl}
                            alt="UniTV"
                            width={28}
                            height={28}
                            loading="lazy"
                            decoding="async"
                            className="h-6 w-6 object-contain"
                          />
                        </picture>
                        <div>
                          <h3
                            className={`text-base sm:text-lg font-display font-extrabold leading-tight ${
                              plan.featured ? 'text-white' : 'text-slate-950'
                            }`}
                          >
                            {plan.name}
                          </h3>
                          <div
                            className={`text-[11px] font-medium ${
                              plan.featured ? 'text-orange-300' : 'text-slate-500'
                            }`}
                          >
                            Assinatura por {plan.periodLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {plan.featured ? (
                      <div className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400">
                        <span>★ Mais Escolhido · Melhor Custo</span>
                      </div>
                    ) : (
                      plan.savingsLabel && (
                        <div className="mb-3 text-[11px] font-bold text-emerald-700">
                          {plan.savingsLabel}
                        </div>
                      )
                    )}

                    <div
                      className={`mt-1 pb-4 border-b ${
                        plan.featured ? 'border-slate-800' : 'border-slate-200'
                      }`}
                    >
                      <div
                        className={`text-3xl sm:text-4xl font-extrabold font-mono-tabular tracking-tight ${
                          plan.featured
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-200'
                            : 'text-slate-950'
                        }`}
                      >
                        {plan.price}
                      </div>
                      {plan.equivalentMonthly ? (
                        <div className={`text-xs mt-1 font-medium ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                          {plan.equivalentMonthly}
                        </div>
                      ) : (
                        <div className={`text-xs mt-1 font-medium ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                          Plano flexível sem fidelidade
                        </div>
                      )}
                    </div>

                    <p className={`mt-3.5 text-xs leading-relaxed ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <span
                            className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                            aria-hidden="true"
                          >
                            <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </span>
                          <span className={plan.featured ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dual-Action Conversion Footer (Buy + Ask Questions before buying) */}
                  <div className="mt-6 pt-4 space-y-2.5 relative z-10">
                    <a
                      href={buildWhatsAppUrl(config.whatsapp.rawNumber, plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap shadow-md active:scale-[0.98] ${
                        plan.featured
                          ? 'bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 hover:from-orange-400 hover:via-rose-400 hover:to-purple-500 text-white shadow-orange-500/25'
                          : 'bg-slate-950 hover:bg-gradient-to-r hover:from-orange-500 hover:via-rose-500 hover:to-purple-600 text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Comprar {plan.name}</span>
                    </a>

                    <p
                      className={`text-center text-[11px] leading-snug ${
                        plan.featured ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      Código enviado na hora pelo WhatsApp após o PIX.
                    </p>

                    <a
                      href="#sec-faq"
                      className={`w-full min-h-[40px] inline-flex items-center justify-center px-3 py-2 text-xs font-semibold rounded-xl border transition-colors ${
                        plan.featured
                          ? 'border-slate-800 bg-slate-900/70 text-slate-300 hover:bg-slate-900 hover:text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                      }`}
                    >
                      Tirar dúvidas antes de comprar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fast Trial Callout Strip right under Plans */}
          <div
            id="sec-teste-gratis"
            className="mt-10 rounded-2xl p-[1.5px] bg-gradient-to-r from-emerald-500/60 via-orange-500/50 to-purple-600/60 shadow-md"
          >
            <div className="bg-slate-950 text-white rounded-[14px] p-5 sm:p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Quer testar antes de comprar sua recarga?
                </div>
                <h3 className="text-lg sm:text-xl font-display font-extrabold">
                  Liberamos 3 Dias de Teste Grátis para Novos Usuários
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Instale na sua Smart TV Android, TV Box, Fire TV Stick ou Celular Android e teste por 72 horas sem
                  compromisso e sem precisar de cartão de crédito.
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href={getWhatsAppLink('freeTrial')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-xl inline-flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Solicitar Teste Grátis no WhatsApp</span>
                </a>
                <Link
                  to="/teste-gratis"
                  className="min-h-[48px] px-4 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl inline-flex items-center justify-center gap-1.5 active:scale-[0.98]"
                >
                  <span>Regras do teste</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMO COMPRAR E ATIVAR SUA RECARGA UNITV — PASSO A PASSO EM 4 ETAPAS */}
      <section id="sec-como-funciona" className="py-14 lg:py-18 bg-slate-50/80 border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              Fluxo Rápido · Do PIX até o Código de 16 Dígitos
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
              Como Comprar e Ativar sua Recarga UniTV
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Comprar sua assinatura ou recarga UniTV oficial é simples, seguro e acompanhado no WhatsApp:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-2xs overflow-hidden">
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
                aria-hidden="true"
              />
              <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200/70 text-xs font-mono-tabular font-bold text-orange-600">
                PASSO 01
              </div>
              <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                Escolha seu Plano UniTV
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Veja os planos UniTV:{' '}
                <a href="#planos" className="font-bold text-orange-600 hover:underline">
                  Mensal ({monthlyPlan.price})
                </a>
                ,{' '}
                <a href="#planos" className="font-bold text-orange-600 hover:underline">
                  Trimestral ({quarterlyPlan.price})
                </a>{' '}
                ou{' '}
                <a href="#planos" className="font-bold text-orange-600 hover:underline">
                  Anual ({annualPlan.price})
                </a>
                , ou peça seu teste grátis de 3 dias.
              </p>
            </div>

            <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-2xs overflow-hidden">
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
                aria-hidden="true"
              />
              <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200/70 text-xs font-mono-tabular font-bold text-orange-600">
                PASSO 02
              </div>
              <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                Pague via PIX com Segurança
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comprar recarga UniTV via PIX é imediato. A confirmação do pagamento acontece em poucos instantes direto
                no atendimento.
              </p>
            </div>

            <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-2xs overflow-hidden">
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
                aria-hidden="true"
              />
              <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200/70 text-xs font-mono-tabular font-bold text-orange-600">
                PASSO 03
              </div>
              <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                Código UniTV na Hora
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Assim que confirmado, você recebe imediatamente no WhatsApp seu código oficial de recarga de 16 dígitos
                pronto para uso.
              </p>
            </div>

            <div className="relative bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-2xs overflow-hidden">
              <div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
                aria-hidden="true"
              />
              <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-200/70 text-xs font-mono-tabular font-bold text-orange-600">
                PASSO 04
              </div>
              <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                Ative e Vincule sua Conta
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Abra o app UniTV em <strong>Perfil &gt; Código de Recarga</strong>, digite os 16 números, vincule sua
                conta e aproveite todo o catálogo!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOWNLOAD E INSTALAÇÃO RÁPIDA POR APARELHO + DICAS DE USO */}
      <section id="sec-instalacao-rapida" className="py-14 lg:py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Quick Device Selector */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                  UniTV Download e Instalação Rápida
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
                  Em qual aparelho você vai instalar a UniTV?
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                  Clique no seu dispositivo para abrir o passo a passo de instalação e baixar o aplicativo oficial:
                </p>
              </div>
              <Link
                to="/como-instalar"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Ver guia completo de instalação</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickInstallDevices.map((dev) => {
                const DevIcon = dev.icon;
                return (
                  <Link
                    key={dev.title}
                    to={dev.path}
                    className="group bg-slate-950 hover:bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 hover:border-orange-500/70 transition-all flex items-start justify-between gap-3 shadow-sm active:scale-[0.99]"
                  >
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-xs">
                        <DevIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-display font-extrabold text-white group-hover:text-orange-400 transition-colors">
                        {dev.title}
                      </h3>
                      <p className="text-xs text-slate-400">{dev.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </Link>
                );
              })}
            </div>

            {/* Connection Tip Bar */}
            <div className="mt-4 bg-orange-50/70 border border-orange-200/80 rounded-xl px-4 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-orange-600 shrink-0" />
                <span>
                  <strong className="text-slate-950">Dica rápida de estabilidade:</strong> Para melhor qualidade na TV
                  Box ou Smart TV, use internet via cabo de rede (Ethernet) ou Wi-Fi 5GHz com pelo menos 15 Mbps
                  estáveis.
                </span>
              </div>
              <a
                href="#planos"
                className="font-bold text-orange-600 hover:text-orange-700 shrink-0 inline-flex items-center gap-1"
              >
                <span>Escolher plano</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 3 Pro Tips Cards (Vincular Conta, Estabilidade TV Box, Aparelho Recomendado) */}
          <div id="sec-dicas-uso" className="pt-4 border-t border-slate-200/80">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                Dicas Essenciais para Usar sua Assinatura UniTV
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950 tracking-tight">
                Prepare seu aparelho e proteja seu código de recarga
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {usageProTips.map((tip) => {
                const TipIcon = tip.icon;
                return (
                  <div
                    key={tip.title}
                    className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
                          {tip.kicker}
                        </span>
                        <TipIcon className="w-4 h-4 text-slate-400" />
                      </div>
                      <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                        {tip.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tip.description}</p>
                    </div>
                    <Link
                      to={tip.linkPath}
                      className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 pt-2 border-t border-slate-200/70"
                    >
                      <span>{tip.linkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL ENXUTA (+10 MIL CLIENTES ATENDIDOS) */}
      <CustomerTestimonialsSection showAllByDefault={false} />

      {/* 6. NAVEGAÇÃO POR TÓPICOS (TUDO ORGANIZADO EM SUAS PÁGINAS) */}
      <section id="sec-topicos" className="py-14 lg:py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              Central Completa do Portal
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
              Mais informações organizadas por tópico
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Acesse diretamente qualquer seção do portal para consultar tutoriais detalhados, regras e artigos:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {topicHubCards.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group bg-slate-50/90 hover:bg-white border border-slate-200/90 hover:border-orange-500/60 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all active:scale-[0.99]"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-xs">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/70 inline-flex items-center justify-between text-xs font-bold text-orange-600">
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Guias sobre Recarga e Instalação UniTV (Atalhos Rápidos de Conteúdo e Conversão) */}
          <div className="mt-10 pt-8 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                  Guias Práticos sobre Recarga, Código de 16 Dígitos e Instalação UniTV
                </h3>
                <p className="text-xs text-slate-600">
                  Conteúdos rápidos para escolher o plano, pagar via PIX, receber e ativar seu código no aplicativo:
                </p>
              </div>
              <Link
                to="/blog"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 shrink-0"
              >
                <span>Ver todos os guias</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {[
                { label: 'UniTV ou IPTV / OpTV: qual vale mais a pena?', path: '/blog/unitv-ou-iptv-qual-melhor-para-assinar' },
                { label: 'Código Downloader UniTV atualizado + APK', path: '/blog/codigo-downloader-unitv-atualizado-apk' },
                { label: 'Qual o melhor plano UniTV (Mensal ou Anual)', path: '/blog/qual-o-melhor-plano-unitv' },
                { label: 'UniTV no Celular Android + Vincular Conta', path: '/blog/como-instalar-unitv-no-celular' },
                { label: 'Como usar a UniTV sem travar na TV Box', path: '/blog/como-assistir-unitv-sem-travar-tv-box' },
                { label: 'Como ativar código de 16 dígitos UniTV', path: '/blog/como-ativar-unitv' },
                { label: 'Como conseguir Teste Grátis de 3 Dias', path: '/blog/como-conseguir-teste-gratis-da-unitv' },
                { label: 'Como instalar UniTV na Smart TV Android', path: '/blog/como-instalar-unitv-na-smart-tv' },
              ].map((guide) => (
                <Link
                  key={guide.path}
                  to={guide.path}
                  className="min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-orange-50/70 border border-slate-200/80 hover:border-orange-300 text-xs font-semibold text-slate-700 hover:text-slate-950 flex items-center justify-between gap-2 transition-colors"
                >
                  <span className="truncate">{guide.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DÚVIDAS RÁPIDAS ANTES DE ASSINAR */}
      <section id="sec-faq" className="py-14 lg:py-20 bg-slate-50/70 border-b border-slate-200/90">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              Dúvidas sobre Recarga e Assinatura UniTV
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
              Perguntas Frequentes Antes de Comprar
            </h2>
          </div>

          <div className="space-y-3">
            {salesFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl overflow-hidden transition-all border ${
                    isOpen
                      ? 'bg-white border-orange-500/60 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/duvidas-frequentes"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 py-2 px-4"
            >
              <span>Ver todas as perguntas frequentes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CHAMADA FINAL COM BOTÕES DIRETOS POR PLANO (ESTILO CHECKOUT RÁPIDO) */}
      <section className="relative py-14 lg:py-20 bg-[#030712] text-white overflow-hidden">
        <div
          className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[520px] h-[260px] rounded-full bg-gradient-to-r from-orange-500/20 via-rose-500/15 to-purple-600/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Comprar Recarga UniTV Oficial · Ativação na Hora via PIX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight leading-tight">
            Escolha seu plano ou peça seu Teste Grátis de 3 Dias agora mesmo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Receba seu código oficial de 16 dígitos imediatamente no WhatsApp após a confirmação do PIX, com suporte
            humano para instalar e ativar.
          </p>

          {/* Direct Plan Checkout Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a
              href={getWhatsAppLink('freeTrial')}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Pedir Teste Grátis 3 Dias</span>
            </a>

            <a
              href={buildWhatsAppUrl(config.whatsapp.rawNumber, monthlyPlan.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-orange-500/60 rounded-xl transition-all active:scale-[0.98]"
            >
              <span>Recarga Mensal ({monthlyPlan.price})</span>
            </a>

            <a
              href={buildWhatsAppUrl(config.whatsapp.rawNumber, quarterlyPlan.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-orange-500/60 rounded-xl transition-all active:scale-[0.98]"
            >
              <span>Recarga Trimestral ({quarterlyPlan.price})</span>
            </a>

            <a
              href={buildWhatsAppUrl(config.whatsapp.rawNumber, annualPlan.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 hover:from-orange-400 hover:via-rose-400 hover:to-purple-500 rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]"
            >
              <span>Recarga Anual ({annualPlan.price})</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-1">
            Precisa renovar sua assinatura UniTV ou tirar dúvidas antes de comprar?{' '}
            <Link to="/duvidas-frequentes" className="text-orange-400 hover:text-orange-300 font-semibold underline">
              Consulte nossas perguntas frequentes
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
};
