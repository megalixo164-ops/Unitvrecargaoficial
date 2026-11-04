import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CustomerTestimonialsSection } from '../components/CustomerTestimonialsSection';
import { CUSTOMER_TESTIMONIALS } from '../data/testimonialsData';

export const TestimonialsPage: React.FC = () => {
  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Avaliações de Clientes', path: '/avaliacoes' },
  ];

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'UniTV — Planos e Suporte Autorizado',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '10420',
      bestRating: '5',
      worstRating: '1',
    },
    review: CUSTOMER_TESTIMONIALS.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating.toString(),
        bestRating: '5',
      },
      reviewBody: t.comment,
    })),
  };

  return (
    <>
      <SEOHead
        title="Avaliações de Clientes UniTV — Mais de 10 Mil Clientes Atendidos no Brasil"
        description="Veja os depoimentos e feedbacks reais de clientes da UniTV em todo o Brasil sobre o aplicativo, o teste grátis de 3 dias e o suporte pelo WhatsApp."
        canonicalPath="/avaliacoes"
        breadcrumbs={breadcrumbs}
        schemaData={reviewsSchema}
      />

      <section className="bg-slate-950 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold text-orange-400">
              Mais de 10.000 Clientes Atendidos · Feedbacks Verificados
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              O que nossos clientes dizem sobre a UniTV e nosso atendimento
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Confira relatos reais de clientes de diferentes estados brasileiros que testaram os 3 dias grátis,
              instalaram com nossa ajuda pelo WhatsApp e utilizam a UniTV diariamente.
            </p>
          </div>
        </div>
      </section>

      <CustomerTestimonialsSection showAllByDefault={true} />
    </>
  );
};
