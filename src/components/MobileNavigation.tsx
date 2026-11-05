import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Gift,
  CreditCard,
  Compass,
  MessageCircle,
  X,
  ChevronRight,
  Tv,
  Smartphone,
  HelpCircle,
  BookOpen,
  Layers,
  CheckCircle2,
  ArrowUp,
} from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { BLOG_POSTS } from '../data/blogPosts';

export interface TopicItem {
  id: string;
  label: string;
  type: 'anchor' | 'route';
  target: string;
}

export const MobileNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getWhatsAppLink } = useSiteConfig();
  const [sheetOpen, setSheetOpen] = useState(false);

  // Close sheet on route change
  useEffect(() => {
    setSheetOpen(false);
  }, [location.pathname, location.search]);

  // Contextual WhatsApp key
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

  // Build contextual topic chips based on current route
  const getCurrentPageTopics = (): { pageLabel: string; topics: TopicItem[] } => {
    const path = location.pathname;

    if (path === '/') {
      return {
        pageLabel: 'Tópicos da Página Inicial',
        topics: [
          { id: 'top-inicio', label: 'Resumo', type: 'anchor', target: 'sec-hero' },
          { id: 'top-recursos', label: 'O que é UniTV', type: 'anchor', target: 'sec-recursos' },
          { id: 'top-teste', label: 'Teste 3 Dias Grátis', type: 'anchor', target: 'sec-teste-gratis' },
          { id: 'top-planos', label: 'Planos e Preços', type: 'anchor', target: 'planos' },
          { id: 'top-clientes', label: 'Clientes (+10 mil)', type: 'anchor', target: 'sec-clientes' },
          { id: 'top-aparelhos', label: 'Aparelhos Compatíveis', type: 'anchor', target: 'sec-dispositivos' },
          { id: 'top-passos', label: 'Como Começar', type: 'anchor', target: 'sec-como-funciona' },
          { id: 'top-faq', label: 'Dúvidas (FAQ)', type: 'anchor', target: 'sec-faq' },
          { id: 'top-blog', label: 'Artigos e Guias', type: 'anchor', target: 'sec-blog' },
        ],
      };
    }

    if (path.startsWith('/teste-gratis')) {
      return {
        pageLabel: 'Tópicos do Teste Grátis',
        topics: [
          { id: 'tg-regras', label: 'Regras de Avaliação', type: 'anchor', target: 'teste-condicoes' },
          { id: 'tg-etapas', label: '3 Passos para Testar', type: 'anchor', target: 'teste-passo-a-passo' },
          { id: 'tg-explicacao', label: 'Como Funciona no App', type: 'anchor', target: 'teste-esclarecimento' },
          { id: 'tg-instalar', label: 'Como Instalar', type: 'route', target: '/como-instalar' },
          { id: 'tg-planos', label: 'Ver Planos', type: 'route', target: '/planos' },
        ],
      };
    }

    if (path.startsWith('/planos')) {
      return {
        pageLabel: 'Tópicos de Planos e Preços',
        topics: [
          { id: 'pl-tabela', label: 'Tabela de Preços', type: 'anchor', target: 'planos-tabela' },
          { id: 'pl-pagamento', label: 'Formas de Pagamento', type: 'anchor', target: 'planos-pagamento' },
          { id: 'pl-renovacao', label: 'Como Ativar e Renovar', type: 'anchor', target: 'planos-ativacao' },
          { id: 'pl-teste', label: 'Teste Grátis', type: 'route', target: '/teste-gratis' },
        ],
      };
    }

    if (path.startsWith('/como-instalar')) {
      return {
        pageLabel: 'Escolher Aparelho para Instalar',
        topics: [
          {
            id: 'inst-tv',
            label: 'Smart TV Android',
            type: 'route',
            target: '/como-instalar?dispositivo=smart-tv-android',
          },
          {
            id: 'inst-box',
            label: 'TV Box Android',
            type: 'route',
            target: '/como-instalar?dispositivo=tv-box',
          },
          {
            id: 'inst-fire',
            label: 'Fire TV Stick',
            type: 'route',
            target: '/como-instalar?dispositivo=fire-tv-stick',
          },
          {
            id: 'inst-cel',
            label: 'Celular Android',
            type: 'route',
            target: '/como-instalar?dispositivo=celular-android',
          },
          {
            id: 'inst-sam-lg',
            label: 'Samsung / LG / iOS',
            type: 'route',
            target: '/como-instalar?dispositivo=samsung-lg',
          },
        ],
      };
    }

    if (path.startsWith('/dispositivos-compativeis')) {
      return {
        pageLabel: 'Tópicos de Compatibilidade',
        topics: [
          { id: 'comp-verificador', label: 'Verificador por Marca', type: 'anchor', target: 'comp-verificador' },
          { id: 'comp-tabela', label: 'Tabela de Requisitos', type: 'anchor', target: 'comp-tabela' },
          { id: 'comp-instalar', label: 'Tutoriais de Instalação', type: 'route', target: '/como-instalar' },
        ],
      };
    }

    if (path.startsWith('/como-funciona')) {
      return {
        pageLabel: 'Tópicos de Funcionamento',
        topics: [
          { id: 'cf-oquee', label: 'O que é UniTV', type: 'anchor', target: 'cf-tecnologia' },
          { id: 'cf-etapas', label: 'Adquirir, Ativar e Usar', type: 'anchor', target: 'cf-etapas' },
          { id: 'cf-planos', label: 'Planos e Preços', type: 'route', target: '/planos' },
          { id: 'cf-teste', label: 'Teste Grátis', type: 'route', target: '/teste-gratis' },
        ],
      };
    }

    if (path.startsWith('/duvidas-frequentes')) {
      return {
        pageLabel: 'Tópicos da Central de Ajuda',
        topics: [
          { id: 'faq-busca', label: 'Pesquisar Dúvida', type: 'anchor', target: 'faq-topo' },
          { id: 'faq-lista', label: 'Lista de Perguntas', type: 'anchor', target: 'faq-lista' },
          { id: 'faq-planos', label: 'Planos', type: 'route', target: '/planos' },
          { id: 'faq-instalar', label: 'Como Instalar', type: 'route', target: '/como-instalar' },
        ],
      };
    }

    if (path.startsWith('/blog/') && path.length > 6) {
      const slug = path.replace('/blog/', '');
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) {
        return {
          pageLabel: 'Tópicos deste Artigo',
          topics: [
            ...post.sections.map((sec, idx) => ({
              id: sec.id,
              label: `${idx + 1}. ${sec.heading.slice(0, 32)}${sec.heading.length > 32 ? '…' : ''}`,
              type: 'anchor' as const,
              target: sec.id,
            })),
            { id: 'blog-voltar', label: 'Todos os Artigos', type: 'route', target: '/blog' },
          ],
        };
      }
    }

    return {
      pageLabel: 'Navegação Rápida UniTV',
      topics: [
        { id: 'nav-home', label: 'Início', type: 'route', target: '/' },
        { id: 'nav-teste', label: 'Teste Grátis', type: 'route', target: '/teste-gratis' },
        { id: 'nav-planos', label: 'Planos e Preços', type: 'route', target: '/planos' },
        { id: 'nav-instalar', label: 'Como Instalar', type: 'route', target: '/como-instalar' },
        { id: 'nav-comp', label: 'Compatibilidade', type: 'route', target: '/dispositivos-compativeis' },
        { id: 'nav-faq', label: 'Dúvidas (FAQ)', type: 'route', target: '/duvidas-frequentes' },
      ],
    };
  };

  const { pageLabel, topics } = getCurrentPageTopics();

  const handleTopicClick = (topic: TopicItem) => {
    setSheetOpen(false);
    if (topic.type === 'anchor') {
      const element = document.getElementById(topic.target);
      if (element) {
        const yOffset = -72;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(topic.target);
    }
  };

  const scrollToTop = () => {
    setSheetOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isBottomTabActive = (targetPath: string) => {
    if (targetPath === '/') return location.pathname === '/';
    return location.pathname.startsWith(targetPath);
  };

  return (
    <>
      {/* MOBILE BOTTOM THUMB BAR (Optimized for Android & iOS one-handed navigation) */}
      <nav
        aria-label="Barra Inferior de Navegação Mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 pb-safe shadow-[0_-8px_28px_rgba(15,23,42,0.08)]"
      >
        <div className="grid grid-cols-5 items-center h-16 px-1.5">
          <Link
            to="/"
            className={`relative flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all active:scale-[0.95] ${
              isBottomTabActive('/') ? 'text-orange-600 font-bold' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isBottomTabActive('/') && (
              <span
                className="absolute top-0.5 w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500"
                aria-hidden="true"
              />
            )}
            <Home className="w-5 h-5" />
            <span className="text-[11px] tracking-tight mt-0.5 whitespace-nowrap">Início</span>
          </Link>

          <Link
            to="/teste-gratis"
            className={`relative flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all active:scale-[0.95] ${
              isBottomTabActive('/teste-gratis')
                ? 'text-orange-600 font-bold'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isBottomTabActive('/teste-gratis') && (
              <span
                className="absolute top-0.5 w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500"
                aria-hidden="true"
              />
            )}
            <Gift className="w-5 h-5" />
            <span className="text-[11px] tracking-tight mt-0.5 whitespace-nowrap">Teste</span>
          </Link>

          <Link
            to="/planos"
            className={`relative flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all active:scale-[0.95] ${
              isBottomTabActive('/planos') ? 'text-orange-600 font-bold' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isBottomTabActive('/planos') && (
              <span
                className="absolute top-0.5 w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500"
                aria-hidden="true"
              />
            )}
            <CreditCard className="w-5 h-5" />
            <span className="text-[11px] tracking-tight mt-0.5 whitespace-nowrap">Planos</span>
          </Link>

          <button
            type="button"
            onClick={() => setSheetOpen(true)}
            className={`relative flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all active:scale-[0.95] ${
              sheetOpen ? 'text-orange-600 font-bold' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-[11px] tracking-tight mt-0.5 whitespace-nowrap">Tópicos</span>
          </button>

          <a
            href={getWhatsAppLink(getPageMessageKey())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center min-h-[46px] mx-1 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-sm shadow-emerald-600/25 active:scale-[0.95] transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-bold tracking-tight mt-0.5 whitespace-nowrap">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* INTERACTIVE BOTTOM SHEET / TOPIC DRAWER (Android & iOS Ergonomic Drawer) */}
      {sheetOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Navegação por Tópicos e Seções"
          onClick={() => setSheetOpen(false)}
        >
          <div
            className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[86vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle & Sheet Header */}
            <div className="pt-3 pb-3.5 px-5 border-b border-slate-200 bg-white sticky top-0 z-10">
              <div className="w-11 h-1.5 bg-slate-300 rounded-full mx-auto mb-3 sm:hidden" />
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-display font-extrabold text-slate-950">
                    Navegação Rápida por Tópicos
                  </h2>
                  <p className="text-xs text-slate-500">
                    Acesse qualquer seção ou guia para Android, iOS e Smart TV
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSheetOpen(false)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200/70 transition-colors"
                  aria-label="Fechar navegação por tópicos"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-5 overflow-y-auto space-y-6">
              {/* Group 1: Current Page Topics */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2.5">
                  1. {pageLabel}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleTopicClick(topic)}
                      className="min-h-[46px] px-3.5 py-2.5 bg-slate-50 hover:bg-orange-50/70 border border-slate-200/90 hover:border-orange-300 rounded-xl text-left text-xs font-semibold text-slate-800 flex items-center justify-between gap-2 transition-all active:scale-[0.98]"
                    >
                      <span className="line-clamp-1">{topic.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Group 2: Instalação Rápida por Sistema (Android, iOS, Smart TV) */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  2. Guias por Aparelho (Android, iOS e TV)
                </div>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  {[
                    {
                      label: 'Smart TV Android / Google TV',
                      sub: 'TCL, Sony, Philips, Philco e AOC',
                      url: '/como-instalar?dispositivo=smart-tv-android',
                      icon: Tv,
                    },
                    {
                      label: 'Celular e Tablet Android',
                      sub: 'Versão Mobile Touchscreen (.APK)',
                      url: '/como-instalar?dispositivo=celular-android',
                      icon: Smartphone,
                    },
                    {
                      label: 'Amazon Fire TV Stick e TV Box',
                      sub: 'Instalação rápida via app Downloader',
                      url: '/como-instalar?dispositivo=fire-tv-stick',
                      icon: Layers,
                    },
                    {
                      label: 'Usuários de iPhone (iOS), TV Samsung e LG',
                      sub: 'Veja como usar na TV e verificar compatibilidade',
                      url: '/dispositivos-compativeis',
                      icon: CheckCircle2,
                    },
                  ].map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.url}
                        to={item.url}
                        onClick={() => setSheetOpen(false)}
                        className="flex items-center justify-between gap-3 px-4 py-3.5 hover:bg-slate-50 transition-colors min-h-[58px]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                            <IconComponent className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{item.label}</div>
                            <div className="text-[11px] text-slate-500">{item.sub}</div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Group 3: Todas as Páginas do Portal */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  3. Todas as Seções do Portal
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Página Inicial', path: '/', icon: Home },
                    { label: 'Teste 3 Dias Grátis', path: '/teste-gratis', icon: Gift },
                    { label: 'Planos (R$ 29,90+)', path: '/planos', icon: CreditCard },
                    { label: 'Clientes (+10 mil)', path: '/avaliacoes', icon: CheckCircle2 },
                    { label: 'Como Funciona', path: '/como-funciona', icon: Layers },
                    { label: 'Dúvidas (FAQ)', path: '/duvidas-frequentes', icon: HelpCircle },
                    { label: 'Blog e Tutoriais', path: '/blog', icon: BookOpen },
                  ].map((page) => {
                    const PageIcon = page.icon;
                    return (
                      <Link
                        key={page.path}
                        to={page.path}
                        onClick={() => setSheetOpen(false)}
                        className="min-h-[46px] px-3 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl flex items-center gap-2 text-xs font-semibold text-slate-800 active:scale-[0.98] transition-all"
                      >
                        <PageIcon className="w-4 h-4 text-orange-600 shrink-0" />
                        <span className="truncate">{page.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Pinned Sheet Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 pb-safe flex items-center gap-2.5">
              <button
                type="button"
                onClick={scrollToTop}
                className="min-h-[46px] px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 inline-flex items-center gap-1.5 shrink-0 active:scale-[0.98]"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Topo</span>
              </button>
              <a
                href={getWhatsAppLink(getPageMessageKey())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[46px] px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold inline-flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Atendimento Rápido no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
