import React, { useState } from 'react';
import { MessageCircle, Star, CheckCircle2, Users, ShieldCheck, Clock } from 'lucide-react';
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
    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border border-slate-300 shrink-0 flex items-center justify-center">
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

  const displayedTestimonials = showAllByDefault ? filteredList : filteredList.slice(0, 6);

  return (
    <section id="sec-clientes" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header + Quantitative Social Proof Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-semibold text-orange-600">
              Avaliações Reais · Clientes em Todo o Brasil
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              Mais de 10.000 clientes atendidos com suporte passo a passo no WhatsApp
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Veja o que dizem nossos clientes de diversas regiões do Brasil sobre a estabilidade do aplicativo
              UniTV, o teste grátis de 3 dias e a agilidade do nosso atendimento.
            </p>
          </div>

          {/* Quantitative Proof Metrics Box */}
          <div className="lg:col-span-5 bg-slate-950 text-white border border-slate-800 rounded-2xl p-6 grid grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-1 text-orange-400 mb-1">
                <Users className="w-4 h-4 shrink-0" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono-tabular text-white">+10 mil</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Clientes atendidos no Brasil</div>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                <Star className="w-4 h-4 fill-amber-400 shrink-0" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono-tabular text-white">4.9/5.0</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Satisfação com o suporte</div>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <div className="flex items-center gap-1 text-emerald-400 mb-1">
                <Clock className="w-4 h-4 shrink-0" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono-tabular text-white">3 Dias</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Teste grátis p/ novos usuários</div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
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
                className={`min-h-[40px] px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === tab.id
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
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

        {/* 10 Customer Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedTestimonials.map((item, idx) => (
            <article
              key={item.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Header: Profile Photo, Name, City/State & Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3.5">
                    <CustomerAvatar name={item.name} avatarUrl={item.avatarUrl} priority={idx < 4} />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-950">{item.name}</h3>
                        <CheckCircle2
                          className="w-4 h-4 text-emerald-600 shrink-0"
                          aria-label="Cliente verificado"
                        />
                      </div>
                      <div className="text-xs text-slate-500">
                        {item.cityState} · {item.roleOrContext}
                      </div>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 shrink-0" aria-label={`Avaliação ${item.rating} de 5`}>
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Natural Customer Feedback */}
                <p className="text-sm text-slate-700 leading-relaxed">"{item.comment}"</p>
              </div>

              {/* Unboxed Metadata Footer (Device + Plan + Date) */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-semibold text-slate-700">{item.deviceUsed}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-orange-600 font-medium">{item.planUsed}</span>
                </div>
                <span>{item.dateLabel}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Conversion Bar */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-display font-bold">
              Faça como nossos mais de 10.000 clientes em todo o Brasil
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Peça agora seu <strong>Teste Grátis de 3 dias</strong> (para novos usuários) ou ative seu plano com
              suporte completo pelo WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppLink('freeTrial')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Solicitar Meu Teste de 3 Dias no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
