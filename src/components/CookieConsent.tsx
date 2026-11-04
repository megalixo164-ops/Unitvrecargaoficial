import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'unitv_lgpd_consent_v1';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!accepted) {
        // Respect >= 10s dwell rule so no popup fires on initial load
        const timer = setTimeout(() => {
          setVisible(true);
        }, 12000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    } catch {
      // Ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de Privacidade e Cookies (LGPD)"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 bg-slate-900 text-slate-100 border border-slate-700 rounded-xl p-4 shadow-xl"
    >
      <p className="text-xs text-slate-300 leading-relaxed mb-3">
        Utilizamos cookies essenciais e analíticos para melhorar sua experiência de navegação, de acordo com a Lei
        Geral de Proteção de Dados (LGPD). Consulte nossa{' '}
        <Link to="/politica-de-privacidade" className="underline text-orange-400 hover:text-orange-300">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={handleAccept}
          className="px-3.5 py-1.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors"
        >
          Concordar e Fechar
        </button>
      </div>
    </div>
  );
};
