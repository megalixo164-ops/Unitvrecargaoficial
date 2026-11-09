import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { config, getWhatsAppLink } = useSiteConfig();

  // Map current route to contextual WhatsApp message key
  const getPageMessageKey = () => {
    const path = location.pathname;
    if (path.startsWith('/teste-gratis')) return 'freeTrial';
    if (path.startsWith('/planos')) return 'plans';
    if (path.startsWith('/como-instalar')) return 'installation';
    if (path.startsWith('/como-funciona')) return 'howItWorks';
    if (path.startsWith('/dispositivos-compativeis')) return 'compatibility';
    if (path.startsWith('/duvidas-frequentes')) return 'faq';
    if (path.startsWith('/blog')) return 'blog';
    if (path.startsWith('/contato')) return 'contact';
    return 'home';
  };

  const primaryNavLinks = [
    { label: 'Teste Grátis', path: '/teste-gratis' },
    { label: 'Planos', path: '/planos' },
    { label: 'Como Instalar', path: '/como-instalar' },
    { label: 'Clientes', path: '/avaliacoes' },
    { label: 'Blog', path: '/blog' },
  ];

  const allMobileLinks = [
    { label: 'Página Inicial', path: '/' },
    { label: 'Teste Grátis de 3 Dias', path: '/teste-gratis' },
    { label: 'Planos e Preços', path: '/planos' },
    { label: 'Avaliações de Clientes (+10 mil)', path: '/avaliacoes' },
    { label: 'Como Funciona', path: '/como-funciona' },
    { label: 'Como Instalar', path: '/como-instalar' },
    { label: 'Dispositivos Compatíveis', path: '/dispositivos-compativeis' },
    { label: 'Dúvidas Frequentes', path: '/duvidas-frequentes' },
    { label: 'Blog e Tutoriais', path: '/blog' },
    { label: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      {/* Top Sales Conversion & Authenticity Strip */}
      <div className="bg-slate-950 text-white border-b border-slate-800/80 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between gap-2 overflow-hidden">
          <div className="flex items-center gap-2 truncate font-medium text-slate-200">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
            <span className="font-bold text-orange-400">UNITV OFICIAL</span>
            <span aria-hidden="true" className="text-slate-600">|</span>
            <span className="truncate">
              <strong className="text-white">R$ 24,15/mês</strong> (no Anual) · Código na hora após o PIX
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0 font-semibold">
            <Link to="/teste-gratis" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Teste Grátis 3 Dias
            </Link>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <Link to="/como-instalar" className="text-slate-300 hover:text-white transition-colors">
              Baixar App
            </Link>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <Link to="/planos" className="text-orange-400 hover:text-orange-300 transition-colors">
              Explorar Ofertas →
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Top Brand Gradient Accent Line */}
      <div
        className="h-[2.5px] w-full bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Brand Title / Official Logo (single-line) */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 rounded-lg"
          aria-label="UniTV Página Inicial"
        >
          <picture className="shrink-0">
            <source srcSet="/assets/images/logo_unitv.webp" type="image/webp" />
            <img
              src={config.officialLogoUrl}
              alt="Logotipo Oficial UniTV"
              width={36}
              height={36}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-9 w-9 object-contain mix-blend-multiply"
            />
          </picture>
          <span className="font-display text-xl tracking-tight">UniTV</span>
        </Link>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
          {primaryNavLinks.map((item) => {
            const active = isActive(item.path);
            const isPlans = item.path === '/planos';
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`whitespace-nowrap shrink-0 px-3.5 py-2 rounded-xl transition-all ${
                  active
                    ? 'bg-slate-950 text-white font-semibold shadow-xs'
                    : isPlans
                      ? 'bg-orange-50/90 text-orange-700 border border-orange-200/80 hover:bg-orange-100/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={getWhatsAppLink(getPageMessageKey())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[42px] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all whitespace-nowrap shrink-0 shadow-sm shadow-emerald-600/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">Atendimento WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-xl text-slate-700 hover:text-slate-950 bg-slate-100/80 hover:bg-slate-200/70 transition-colors active:scale-[0.96]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[calc(100vh-4.25rem)] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1.5">
            {allMobileLinks.map((item) => {
              const active = isActive(item.path);
              const isPlans = item.path === '/planos';
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[48px] flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.99] ${
                    isPlans
                      ? active
                        ? 'bg-gradient-to-r from-orange-600 via-rose-600 to-purple-700 text-white shadow-sm'
                        : 'bg-gradient-to-r from-orange-50 via-rose-50/70 to-purple-50/60 text-orange-950 border border-orange-300/80 shadow-2xs'
                      : active
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-slate-50/80 text-slate-800 hover:bg-slate-100 border border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{item.label}</span>
                    {isPlans && (
                      <span
                        className={`text-[11px] font-mono-tabular font-bold px-2 py-0.5 rounded-md ${
                          active
                            ? 'bg-white/20 text-white'
                            : 'bg-orange-100/90 text-orange-700'
                        }`}
                      >
                        R$ 29,90+
                      </span>
                    )}
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ${
                      isPlans
                        ? active
                          ? 'text-white'
                          : 'text-orange-600'
                        : active
                          ? 'text-orange-400'
                          : 'text-slate-400'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppLink(getPageMessageKey())}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md shadow-emerald-600/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Falar com Suporte no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
