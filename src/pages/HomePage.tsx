import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Tv,
  Smartphone,
  Cpu,
  Wifi,
  Shield,
  Check,
  ChevronDown,
  ArrowRight,
  Search,
  Lock,
  Layers,
  Play,
} from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { DEVICE_GUIDES } from '../data/devicesData';
import { FAQ_ITEMS } from '../data/faqData';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogArticleVisual } from './BlogIndexPage';
import { CustomerTestimonialsSection } from '../components/CustomerTestimonialsSection';
import { buildWhatsAppUrl } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [previewMode, setPreviewMode] = useState<'tv' | 'mobile'>('tv');

  const homeFaqs = FAQ_ITEMS.slice(0, 6);
  const featuredPosts = BLOG_POSTS.slice(0, 3);

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
      mainEntity: homeFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
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

      {/* 1. HERO SECTION */}
      <section id="sec-hero" className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Subtle brand gradient glow */}
        <div
          className="pointer-events-none absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-orange-600/20 via-pink-600/15 to-blue-600/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Main Value Proposition (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 text-xs text-orange-400 font-medium">
                <span>Portal Comercial Autorizado</span>
                <span aria-hidden="true">·</span>
                <span>Smart TV Android, TV Box, Fire Stick e Celular</span>
              </div>

              <h1
                className="font-display font-extrabold tracking-tight text-white leading-[1.12]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
              >
                Sua central completa de entretenimento na{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">
                  UniTV
                </span>{' '}
                com suporte passo a passo.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Liberamos <strong>Teste Grátis de 3 dias para novos usuários</strong> conhecerem a plataforma!
                Instale no seu aparelho Android compatível, receba seu código de recarga de 16 dígitos na hora e
                conte com acompanhamento humano pelo WhatsApp.
              </p>

              {/* Primary CTA + Secondary Navigation */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={getWhatsAppLink('home')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Solicitar Atendimento no WhatsApp</span>
                </a>

                <Link
                  to="/teste-gratis"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>Teste Grátis de 3 Dias</span>
                  <ArrowRight className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
                </Link>
              </div>

              {/* Unboxed Metadata Highlights */}
              <div className="pt-4 border-t border-slate-800/90 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span>Sem fidelidade ou multa</span>
                <span aria-hidden="true">·</span>
                <span>Ativação por código de 16 dígitos</span>
                <span aria-hidden="true">·</span>
                <span>Guias para Smart TV, TV Box e Fire Stick</span>
              </div>
            </div>

            {/* Right Column: Official Identity & Interactive Device Preview (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
              {/* Interactive Mode Switcher */}
              <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="bg-white p-1.5 rounded-lg shrink-0">
                    <picture>
                      <source srcSet="/assets/images/logo_unitv.webp" type="image/webp" />
                      <img
                        src={config.officialLogoUrl}
                        alt="Logotipo UniTV"
                        width={28}
                        height={28}
                        loading="eager"
                        decoding="async"
                        className="h-7 w-7 object-contain"
                      />
                    </picture>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Interface UniTV</div>
                    <div className="text-xs text-slate-400">Navegação otimizada para TV e Celular</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setPreviewMode('tv')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      previewMode === 'tv'
                        ? 'bg-orange-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Versão TV
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewMode('mobile')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      previewMode === 'mobile'
                        ? 'bg-orange-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Mobile
                  </button>
                </div>
              </div>

              {/* Official App Interface Preview Image (Optimized WebP + Responsive Mobile/Desktop) */}
              <div className="mt-4 relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
                <picture className="block w-full">
                  <source
                    media="(max-width: 640px)"
                    srcSet="/assets/images/previa_interface_unitv_mobile.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/assets/images/previa_interface_unitv.webp"
                    type="image/webp"
                  />
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

              {/* Visual Diagram of the Platform Experience */}
              <div className="mt-4 bg-slate-950 border border-slate-800/90 rounded-xl p-4 space-y-3">
                {previewMode === 'tv' ? (
                  <>
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
                      <span className="font-semibold text-slate-200">
                        Smart TV Android · TV Box · Fire TV Stick
                      </span>
                      <span className="font-mono-tabular text-orange-400">Controle Remoto</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5">
                        <div className="text-xs font-semibold text-white mb-0.5">Categorias</div>
                        <p className="text-[11px] text-slate-400">TV, Filmes, Séries, Kids e Anime</p>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5">
                        <div className="text-xs font-semibold text-white mb-0.5">Busca Global</div>
                        <p className="text-[11px] text-slate-400">Pesquisa instantânea na tela</p>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5">
                        <div className="text-xs font-semibold text-white mb-0.5">Recarga Fácil</div>
                        <p className="text-[11px] text-slate-400">Código de 16 dígitos no perfil</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
                      <span className="font-semibold text-slate-200">
                        Smartphones e Tablets Android (6.0+)
                      </span>
                      <span className="font-mono-tabular text-orange-400">Touchscreen</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5">
                        <div className="text-xs font-semibold text-white mb-0.5">Toque Intuitivo</div>
                        <p className="text-[11px] text-slate-400">Abas Início, TV, Filmes e Perfil no celular</p>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5">
                        <div className="text-xs font-semibold text-white mb-0.5">Conta Vinculada</div>
                        <p className="text-[11px] text-slate-400">Sincronize favoritos e validade no perfil</p>
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-1 flex items-center justify-between text-xs text-slate-400">
                  <span>Conexão recomendada: 15 a 30 Mbps</span>
                  <Link
                    to="/como-instalar"
                    className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Ver tutorial de instalação</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Bottom Trust Footer inside Hero Card */}
              <div className="flex items-center justify-between gap-4 pt-3 text-xs text-slate-400">
                <span>Dúvida se sua TV é compatível?</span>
                <Link
                  to="/dispositivos-compativeis"
                  className="text-white hover:text-orange-400 font-medium underline underline-offset-4"
                >
                  Testar Compatibilidade
                </Link>
              </div>
            </div>
          </div>

          {/* Full-Width 4-Column Information Strip Below Hero Split */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-slate-400 mb-1">01. Compatibilidade</div>
              <div className="text-sm font-bold text-white">Ecossistema Android Nativo</div>
              <p className="text-xs text-slate-400 mt-1">
                Funciona direto em Smart TV Android/Google TV, TV Box, Fire TV Stick e Celular Android.
              </p>
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">02. Novos Usuários</div>
              <div className="text-sm font-bold text-white">Teste Grátis de 3 Dias</div>
              <p className="text-xs text-slate-400 mt-1">
                Liberamos 3 dias grátis para novos usuários avaliarem a plataforma sem cartão de crédito.
              </p>
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">03. Ativação Rápida</div>
              <div className="text-sm font-bold text-white">Código de Recarga 16 Dígitos</div>
              <p className="text-xs text-slate-400 mt-1">
                Renove ou ative seu acesso em menos de 1 minuto diretamente na aba Perfil do app.
              </p>
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">04. Atendimento Humano</div>
              <div className="text-sm font-bold text-white">Suporte via WhatsApp</div>
              <p className="text-xs text-slate-400 mt-1">
                Orientação individual desde o download no Downloader até a confirmação do plano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APRESENTAÇÃO DA UNITV & PRINCIPAIS CARACTERÍSTICAS (Asymmetric Bento Grid) */}
      <section id="sec-recursos" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-orange-600 mb-2">
              Conhecendo a Plataforma · Recursos Confirmados
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              O que é a UniTV e por que ela é referência em praticidade para dispositivos Android?
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              A UniTV foi projetada para eliminar configurações complicadas. Em vez de exigir listas manuais ou
              ajustes técnicos difíceis, o aplicativo oferece uma plataforma pronta para navegar com o controle
              remoto da sua televisão ou na tela do seu smartphone.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Feature 1 (2 cols) */}
            <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tabular font-semibold text-slate-500">
                    01. NAVEGAÇÃO E INTERFACE
                  </span>
                  <Layers className="w-5 h-5 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Duas versões dedicadas: Experiência sob medida para TV e para Celular
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Ao instalar a UniTV, você recebe a versão exata para o seu equipamento. Na Smart TV Android, TV
                  Box e Fire TV Stick, todos os menus respondem perfeitamente às setas direcionais do controle
                  remoto. Já nos celulares e tablets Android, a versão Mobile é totalmente adaptada para gestos e
                  toque na tela.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
                <span>Menu organizado por categorias · Histórico automático · Favoritos salvos na conta</span>
                <Link
                  to="/como-funciona"
                  className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                >
                  <span>Ver detalhes de funcionamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Feature 2 (1 col) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tabular font-semibold text-slate-500">
                    02. CONTROLE PARENTAL
                  </span>
                  <Lock className="w-5 h-5 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Ambiente familiar protegido por senha PIN
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A plataforma conta com sistema de bloqueio por senha numérica integrado, permitindo que os
                  responsáveis restrinjam categorias específicas com total segurança.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200/80 text-xs text-slate-500">
                Configuração simples diretamente nas opções do aplicativo
              </div>
            </div>

            {/* Feature 3 (1 col) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tabular font-semibold text-slate-500">
                    03. BUSCA E IDIOMAS
                  </span>
                  <Search className="w-5 h-5 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Pesquisa rápida e opções de áudio e legenda
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Localize títulos rapidamente digitando apenas as primeiras letras na lupa de pesquisa e alterne
                  facilmente entre opções de áudio dublado ou legendado diretamente no reprodutor.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-200/80 text-xs text-slate-500">
                Ajuste inteligente de resolução conforme sua internet
              </div>
            </div>

            {/* Large Feature 4 (2 cols) */}
            <div className="lg:col-span-2 bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tabular font-semibold text-orange-400">
                    04. CONTA PROTEGIDA E RECARGA PRÉ-PAGA
                  </span>
                  <Shield className="w-5 h-5 text-orange-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Vincule seu e-mail e ative com código de 16 dígitos sem burocracia
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Na UniTV você tem controle total: ao vincular seu e-mail no perfil do aplicativo, seus dias de
                  acesso ficam protegidos na sua conta. Quando quiser renovar, basta adquirir um código de recarga
                  pelo nosso WhatsApp e digitar na tela — sem renovação automática no cartão e sem fidelidade.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Planos de 30, 90, 180 ou 365 dias com envio ágil pelo WhatsApp
                </span>
                <Link
                  to="/blog/unitv-e-bom-conheca-suas-caracteristicas"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
                >
                  <span>Ler análise: UniTV é bom?</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APRESENTAÇÃO DO TESTE GRÁTIS */}
      {config.trial.available && (
        <section id="sec-teste-gratis" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="text-xs font-semibold text-emerald-700">
                    Exclusivo para Novos Usuários · 72 Horas de Acesso · Sem Compromisso
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
                    Teste Grátis de 3 Dias da UniTV para Novos Usuários
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {config.trial.headline}. {config.trial.durationDescription}
                  </p>
                  <ul className="space-y-2.5 pt-1">
                    {config.trial.eligibilityRules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex flex-wrap items-center gap-3.5">
                    <a
                      href={getWhatsAppLink('freeTrial')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Solicitar Orientações de Teste no WhatsApp</span>
                    </a>
                    <Link
                      to="/teste-gratis"
                      className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      <span>Ver página completa sobre o Teste</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    Etapas para avaliar no seu dispositivo:
                  </h3>
                  <div className="space-y-4">
                    {config.trial.stepsToTest.map((step) => (
                      <div key={step.stepNumber} className="flex items-start gap-3.5">
                        <span className="font-mono-tabular text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 rounded-md px-2 py-1 shrink-0">
                          {step.stepNumber}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{step.title}</div>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 leading-relaxed">
                    {config.trial.importantNotice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. APRESENTAÇÃO DOS PLANOS */}
      <section id="planos" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold text-orange-600 mb-2">
                Planos e Condições Comerciais · Sem Fidelidade
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
                Escolha o período ideal para ativar ou renovar sua UniTV
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Acesso pré-pago transparente: você escolhe a duração, recebe seu código de recarga de 16 dígitos e
                conta com nosso suporte via WhatsApp.
              </p>
            </div>
            <Link
              to="/planos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 shrink-0"
            >
              <span>Ver formas de pagamento e comparativo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                  className={`relative rounded-[14px] h-full p-6 flex flex-col justify-between overflow-hidden ${
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
                    {plan.featured && (
                      <div className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400">
                        <span>★ Mais Escolhido · Melhor Custo-Benefício</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                      <span
                        className={
                          plan.featured
                            ? 'text-orange-300 font-semibold'
                            : 'text-slate-600 font-semibold'
                        }
                      >
                        {plan.periodLabel}
                      </span>
                      {plan.savingsLabel && (
                        <span
                          className={
                            plan.featured
                              ? 'text-emerald-400 font-semibold'
                              : 'text-emerald-700 font-semibold'
                          }
                        >
                          {plan.savingsLabel}
                        </span>
                      )}
                    </div>

                    <h3 className={`text-xl font-display font-extrabold ${plan.featured ? 'text-white' : 'text-slate-950'}`}>
                      {plan.name}
                    </h3>

                    <div
                      className={`mt-4 pb-4 border-b ${
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
                      {plan.equivalentMonthly && (
                        <div className={`text-xs mt-1 font-medium ${plan.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                          {plan.equivalentMonthly}
                        </div>
                      )}
                    </div>

                    <p className={`mt-4 text-xs leading-relaxed ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs">
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

                  <div className="mt-8 pt-4 relative z-10">
                    <a
                      href={buildWhatsAppUrl(config.whatsapp.rawNumber, plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap shadow-md active:scale-[0.98] ${
                        plan.featured
                          ? 'bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 hover:from-orange-400 hover:via-rose-400 hover:to-purple-500 text-white shadow-orange-500/25'
                          : 'bg-slate-950 hover:bg-gradient-to-r hover:from-orange-500 hover:via-rose-500 hover:to-purple-600 text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Solicitar {plan.name}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4B. AVALIAÇÕES E FEEDBACK DE CLIENTES (+10 MIL ATENDIDOS) */}
      <CustomerTestimonialsSection showAllByDefault={true} />

      {/* 5. DISPOSITIVOS COMPATÍVEIS */}
      <section id="sec-dispositivos" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-orange-600 mb-2">
              Onde Assistir · Requisitos e Compatibilidade
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              Em quais aparelhos a UniTV funciona?
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Confira os dispositivos compatíveis nativamente com o sistema Android e veja como utilizar também em
              televisores de outros sistemas através de aparelhos HDMI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVICE_GUIDES.map((device) => (
              <div
                key={device.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span>{device.compatibilityStatus}</span>
                    <span>·</span>
                    <span>Instalação: {device.estimatedTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950">{device.name}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{device.summary}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <strong className="text-slate-700 font-semibold">Exemplos:</strong>{' '}
                    {device.brandsExamples.join(', ')}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/como-instalar?dispositivo=${device.id}`}
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                  >
                    <span>Ver passo a passo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={buildWhatsAppUrl(config.whatsapp.rawNumber, device.whatsappCustomMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-600 hover:text-emerald-700"
                  >
                    Pedir ajuda no WhatsApp
                  </a>
                </div>
              </div>
            ))}

            {/* Card extra para Verificador de Compatibilidade */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs text-orange-400 font-semibold mb-2">
                  Verificador Rápido de Aparelhos
                </div>
                <h3 className="text-lg font-bold text-white">
                  Em dúvida se sua Smart TV ou TV Box aceita instalação direta?
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Acesse nossa página de compatibilidade ou fale diretamente com nosso suporte técnico no WhatsApp
                  informando a marca da sua TV.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <Link
                  to="/dispositivos-compativeis"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <span>Abrir Tabela de Compatibilidade</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={getWhatsAppLink('compatibility')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA (4 Etapas) */}
      <section id="sec-como-funciona" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-orange-600 mb-2">
              Fluxo Simples · Do Primeiro Contato à Ativação
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              Como começar a usar a UniTV em 4 passos simples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Chame no WhatsApp',
                desc: 'Clique em qualquer botão de atendimento deste portal para falar com nossa equipe e informar qual é o seu aparelho (Smart TV, TV Box, Fire Stick ou Celular).',
              },
              {
                num: '02',
                title: 'Instale o Aplicativo',
                desc: 'Siga nosso guia passo a passo (via app Downloader ou link direto) para instalar a versão oficial da UniTV em poucos minutos.',
              },
              {
                num: '03',
                title: 'Avalie e Escolha seu Plano',
                desc: 'Verifique a fluidez no seu equipamento e escolha o plano que melhor se adapta à sua rotina: Mensal, Trimestral, Semestral ou Anual.',
              },
              {
                num: '04',
                title: 'Ative seu Código na Hora',
                desc: 'Receba seu código de recarga de 16 dígitos após a confirmação do pagamento e insira na aba Perfil do aplicativo para liberação imediata.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                <div className="text-sm font-mono-tabular font-bold text-orange-600">
                  Etapa {item.num}
                </div>
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PERGUNTAS FREQUENTES (FAQ) */}
      <section id="sec-faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-orange-600 mb-2">
              Dúvidas Frequentes · Respostas Diretas
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
              Perguntas Frequentes sobre a UniTV
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Tire suas principais dúvidas sobre instalação, teste grátis, compatibilidade com Smart TVs e renovação.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                      {faq.relatedLink && (
                        <div className="mt-3">
                          <Link
                            to={faq.relatedLink.path}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700"
                          >
                            <span>{faq.relatedLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/duvidas-frequentes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-orange-600 transition-colors"
            >
              <span>Acessar Central de Ajuda Completa</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. ARTIGOS E TUTORIAIS EM DESTAQUE NO BLOG */}
      <section id="sec-blog" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold text-orange-600 mb-2">
                Conteúdo Informativo · Guias Passo a Passo
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
                Artigos e Tutoriais Recentes do Blog UniTV
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 shrink-0"
            >
              <span>Ver todos os artigos e tutoriais</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <Link to={`/blog/${post.slug}`} className="block mb-4">
                    <BlogArticleVisual post={post} heightClass="h-44" />
                  </Link>
                  {/* Clean unboxed metadata per Zero-Pill rule */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CHAMADA FINAL PARA CONTRATAÇÃO / SUPORTE */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight">
            Pronto para instalar, testar ou ativar sua UniTV hoje mesmo?
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fale diretamente com nossa equipe pelo WhatsApp. Enviamos o guia exato para o seu aparelho, esclarecemos
            todas as suas dúvidas e realizamos a liberação rápida do seu código de recarga.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink('home')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Falar com Atendimento no WhatsApp</span>
            </a>
            <Link
              to="/planos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
            >
              <span>Consultar Planos e Valores</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
