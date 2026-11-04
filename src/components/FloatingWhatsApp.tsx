import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';

export const FloatingWhatsApp: React.FC = () => {
  const location = useLocation();
  const { getWhatsAppLink } = useSiteConfig();

  const getContextKey = () => {
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

  return (
    <div className="hidden md:block fixed bottom-5 right-5 z-40">
      <a
        href={getWhatsAppLink(getContextKey())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com suporte UniTV pelo WhatsApp"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="text-sm font-semibold whitespace-nowrap">Falar no WhatsApp</span>
      </a>
    </div>
  );
};
