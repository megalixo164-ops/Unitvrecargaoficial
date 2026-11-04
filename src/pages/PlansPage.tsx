import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Check, ShieldCheck, CreditCard, RefreshCw, ArrowRight, Settings } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { buildWhatsAppUrl } from '../config/siteConfig';

export const PlansPage: React.FC = () => {
  const { config, getWhatsAppLink, setIsEditorOpen } = useSiteConfig();

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Planos e Preços', path: '/planos' },
  ];

  const plansSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Planos de Acesso e Recarga UniTV',
    description:
      'Planos pré-pagos Mensal (30 dias), Trimestral (90 dias), Semestral (180 dias) e Anual (365 dias) para ativação e renovação da plataforma UniTV.',
    brand: {
      '@type': 'Brand',
      name: 'UniTV',
    },
    offers: config.plans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: plan.price.replace(/[^\d,]/g, '').replace(',', '.'),
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    })),
  };

  return (
    <>
      <SEOHead
        title="Planos e Preços UniTV — Mensal, Trimestral, Semestral e Anual"
        description="Conheça os planos e preços da UniTV: opções Mensal (30 dias), Trimestral (90 dias), Semestral (180 dias) e Anual (365 dias). Ativação via código de 16 dígitos pelo WhatsApp."
        canonicalPath="/planos"
        breadcrumbs={breadcrumbs}
        schemaData={plansSchema}
      />

      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-orange-400">
              Tabela Comercial Autorizada · Sem Fidelidade · Envio Rápido via WhatsApp
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Planos e Preços da UniTV
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Escolha o período de vigência ideal para ativar um novo acesso ou renovar sua conta UniTV. Todos os
              planos oferecem acesso integral à plataforma, sem cobranças recorrentes automáticas e com suporte
              completo pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section id="planos-tabela" className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between ${
                  plan.featured
                    ? 'bg-slate-950 text-white border-2 border-orange-500 shadow-xl'
                    : 'bg-slate-50 text-slate-900 border border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-3">
                    <span className={plan.featured ? 'text-orange-400 font-semibold' : 'text-slate-500 font-medium'}>
                      {plan.periodLabel}
                    </span>
                    {plan.savingsLabel && (
                      <span className={plan.featured ? 'text-emerald-400 font-medium' : 'text-emerald-700 font-medium'}>
                        {plan.savingsLabel}
                      </span>
                    )}
                  </div>

                  <h2 className={`text-xl font-bold ${plan.featured ? 'text-white' : 'text-slate-950'}`}>
                    {plan.name}
                  </h2>

                  <div className="mt-4 pb-4 border-b border-slate-200/20">
                    <div
                      className={`text-3xl font-extrabold font-mono-tabular ${
                        plan.featured ? 'text-white' : 'text-slate-950'
                      }`}
                    >
                      {plan.price}
                    </div>
                    {plan.equivalentMonthly && (
                      <div className={`text-xs mt-1 ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
                        {plan.equivalentMonthly}
                      </div>
                    )}
                  </div>

                  <p className={`mt-4 text-xs leading-relaxed ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.featured ? 'text-orange-400' : 'text-emerald-600'
                          }`}
                          aria-hidden="true"
                        />
                        <span className={plan.featured ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={buildWhatsAppUrl(config.whatsapp.rawNumber, plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold rounded-xl transition-colors whitespace-nowrap ${
                      plan.featured
                        ? 'bg-orange-600 hover:bg-orange-500 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Contratar {plan.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Admin Quick Edit Bar */}
          <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
            <p>
              <strong>Nota sobre Condições Comerciais:</strong> {config.commercialDisclaimer}
            </p>
            <button
              type="button"
              onClick={() => setIsEditorOpen(true)}
              className="inline-flex items-center gap-1.5 font-semibold text-orange-600 hover:text-orange-700 whitespace-nowrap shrink-0"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Editar Valores</span>
            </button>
          </div>
        </div>
      </section>

      {/* Formas de Pagamento e Processo de Renovação */}
      <section id="planos-pagamento" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Formas de Pagamento (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-600">
                <CreditCard className="w-4 h-4" />
                <span>Pagamento Facilitado e Seguro</span>
              </div>
              <h2 className="text-2xl font-display font-extrabold text-slate-950">
                Formas de pagamento e prazo de envio do código
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Todo o processo de aquisição ou renovação é acompanhado por um atendente real no WhatsApp para
                garantir segurança e envio imediato do seu código de 16 dígitos.
              </p>

              <div className="space-y-4">
                {config.paymentMethods.map((method, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-xl p-5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-slate-900">{method.name}</h3>
                      <span className="text-xs text-emerald-700 font-medium">{method.releaseTime}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">{method.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Como funciona a ativação e renovação (6 cols) */}
            <div id="planos-ativacao" className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-600">
                <RefreshCw className="w-4 h-4" />
                <span>Ativação de Novos Clientes e Renovação</span>
              </div>
              <h2 className="text-2xl font-display font-extrabold text-slate-950">
                Como recebo e ativo meu plano na UniTV?
              </h2>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">1. Código de Recarga de 16 dígitos:</strong> Assim que o
                  pagamento é confirmado no atendimento via WhatsApp, enviamos seu código numérico exclusivo de 16
                  dígitos.
                </p>
                <p>
                  <strong className="text-slate-900">2. Inserção simples no aplicativo:</strong> Basta abrir a UniTV
                  na sua Smart TV, TV Box, Fire TV Stick ou celular, acessar o menu <strong>Perfil &gt; Código de Recarga</strong> e digitar os 16 números.
                </p>
                <p>
                  <strong className="text-slate-900">3. Soma cumulativa de dias:</strong> Se você já possui dias
                  restantes na sua conta, não perde nenhum dia ao renovar antecipadamente — o novo período é somado
                  integralmente à sua validade atual.
                </p>
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/blog/como-ativar-unitv"
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                  >
                    <span>Ver tutorial de como ativar código</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={getWhatsAppLink('plans')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar com Setor de Planos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
