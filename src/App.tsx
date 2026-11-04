/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider } from './context/ConfigContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileNavigation } from './components/MobileNavigation';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { FreeTrialPage } from './pages/FreeTrialPage';
import { PlansPage } from './pages/PlansPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { InstallationPage } from './pages/InstallationPage';
import { CompatibilityPage } from './pages/CompatibilityPage';
import { FaqPage } from './pages/FaqPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPolicyPage, TermsOfUsePage, ContactPage } from './pages/LegalPages';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-16 md:pb-0">
          <Header />
          <MobileNavigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/teste-gratis" element={<FreeTrialPage />} />
              <Route path="/planos" element={<PlansPage />} />
              <Route path="/avaliacoes" element={<TestimonialsPage />} />
              <Route path="/como-funciona" element={<HowItWorksPage />} />
              <Route path="/como-instalar" element={<InstallationPage />} />
              <Route path="/dispositivos-compativeis" element={<CompatibilityPage />} />
              <Route path="/duvidas-frequentes" element={<FaqPage />} />
              <Route path="/blog" element={<BlogIndexPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
              <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}
