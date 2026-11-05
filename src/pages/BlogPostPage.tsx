import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BLOG_POSTS } from '../data/blogPosts';
import { buildWhatsAppUrl } from '../config/siteConfig';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { config } = useSiteConfig();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const baseUrl = config.siteUrl.replace(/\/$/, '');
  const fullCoverUrl = post.coverImage.startsWith('http')
    ? post.coverImage
    : `${baseUrl}${post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}`;

  const articleSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: fullCoverUrl,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        '@type': 'Organization',
        name: 'Equipe Técnica UniTV Portal Autorizado',
      },
      publisher: {
        '@type': 'Organization',
        name: config.brandName,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}${config.officialLogoUrl}`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${baseUrl}/blog/${post.slug}`,
      },
    },
    ...(post.faqSnippet.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faqSnippet.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <SEOHead
        title={post.seoTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        imagePath={post.coverImage}
        ogType="article"
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
        breadcrumbs={breadcrumbs}
        schemaData={articleSchema}
      />

      {/* Article Header */}
      <section className="bg-slate-950 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="space-y-4">
            {/* Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-orange-400 font-semibold">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
              <span aria-hidden="true">·</span>
              <span>Atualizado em {post.updatedAt}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Main Article Body + Sidebar */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Article Content (8 cols) */}
            <article className="lg:col-span-8 space-y-10">
              {/* Featured Article Cover Image */}
              <figure className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm">
                <div className="aspect-video w-full relative overflow-hidden">
                  <picture className="w-full h-full block">
                    <source srcSet={post.coverImage.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
                    <img
                      src={post.coverImage}
                      alt={post.coverAlt}
                      width={800}
                      height={450}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-center"
                    />
                  </picture>
                </div>
                <figcaption className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                  {post.coverAlt}
                </figcaption>
              </figure>

              {post.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {sec.subSections && (
                    <div className="space-y-4 pt-2">
                      {sec.subSections.map((sub, sIdx) => (
                        <div key={sIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                          <h3 className="text-base font-bold text-slate-950">{sub.subHeading}</h3>
                          {sub.content.map((c, cIdx) => (
                            <p key={cIdx} className="text-sm text-slate-600 leading-relaxed">
                              {c}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {sec.bullets && (
                    <ul className="space-y-2.5 bg-slate-50 border border-slate-200 rounded-xl p-5">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.internalLink && (
                    <div className="pt-1">
                      <Link
                        to={sec.internalLink.url}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700"
                      >
                        <span>{sec.internalLink.text}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </section>
              ))}

              {/* Article FAQ Section */}
              {post.faqSnippet.length > 0 && (
                <section className="pt-6 border-t border-slate-200 space-y-4">
                  <h2 className="text-xl font-display font-extrabold text-slate-950">
                    Perguntas Rápidas sobre este Tópico
                  </h2>
                  <div className="space-y-3">
                    {post.faqSnippet.map((faq, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">{faq.question}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Contextual Article CTA */}
              <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display font-bold">{post.ctaTitle}</h2>
                <p className="text-sm text-slate-300 leading-relaxed">{post.ctaDescription}</p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppUrl(config.whatsapp.rawNumber, post.whatsappCustomMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Falar no WhatsApp Agora</span>
                  </a>
                  <Link
                    to="/planos"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    <span>Conferir Planos e Preços</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-950"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar para todos os artigos do Blog</span>
                </Link>
              </div>
            </article>

            {/* Sidebar: Table of Contents & Strategic Internal Links (4 cols) */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Table of Contents */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Neste Artigo
                </div>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {post.sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="text-slate-700 hover:text-orange-600 font-medium transition-colors block"
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Conversion Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3">
                <div className="text-xs text-orange-400 font-semibold">Atendimento Rápido</div>
                <h3 className="text-base font-bold">Precisa de suporte ou quer adquirir sua UniTV?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Receba o link de instalação atualizado ou seu código de recarga de 16 dígitos pelo WhatsApp.
                </p>
                <a
                  href={buildWhatsAppUrl(config.whatsapp.rawNumber, post.whatsappCustomMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Artigos Relacionados
                  </div>
                  <div className="space-y-3">
                    {relatedPosts.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/blog/${rel.slug}`}
                        className="block p-3 bg-white border border-slate-200 rounded-xl hover:border-orange-500 transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-900 leading-snug">{rel.title}</div>
                        <div className="text-[11px] text-orange-600 font-medium mt-1">
                          Ler guia →
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
