import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSiteConfig } from '../context/ConfigContext';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  breadcrumbs?: BreadcrumbItem[];
  schemaData?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  breadcrumbs,
  schemaData,
}) => {
  const location = useLocation();
  const { config } = useSiteConfig();

  const currentPath = canonicalPath ?? location.pathname;
  const baseUrl = config.siteUrl.replace(/\/$/, '');
  const fullCanonicalUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;
  const fullImageUrl = `${baseUrl}${config.officialLogoUrl}`;

  useEffect(() => {
    document.title = title;

    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImageUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    if (publishedTime) {
      setMetaTag('meta[property="article:published_time"]', 'property', 'article:published_time', publishedTime);
    }
    if (modifiedTime) {
      setMetaTag('meta[property="article:modified_time"]', 'property', 'article:modified_time', modifiedTime);
    }

    if (config.seo.googleSiteVerification) {
      setMetaTag(
        'meta[name="google-site-verification"]',
        'name',
        'google-site-verification',
        config.seo.googleSiteVerification
      );
    }

    let canonicalLink = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // Build combined Schema.org JSON-LD graph
    const graph: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: `${config.brandName} — ${config.portalSubtitle}`,
        url: baseUrl,
        logo: fullImageUrl,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+55-${config.whatsapp.rawNumber}`,
          contactType: 'customer support',
          availableLanguage: ['Portuguese'],
          areaServed: 'BR',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: config.brandName,
        description: config.seo.defaultDescription,
        inLanguage: 'pt-BR',
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: `${baseUrl}${item.path === '/' ? '' : item.path}`,
        })),
      });
    }

    if (schemaData) {
      if (Array.isArray(schemaData)) {
        graph.push(...schemaData);
      } else {
        graph.push(schemaData);
      }
    }

    let scriptEl = document.head.querySelector('script[data-seo-jsonld="true"]') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-seo-jsonld', 'true');
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(graph);
  }, [
    title,
    description,
    fullCanonicalUrl,
    fullImageUrl,
    ogType,
    publishedTime,
    modifiedTime,
    breadcrumbs,
    schemaData,
    baseUrl,
    config,
  ]);

  return null;
};
