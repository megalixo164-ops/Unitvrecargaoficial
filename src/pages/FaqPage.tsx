import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQ_ITEMS, FaqItem } from '../data/faqData';

export const FaqPage: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'geral', label: 'Sobre a UniTV' },
    { id: 'teste-gratis', label: 'Teste Grátis' },
    { id: 'planos-renovacao', label: 'Planos e Renovação' },
    { id: 'instalacao-dispositivos', label: 'Instalação e TVs' },
    { id: 'suporte', label: 'Suporte' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item: FaqItem) => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Dúvidas Frequentes', path: '/duvidas-frequentes' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Dúvidas Frequentes UniTV (FAQ) — Central de Ajuda"
        description="Respostas rápidas sobre a UniTV: como funciona o teste grátis de 3 dias, planos, ativação do código de 16 dígitos, Smart TVs compatíveis e suporte."
        canonicalPath="/duvidas-frequentes"
        breadcrumbs={breadcrumbs}
        schemaData={faqSchema}
      />

      {/* Page Hero */}
      <section id="faq-topo" className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-orange-400">
              Central de Ajuda UniTV · Perguntas e Respostas Completas
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Dúvidas Frequentes (FAQ)
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Pesquise abaixo sua dúvida ou navegue pelas categorias para encontrar respostas rápidas sobre planos,
              teste grátis, instalação e renovação da UniTV.
            </p>

            {/* Search Input */}
            <div className="pt-2 max-w-xl relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 mt-1" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar dúvida (ex: Samsung, código, teste grátis, Pix)..."
                aria-label="Pesquisar nas dúvidas frequentes"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section id="faq-lista" className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Category Filter Buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200/90 mb-10 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[42px] px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-[0.98] ${
                  selectedCategory === cat.id
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <p className="text-base font-bold text-slate-900">
                Nenhuma pergunta encontrada para "{searchQuery}"
              </p>
              <p className="text-xs text-slate-600">
                Tente buscar por outro termo ou chame diretamente nosso suporte no WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('todos');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <div className="text-[11px] text-orange-600 font-medium mb-0.5">
                          {faq.categoryLabel}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-slate-950">{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180 text-orange-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-2 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-200/70">
                        <p>{faq.answer}</p>
                        {faq.relatedLink && (
                          <div className="mt-3 pt-2 border-t border-slate-100">
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
          )}

          {/* Direct Support Card */}
          <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h2 className="text-xl font-display font-bold">Não encontrou a resposta que procurava?</h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Nosso atendimento via WhatsApp está disponível todos os dias para responder sua dúvida na hora.
              </p>
            </div>
            <a
              href={getWhatsAppLink('faq')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com Suporte no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
