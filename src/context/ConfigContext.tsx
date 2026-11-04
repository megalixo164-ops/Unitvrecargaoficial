import React, { createContext, useContext } from 'react';
import { DEFAULT_SITE_CONFIG, SiteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface ConfigContextType {
  config: SiteConfig;
  getWhatsAppLink: (pageKey?: keyof SiteConfig['whatsapp']['messages'] | string, customText?: string) => string;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const config = DEFAULT_SITE_CONFIG;

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
        getWhatsAppLink,
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
