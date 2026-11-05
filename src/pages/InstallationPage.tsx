import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MessageCircle, CheckCircle2, Info, ArrowRight, Download } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DEVICE_GUIDES } from '../data/devicesData';
import { buildWhatsAppUrl } from '../config/siteConfig';

export const InstallationPage: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDeviceParam = searchParams.get('dispositivo');

  const [selectedDeviceId, setSelectedDeviceId] = useState<string>(() => {
    const exists = DEVICE_GUIDES.some((d) => d.id === initialDeviceParam);
    return exists && initialDeviceParam ? initialDeviceParam : DEVICE_GUIDES[0].id;
  });

  useEffect(() => {
    if (initialDeviceParam && DEVICE_GUIDES.some((d) => d.id === initialDeviceParam)) {
      setSelectedDeviceId(initialDeviceParam);
    }
  }, [initialDeviceParam]);

  const activeGuide = DEVICE_GUIDES.find((d) => d.id === selectedDeviceId) || DEVICE_GUIDES[0];

  const handleSelectDevice = (id: string) => {
    setSelectedDeviceId(id);
    setSearchParams({ dispositivo: id });
  };

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Como Instalar', path: '/como-instalar' },
  ];

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Como instalar a UniTV em ${activeGuide.name}`,
    description: activeGuide.summary,
    totalTime: 'PT5M',
    step: activeGuide.steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <>
      <SEOHead
        title="Como Instalar a UniTV — Smart TV, TV Box e Fire Stick"
        description="Tutorial passo a passo para instalar a UniTV na Smart TV Android, Google TV, TV Box, Amazon Fire TV Stick, celular Android e uso em Samsung e LG."
        canonicalPath="/como-instalar"
        breadcrumbs={breadcrumbs}
        schemaData={howToSchema}
      />

      {/* Page Hero */}
      <section className="relative bg-[#030712] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800/90 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-28 right-1/4 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-orange-600/15 via-rose-600/15 to-purple-600/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Central de Instalação Passo a Passo · Tutoriais por Dispositivo
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight">
                Como Instalar a UniTV no seu Aparelho
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Selecione abaixo o seu dispositivo para ver o tutorial detalhado de instalação. Caso precise do
                código atualizado do aplicativo Downloader ou do link direto do APK, chame nossa equipe no WhatsApp.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={getWhatsAppLink('installation')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-600/25 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Pedir Ajuda para Instalar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Device Tutorial Section */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Segmented Selector (Horizontally scrollable on mobile for zero overflow) */}
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Escolha seu aparelho para abrir o tutorial correspondente:
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200/90 overflow-x-auto no-scrollbar max-w-full">
              {DEVICE_GUIDES.map((device) => {
                const isSelected = device.id === selectedDeviceId;
                return (
                  <button
                    key={device.id}
                    type="button"
                    onClick={() => handleSelectDevice(device.id)}
                    className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-[0.98] ${
                      isSelected
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-white/70'
                    }`}
                  >
                    {device.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Device Guide Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Step-by-Step Instructions (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4 overflow-hidden shadow-2xs">
                <div
                  className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold text-orange-600">{activeGuide.compatibilityStatus}</span>
                  <span aria-hidden="true">·</span>
                  <span>Tempo estimado: {activeGuide.estimatedTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>Método: {activeGuide.installationMethod}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                  Tutorial: {activeGuide.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{activeGuide.summary}</p>
              </div>

              {/* Steps List */}
              <div className="space-y-4">
                {activeGuide.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-3 shadow-2xs hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono-tabular text-xs font-extrabold text-white bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 px-2.5 py-1 rounded-lg shrink-0 shadow-xs">
                        PASSO {step.stepNumber}
                      </span>
                      <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-950">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    {step.tip && (
                      <div className="p-3.5 bg-orange-50/60 border border-orange-200/80 rounded-xl flex items-start gap-2.5 text-xs text-slate-800">
                        <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>
                          <strong>Dica técnica:</strong> {step.tip}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Specs & Direct Support Box (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-slate-950">Especificações deste Dispositivo</h3>

                <div className="space-y-3 text-xs">
                  <div className="pb-3 border-b border-slate-200">
                    <div className="text-slate-500 mb-0.5">Marcas e Modelos Comuns:</div>
                    <div className="font-semibold text-slate-900">{activeGuide.brandsExamples.join(', ')}</div>
                  </div>
                  <div className="pb-3 border-b border-slate-200">
                    <div className="text-slate-500 mb-0.5">Sistema Requerido:</div>
                    <div className="font-semibold text-slate-900">{activeGuide.systemRequirement}</div>
                  </div>
                  <div className="pb-3 border-b border-slate-200">
                    <div className="text-slate-500 mb-0.5">Conexão Recomendada:</div>
                    <div className="font-semibold text-slate-900">{activeGuide.minInternetSpeed}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-0.5">Espaço Livre Recomendado:</div>
                    <div className="font-semibold text-slate-900">{activeGuide.recommendedStorage}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 text-white border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold">
                  <Download className="w-4 h-4" />
                  <span>Receba o Código / Link Atualizado</span>
                </div>
                <h3 className="text-lg font-bold">
                  Solicite o código do Downloader ou link direto no WhatsApp
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Para garantir que você instale a versão oficial e mais recente para{' '}
                  <strong>{activeGuide.shortName}</strong>, fale com nosso suporte no WhatsApp.
                </p>
                <a
                  href={buildWhatsAppUrl(config.whatsapp.rawNumber, activeGuide.whatsappCustomMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Solicitar Ajuda para {activeGuide.shortName}</span>
                </a>
              </div>

              {/* Technical Notes */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Recomendações Importantes</h3>
                <ul className="space-y-2.5">
                  {activeGuide.technicalNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Geral de Todos os Tutoriais para Indexação SEO */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-display font-bold text-slate-950 mb-6">
            Artigos Complementares de Instalação e Ativação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/blog/como-instalar-unitv-na-smart-tv"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-500 transition-colors flex items-center justify-between gap-2 text-xs font-semibold text-slate-800"
            >
              <span>Como instalar UniTV na Smart TV</span>
              <ArrowRight className="w-4 h-4 text-orange-600 shrink-0" />
            </Link>
            <Link
              to="/blog/unitv-funciona-em-samsung"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-500 transition-colors flex items-center justify-between gap-2 text-xs font-semibold text-slate-800"
            >
              <span>UniTV funciona em TV Samsung?</span>
              <ArrowRight className="w-4 h-4 text-orange-600 shrink-0" />
            </Link>
            <Link
              to="/blog/unitv-funciona-em-lg"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-500 transition-colors flex items-center justify-between gap-2 text-xs font-semibold text-slate-800"
            >
              <span>UniTV funciona em TV LG?</span>
              <ArrowRight className="w-4 h-4 text-orange-600 shrink-0" />
            </Link>
            <Link
              to="/blog/como-ativar-unitv"
              className="p-4 bg-white border border-slate-200 rounded-xl hover:border-orange-500 transition-colors flex items-center justify-between gap-2 text-xs font-semibold text-slate-800"
            >
              <span>Como ativar código na UniTV</span>
              <ArrowRight className="w-4 h-4 text-orange-600 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
