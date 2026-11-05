import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, MessageCircle, Tv, Gift, Shield, Key, RefreshCw, Smartphone, CheckCircle2, Play } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BLOG_POSTS, BlogPost } from '../data/blogPosts';

export const BlogArticleVisual: React.FC<{ post: BlogPost; heightClass?: string }> = ({
  post,
  heightClass = 'h-48',
}) => {
  const [imgError, setImgError] = useState(false);

  const themeGradients: Record<BlogPost['visualTheme'], string> = {
    orange: 'from-slate-900 via-slate-900 to-orange-950 border-orange-500/30',
    blue: 'from-slate-900 via-slate-900 to-blue-950 border-blue-500/30',
    purple: 'from-slate-900 via-slate-900 to-purple-950 border-purple-500/30',
    emerald: 'from-slate-900 via-slate-900 to-emerald-950 border-emerald-500/30',
  };

  const renderIcon = () => {
    const cls = 'w-5 h-5 text-orange-400';
    switch (post.iconType) {
      case 'tv':
        return <Tv className={cls} />;
      case 'gift':
        return <Gift className={cls} />;
      case 'shield':
        return <Shield className={cls} />;
      case 'key':
        return <Key className={cls} />;
      case 'refresh':
        return <RefreshCw className={cls} />;
      case 'smartphone':
        return <Smartphone className={cls} />;
      case 'check':
        return <CheckCircle2 className={cls} />;
      default:
        return <Play className={cls} />;
    }
  };

  return (
    <div
      className={`group w-full ${heightClass} rounded-xl bg-gradient-to-br ${themeGradients[post.visualTheme]} border overflow-hidden relative flex flex-col justify-between`}
    >
      {!imgError && post.coverImage && (
        <picture className="absolute inset-0 w-full h-full block">
          <source srcSet={post.coverImage.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
          <img
            src={post.coverImage}
            alt={post.coverAlt}
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </picture>
      )}

      {/* Measured contrast scrim for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/30"
        aria-hidden="true"
      />

      <div className="p-4 flex items-center justify-between relative z-10">
        <span className="text-[11px] font-mono-tabular font-semibold text-white/95 bg-slate-950/75 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/15">
          {post.category.toUpperCase()}
        </span>
        <div className="w-8 h-8 rounded-lg bg-slate-950/75 backdrop-blur-xs border border-white/15 flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>

      <div className="p-4 relative z-10 flex items-center justify-between text-xs text-slate-200">
        <span className="font-medium">App Oficial UniTV · Guia Passo a Passo</span>
      </div>
    </div>
  );
};

export const BlogIndexPage: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Todos',
    'Guias e Tutoriais',
    'Compatibilidade',
    'Planos e Ativação',
    'Avaliação e Recursos',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Blog e Tutoriais', path: '/blog' },
  ];

  return (
    <>
      <SEOHead
        title="Blog UniTV — Tutoriais de Instalação, Dicas e Planos"
        description="Guias e tutoriais sobre a UniTV: aprenda como funciona, como conseguir teste grátis de 3 dias, instalar na Smart TV, usar em Samsung e LG e renovar."
        canonicalPath="/blog"
        breadcrumbs={breadcrumbs}
      />

      {/* Page Hero */}
      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />

          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-orange-400">
              Artigos Técnicos e Guias Passo a Passo · Conteúdo Atualizado
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Blog e Central de Tutoriais UniTV
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Encontre guias detalhados sobre instalação em Smart TVs, funcionamento em TVs Samsung e LG, ativação
              de código de 16 dígitos, renovação e avaliação da plataforma.
            </p>

            <div className="pt-2 max-w-xl relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 mt-1" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artigo (ex: como instalar, Samsung, LG, ativar, renovar)..."
                aria-label="Buscar artigos no blog"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Listing */}
      <section className="py-14 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Category Selector */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200/90 mb-10 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[42px] px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-[0.98] ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <Link to={`/blog/${post.slug}`} className="block mb-4">
                    <BlogArticleVisual post={post} />
                  </Link>

                  {/* Unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.updatedAt}>{post.updatedAt}</time>
                  </div>

                  <h2 className="text-lg font-bold text-slate-950 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700"
                  >
                    <span>Ler guia completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-14 bg-slate-900 text-white rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl font-display font-bold">
                Precisa de auxílio prático para instalar ou ativar sua UniTV?
              </h2>
              <p className="text-sm text-slate-300">
                Nossa equipe envia o código do Downloader e acompanha sua instalação ou recarga pelo WhatsApp.
              </p>
            </div>
            <a
              href={getWhatsAppLink('blog')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors whitespace-nowrap shrink-0"
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
