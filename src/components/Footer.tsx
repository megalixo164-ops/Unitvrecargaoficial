import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';

export const Footer: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();

  return (
    <footer className="bg-[#030712] text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Top subtle brand gradient hairline */}
      <div
        className="h-[2px] w-full bg-gradient-to-r from-orange-500/80 via-rose-500/80 to-purple-600/80"
        aria-hidden="true"
      />

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Commercial Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 bg-white px-3.5 py-2 rounded-xl shadow-sm">
              <picture className="shrink-0">
                <source srcSet="/assets/images/logo_unitv.webp" type="image/webp" />
                <img
                  src={config.officialLogoUrl}
                  alt="Logotipo Oficial UniTV"
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8 object-contain"
                />
              </picture>
              <span className="font-display font-extrabold text-lg text-slate-950 tracking-tight">
                UniTV
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Portal comercial autorizado especializado em planos de acesso, códigos de recarga de 16 dígitos,
              orientação de teste inicial e suporte técnico passo a passo para dispositivos Android.
            </p>
            <div className="pt-2 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" aria-hidden="true" />
                <span>{config.whatsapp.supportHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Atendimento verificado via WhatsApp: {config.whatsapp.formattedNumber}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navegação Principal (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/teste-gratis" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Teste Grátis UniTV
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <Link to="/avaliacoes" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Avaliações de Clientes
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link to="/como-instalar" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Como Instalar
                </Link>
              </li>
              <li>
                <Link to="/dispositivos-compativeis" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Dispositivos Compatíveis
                </Link>
              </li>
              <li>
                <Link to="/duvidas-frequentes" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors inline-block py-0.5">
                  Blog e Tutoriais
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Guias Rápidos & Buscas Comuns (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">Guias Mais Acessados</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/blog/como-instalar-unitv-na-smart-tv"
                  className="text-slate-400 hover:text-white transition-colors inline-block py-0.5"
                >
                  Como instalar UniTV na Smart TV
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/unitv-funciona-em-samsung"
                  className="text-slate-400 hover:text-white transition-colors inline-block py-0.5"
                >
                  UniTV para Smart TV Samsung
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/unitv-funciona-em-lg"
                  className="text-slate-400 hover:text-white transition-colors inline-block py-0.5"
                >
                  UniTV para Smart TV LG
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/como-ativar-unitv"
                  className="text-slate-400 hover:text-white transition-colors inline-block py-0.5"
                >
                  Como ativar código de 16 dígitos
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/como-renovar-unitv"
                  className="text-slate-400 hover:text-white transition-colors inline-block py-0.5"
                >
                  Como renovar UniTV pelo WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/unitv-e-bom-conheca-suas-caracteristicas"
                  className="text-slate-400 hover:text-white transition-colors inline-block py-0.5"
                >
                  UniTV é bom? Veja características
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Atendimento Direto & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">Canais de Atendimento</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Solicite suporte de instalação, consulte o teste grátis ou adquira seu código de recarga diretamente
              pelo nosso WhatsApp oficial.
            </p>
            <a
              href={getWhatsAppLink('home')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-600/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Falar no WhatsApp Agora</span>
            </a>

            <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-slate-400">
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
                <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
                <Link to="/termos-de-uso" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Sitemap XML</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 space-y-4">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300 font-medium">Aviso Comercial e Transparência:</strong>{' '}
            {config.commercialDisclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} {config.brandName} — {config.portalSubtitle}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
