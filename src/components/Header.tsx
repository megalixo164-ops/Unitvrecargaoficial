import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Brand Title / Official Logo (single-line) */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 rounded-md"
          aria-label="UniTV Página Inicial"
        >
          <img
            src={config.officialLogoUrl}
            alt="Logotipo Oficial UniTV"
            className="h-9 w-auto object-contain mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <span className="font-display">UniTV</span>
        </Link>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav aria-label="Navegação Principal" className="hidden md:flex items-center gap-7 text-sm font-medium">
          {primaryNavLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                  active
                    ? 'border-orange-600 text-slate-950 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-slate-950 hover:border-slate-300'
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
            className="inline-flex items-center justify-center gap-2 min-h-[42px] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-xs active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="hidden xs:inline sm:inline">Atendimento WhatsApp</span>
            <span className="xs:hidden sm:hidden">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors active:scale-[0.96]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {allMobileLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[44px] flex items-center px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? 'bg-orange-50 text-orange-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
