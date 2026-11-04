import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_SITE_CONFIG, SiteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface ConfigContextType {
  config: SiteConfig;
  updateConfig: (newConfig: SiteConfig) => void;
  resetConfig: () => void;
  getWhatsAppLink: (pageKey?: keyof SiteConfig['whatsapp']['messages'] | string, customText?: string) => string;
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'unitv_portal_commercial_config_v3';

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SITE_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to default config if localStorage is unavailable
    }
    return DEFAULT_SITE_CONFIG;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // Ignore storage quota errors
    }
  }, [config]);

  const updateConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
  };

  const resetConfig = () => {
    setConfig(DEFAULT_SITE_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const getWhatsAppLink = (
    pageKey?: keyof SiteConfig['whatsapp']['messages'] | string,
    customText?: string
  ): string => {
    if (customText) {
      return buildWhatsAppUrl(config.whatsapp.rawNumber, customText);
    }
    const messages = config.whatsapp.messages as Record<string, string>;
    const message = (pageKey && messages[pageKey]) || config.whatsapp.messages.home;
    return buildWhatsAppUrl(config.whatsapp.rawNumber, message);
  };

  return (
    <ConfigContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        getWhatsAppLink,
        isEditorOpen,
        setIsEditorOpen,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export function useSiteConfig(): ConfigContextType {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useSiteConfig must be used within a ConfigProvider');
  }
  return context;
}
