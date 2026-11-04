import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Check, AlertCircle, ArrowRight, Search } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DEVICE_GUIDES } from '../data/devicesData';

interface BrandCheckerOption {
  id: string;
  label: string;
  system: string;
  compatibleDirect: boolean;
  recommendation: string;
  tutorialDeviceId: string;
}

const BRAND_CHECKER_OPTIONS: BrandCheckerOption[] = [
  {
    id: 'tcl-sony-philips',
    label: 'Smart TV TCL, Sony ou Philips (com Google Play Store)',
    system: 'Android TV / Google TV',
    compatibleDirect: true,
    recommendation:
      'Compatibilidade 100% Nativa! Sua televisão possui sistema Android TV ou Google TV e aceita a instalação direta do aplicativo UniTV sem precisar de nenhum aparelho externo.',
    tutorialDeviceId: 'smart-tv-android',
  },
  {
    id: 'philco-aoc-toshiba',
    label: 'Smart TV Philco, AOC ou Toshiba (Modelos com Android)',
    system: 'Android TV',
    compatibleDirect: true,
    recommendation:
      'Se o seu modelo possui a loja Google Play Store, a instalação é direta na TV. Caso seja um modelo mais antigo com sistema fechado (como Roku ou Linux), basta conectar um Fire Stick ou TV Box.',
    tutorialDeviceId: 'smart-tv-android',
  },
  {
    id: 'tv-box-stick',
    label: 'TV Box Android, Xiaomi Mi Box ou Amazon Fire TV Stick',
    system: 'Android / Fire OS',
    compatibleDirect: true,
    recommendation:
      'Compatibilidade 100% Nativa! Esses aparelhos são ideais para rodar a versão de TV da UniTV com máxima velocidade usando o controle remoto.',
    tutorialDeviceId: 'fire-tv-stick',
  },
  {
    id: 'samsung',
    label: 'Smart TV Samsung (Crystal UHD, QLED, Sistema Tizen)',
    system: 'Tizen OS (Sistema próprio Samsung)',
    compatibleDirect: false,
    recommendation:
      'As TVs Samsung utilizam o sistema fechado Tizen, que não instala aplicativos Android (.apk) diretamente na memória da TV. Para usar a UniTV na sua TV Samsung, basta conectar um Amazon Fire TV Stick, Mi Box ou TV Box na porta HDMI.',
    tutorialDeviceId: 'samsung-lg',
  },
  {
    id: 'lg',
    label: 'Smart TV LG (UHD, NanoCell, OLED, Sistema WebOS)',
    system: 'WebOS (Sistema próprio LG)',
    compatibleDirect: false,
    recommendation:
      'As TVs LG utilizam o sistema fechado WebOS, que não executa arquivos Android (.apk) nativamente. Para usar a UniTV na sua TV LG com perfeição, basta conectar um Fire TV Stick, Chromecast com Google TV ou TV Box na entrada HDMI.',
    tutorialDeviceId: 'samsung-lg',
  },
  {
    id: 'celular-android',
    label: 'Celular ou Tablet Android (Samsung Galaxy, Motorola, Xiaomi)',
    system: 'Android 6.0 ou superior',
    compatibleDirect: true,
    recommendation:
      'Compatibilidade 100% Nativa! Você pode instalar a versão Mobile oficial da UniTV diretamente pelo navegador do seu smartphone ou tablet Android.',
    tutorialDeviceId: 'celular-android',
  },
  {
    id: 'iphone-ios',
    label: 'iPhone ou iPad (Sistema Apple iOS / iPadOS)',
    system: 'Apple iOS / iPadOS',
    compatibleDirect: false,
    recommendation:
      'Este portal é 100% otimizado para navegação e atendimento pelo iPhone/iPad. Como o aplicativo UniTV utiliza o formato Android (.apk), usuários de iPhone utilizam a UniTV na televisão conectando um Fire TV Stick, Mi Box ou TV Box Android na porta HDMI da TV e gerenciam suas recargas facilmente pelo WhatsApp no iPhone.',
    tutorialDeviceId: 'fire-tv-stick',
  },
];

export const CompatibilityPage: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const [selectedBrandId, setSelectedBrandId] = useState<string>(BRAND_CHECKER_OPTIONS[0].id);

  const selectedBrand =
    BRAND_CHECKER_OPTIONS.find((b) => b.id === selectedBrandId) || BRAND_CHECKER_OPTIONS[0];

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Dispositivos Compatíveis', path: '/dispositivos-compativeis' },
  ];

  return (
    <>
      <SEOHead
        title="Dispositivos Compatíveis com a UniTV — Smart TV, TV Box, Fire Stick e Celular"
        description="Descubra quais dispositivos são compatíveis com a UniTV: Smart TVs Android/Google TV, TV Box, Fire TV Stick, celulares Android e como usar em TVs Samsung e LG."
        canonicalPath="/dispositivos-compativeis"
        breadcrumbs={breadcrumbs}
      />

      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-orange-400">
              Requisitos Técnicos · Sistemas Suportados · Soluções HDMI
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Dispositivos Compatíveis com a UniTV
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Saiba exatamente em quais equipamentos a UniTV pode ser instalada diretamente, quais são os
              requisitos mínimos de internet e como utilizar em televisores de outros sistemas.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Brand Compatibility Checker */}
      <section id="comp-verificador" className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 mb-2">
                <Search className="w-4 h-4" />
                <span>Verificador Interativo de Compatibilidade</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
                Consulte seu aparelho agora mesmo
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Selecione abaixo o tipo ou marca do seu equipamento para ver o diagnóstico técnico de compatibilidade:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Brand Buttons List (6 cols) */}
              <div className="lg:col-span-6 space-y-2.5">
                {BRAND_CHECKER_OPTIONS.map((option) => {
                  const active = option.id === selectedBrandId;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedBrandId(option.id)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 ${
                        active
                          ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{option.label}</span>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 ${active ? 'text-orange-400' : 'text-slate-400'}`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Diagnostic Result Panel (6 cols) */}
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <div className="text-xs text-slate-500">Sistema Identificado:</div>
                    <div className="text-sm font-bold text-slate-900">{selectedBrand.system}</div>
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-xs font-bold ${
                      selectedBrand.compatibleDirect ? 'text-emerald-700' : 'text-orange-600'
                    }`}
                  >
                    {selectedBrand.compatibleDirect ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Instalação Direta Nativa</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4" />
                        <span>Requer Aparelho HDMI Android</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-950">{selectedBrand.label}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{selectedBrand.recommendation}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/como-instalar?dispositivo=${selectedBrand.tutorialDeviceId}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <span>Ver Tutorial Passo a Passo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={getWhatsAppLink('compatibility')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Tirar Dúvida no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Compatibility Table */}
      <section id="comp-tabela" className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">
              Tabela Técnica de Requisitos e Dispositivos
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Compare os requisitos de sistema operacional, velocidade de internet e método de instalação para cada
              categoria de equipamento:
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-5 font-semibold">Dispositivo</th>
                    <th className="py-4 px-5 font-semibold">Status de Compatibilidade</th>
                    <th className="py-4 px-5 font-semibold">Requisito de Sistema</th>
                    <th className="py-4 px-5 font-semibold">Internet Recomendada</th>
                    <th className="py-4 px-5 font-semibold">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {DEVICE_GUIDES.map((device) => (
                    <tr key={device.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-5 font-bold text-slate-900">{device.name}</td>
                      <td className="py-4 px-5 text-slate-700 font-medium">{device.compatibilityStatus}</td>
                      <td className="py-4 px-5 text-slate-600">{device.systemRequirement}</td>
                      <td className="py-4 px-5 text-slate-600 font-mono-tabular">{device.minInternetSpeed}</td>
                      <td className="py-4 px-5 whitespace-nowrap">
                        <Link
                          to={`/como-instalar?dispositivo=${device.id}`}
                          className="font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                        >
                          <span>Como instalar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
