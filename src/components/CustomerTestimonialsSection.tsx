import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Star, CheckCircle2, Users, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { CUSTOMER_TESTIMONIALS, CustomerTestimonial } from '../data/testimonialsData';

interface CustomerTestimonialsSectionProps {
  showAllByDefault?: boolean;
}

const CustomerAvatar: React.FC<{ name: string; avatarUrl: string; priority?: boolean }> = ({
  name,
  avatarUrl,
  priority = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  const webpUrl = avatarUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <div className="w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 shrink-0 shadow-xs">
      <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
        {!imgError ? (
          <picture className="w-full h-full block">
            <source srcSet={webpUrl} type="image/webp" />
            <img
              src={avatarUrl}
              alt={`Foto de perfil de ${name}`}
              width={48}
              height={48}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={priority ? 'high' : 'auto'}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center"
            />
          </picture>
        ) : (
          <span className="text-sm font-bold text-slate-700">{initials}</span>
        )}
      </div>
    </div>
  );
};

export const CustomerTestimonialsSection: React.FC<CustomerTestimonialsSectionProps> = ({
  showAllByDefault = true,
}) => {
  const { getWhatsAppLink } = useSiteConfig();
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'atendimento' | 'app' | 'instalacao'>('todos');

  const filteredList = CUSTOMER_TESTIMONIALS.filter((item: CustomerTestimonial) => {
    if (selectedFilter === 'todos') return true;
    return item.category === selectedFilter;
  });

  const displayedTestimonials = showAllByDefault ? filteredList : filteredList.slice(0, 4);

  return (
    <section id="sec-clientes" className="py-14 lg:py-20 bg-slate-50/70 border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header + Quantitative Social Proof Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Avaliações Reais · Clientes em Todo o Brasil
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
              Mais de 10.000 clientes atendidos com suporte passo a passo no WhatsApp
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Veja o que dizem nossos clientes de diversas regiões do Brasil sobre a estabilidade do aplicativo
              UniTV, o teste grátis de 3 dias e a agilidade do nosso atendimento.
            </p>
          </div>

          {/* Quantitative Proof Metrics Box */}
          <div className="lg:col-span-5 relative rounded-2xl p-[1.5px] bg-gradient-to-br from-orange-500/60 via-rose-500/50 to-purple-600/60 shadow-lg">
            <div className="bg-[#030712] text-white rounded-[14px] p-5 sm:p-6 grid grid-cols-3 gap-3 sm:gap-4">
              <div>
                <div className="flex items-center gap-1 text-orange-400 mb-1">
                  <Users className="w-4 h-4 shrink-0" />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold font-mono-tabular text-white">+10 mil</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">Clientes atendidos no Brasil</div>
              </div>

              <div className="border-l border-slate-800 pl-3 sm:pl-4">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  <Star className="w-4 h-4 fill-amber-400 shrink-0" />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold font-mono-tabular text-white">4.9/5.0</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">Satisfação com o suporte</div>
              </div>

              <div className="border-l border-slate-800 pl-3 sm:pl-4">
                <div className="flex items-center gap-1 text-emerald-400 mb-1">
                  <Clock className="w-4 h-4 shrink-0" />
                </div>
                <div className="text-lg sm:text-2xl font-extrabold font-mono-tabular text-white">3 Dias</div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">Teste grátis p/ novos usuários</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (Scrollable horizontally on mobile for zero overflow) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-x-auto no-scrollbar max-w-full">
            {[
              { id: 'todos', label: 'Destaques Recentes' },
              { id: 'atendimento', label: 'Atendimento e Recarga' },
              { id: 'app', label: 'Qualidade do App UniTV' },
              { id: 'instalacao', label: 'Ajuda na Instalação' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id as typeof selectedFilter)}
                className={`min-h-[42px] px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-[0.98] ${
                  selectedFilter === tab.id
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Avaliações recentes verificadas entre mais de 10.000 clientes atendidos</span>
          </div>
        </div>

        {/* Customer Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {displayedTestimonials.map((item, idx) => (
            <article
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div>
                {/* Header: Profile Photo, Name, City/State & Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <CustomerAvatar name={item.name} avatarUrl={item.avatarUrl} priority={idx < 4} />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-950 truncate">{item.name}</h3>
                        <CheckCircle2
                          className="w-4 h-4 text-emerald-600 shrink-0"
                          aria-label="Cliente verificado"
                        />
                      </div>
                      <div className="text-xs text-slate-500 leading-snug mt-0.5">
                        {item.cityState} · {item.roleOrContext}
                      </div>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 shrink-0 pt-0.5" aria-label={`Avaliação ${item.rating} de 5`}>
                    {Array.from({ length: item.rating }).map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Natural Customer Feedback */}
                <p className="text-sm text-slate-700 leading-relaxed">"{item.comment}"</p>
              </div>

              {/* Unboxed Metadata Footer (Device + Plan + Date) */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-semibold text-slate-800">{item.deviceUsed}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-orange-600 font-semibold">{item.planUsed}</span>
                </div>
                <span className="text-slate-400">{item.dateLabel}</span>
              </div>
            </article>
          ))}
        </div>

        {!showAllByDefault && (
          <div className="mt-8 text-center">
            <Link
              to="/avaliacoes"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-orange-500 text-xs sm:text-sm font-bold text-slate-900 hover:text-orange-600 shadow-2xs transition-all active:scale-[0.98]"
            >
              <span>Ver mais avaliações de clientes em todo o Brasil</span>
              <ArrowRight className="w-4 h-4 text-orange-600" />
            </Link>
          </div>
        )}

        {/* Bottom Conversion Bar */}
        <div className="mt-10 relative rounded-2xl p-[1.5px] bg-gradient-to-r from-orange-500/60 via-rose-500/50 to-purple-600/60 shadow-xl">
          <div className="bg-[#030712] text-white rounded-[14px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-display font-extrabold">
                Faça como nossos mais de 10.000 clientes em todo o Brasil
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Peça agora seu <strong>Teste Grátis de 3 dias</strong> (para novos usuários) ou ative seu plano com
                suporte completo pelo WhatsApp.
              </p>
            </div>
            <a
              href={getWhatsAppLink('freeTrial')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-600/20 active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Solicitar Meu Teste de 3 Dias no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
