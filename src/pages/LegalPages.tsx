import React, { useState } from 'react';
import { MessageCircle, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { buildWhatsAppUrl } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  const { config } = useSiteConfig();
  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Política de Privacidade (LGPD)', path: '/politica-de-privacidade' },
  ];

  return (
    <>
      <SEOHead
        title="Política de Privacidade e LGPD — Portal UniTV"
        description="Conheça a Política de Privacidade do portal comercial autorizado UniTV em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)."
        canonicalPath="/politica-de-privacidade"
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-slate-950 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Política de Privacidade e Proteção de Dados (LGPD)
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Última atualização: 04 de novembro de 2026 · Adequação à Lei nº 13.709/2018
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-950">1. Compromisso com a Privacidade</h2>
          <p>
            Este portal comercial autorizado da <strong>{config.brandName}</strong> respeita a privacidade de todos
            os visitantes e atua em estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD — Lei
            Federal nº 13.709/2018).
          </p>

          <h2 className="text-xl font-bold text-slate-950">2. Coleta de Dados</h2>
          <p>
            Não exigimos cadastro prévio, criação de senhas ou fornecimento de dados de cartão de crédito para a
            navegação nas páginas informativas, tutoriais e artigos deste portal. Quando o visitante opta
            voluntariamente por iniciar atendimento via WhatsApp ({config.whatsapp.formattedNumber}), os dados de
            contato fornecidos na conversa são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prestar suporte técnico de instalação e esclarecimento de dúvidas;</li>
            <li>Enviar códigos de ativação/recarga adquiridos pelo cliente;</li>
            <li>Auxiliar em solicitações de renovação quando demandado pelo próprio usuário.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-950">3. Uso de Cookies e Métricas Analíticas</h2>
          <p>
            Utilizamos apenas cookies técnicos essenciais para o funcionamento do site e ferramentas analíticas
            agregadas (como Google Analytics 4 e Google Search Console) com a finalidade de compreender quais
            tutoriais e páginas são mais úteis aos visitantes, sem identificar individualmente o usuário.
          </p>

          <h2 className="text-xl font-bold text-slate-950">4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seu número de telefone ou informações de atendimento com
            terceiros para fins publicitários.
          </p>

          <h2 className="text-xl font-bold text-slate-950">5. Direitos do Titular dos Dados</h2>
          <p>
            Nos termos do Art. 18 da LGPD, você pode solicitar a qualquer momento a confirmação, atualização ou
            exclusão do seu histórico de contato comercial diretamente pelo nosso canal oficial de WhatsApp:{' '}
            <strong>{config.whatsapp.formattedNumber}</strong>.
          </p>
        </div>
      </section>
    </>
  );
};

export const TermsOfUsePage: React.FC = () => {
  const { config } = useSiteConfig();
  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Termos de Uso e Avisos Comerciais', path: '/termos-de-uso' },
  ];

  return (
    <>
      <SEOHead
        title="Termos de Uso e Avisos Comerciais — Portal UniTV"
        description="Leia os Termos de Uso, condições comerciais dos planos pré-pagos, regras do teste grátis de 3 dias e requisitos técnicos de compatibilidade da UniTV."
        canonicalPath="/termos-de-uso"
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-slate-950 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Termos de Uso e Avisos Comerciais
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Transparência nas informações comerciais, requisitos de uso e suporte ao cliente
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-950">1. Natureza do Portal Comercial</h2>
          <p>{config.commercialDisclaimer}</p>

          <h2 className="text-xl font-bold text-slate-950">2. Requisitos de Compatibilidade e Internet</h2>
          <p>
            O funcionamento adequado do aplicativo UniTV requer dispositivo compatível com sistema operacional
            Android (Smart TV Android/Google TV, TV Box, Amazon Fire TV Stick ou smartphone Android) e conexão de
            internet banda larga estável (recomendado mínimo de 15 Mbps a 30 Mbps). Recomendamos sempre verificar a
            compatibilidade do seu aparelho antes da aquisição de planos.
          </p>

          <h2 className="text-xl font-bold text-slate-950">3. Códigos de Recarga e Planos Pré-Pagos</h2>
          <p>
            Os planos comercializados (Mensal, Trimestral, Semestral e Anual) operam no modelo pré-pago, sem
            fidelidade contratual e sem cobrança automática recorrente. Após o envio e ativação de um código de
            recarga de 16 dígitos em uma conta, os dias correspondentes são creditados diretamente no servidor da
            plataforma.
          </p>

          <h2 className="text-xl font-bold text-slate-950">4. Período de Avaliação (Teste Grátis)</h2>
          <p>{config.trial.importantNotice}</p>
        </div>
      </section>
    </>
  );
};

export const ContactPage: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const [name, setName] = useState('');
  const [deviceType, setDeviceType] = useState('Smart TV Android / Google TV');
  const [subject, setSubject] = useState('Conhecer Planos e Preços');
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Contato e Atendimento', path: '/contato' },
  ];

  const handleStartWhatsAppWithDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
    const customMsg = `Olá! Meu nome é ${name.trim()}. Tenho um aparelho [${deviceType}] e gostaria de atendimento sobre: ${subject}.`;
    const url = buildWhatsAppUrl(config.whatsapp.rawNumber, customMsg);
    window.location.href = url;
  };

  return (
    <>
      <SEOHead
        title="Contato e Suporte UniTV — Atendimento via WhatsApp"
        description="Fale com o atendimento comercial e suporte técnico da UniTV pelo WhatsApp. Tire dúvidas sobre planos, teste grátis de 3 dias, instalação e ativação."
        canonicalPath="/contato"
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} dark />
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-orange-400">
              Canal Oficial de Atendimento · Resposta Rápida via WhatsApp
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              Fale com Nossa Equipe pelo WhatsApp
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Precisa de ajuda para instalar a UniTV na sua TV, quer consultar o teste grátis ou adquirir seu código
              de recarga de 16 dígitos? Nosso atendimento é rápido e humanizado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
                <h2 className="text-xl font-display font-bold text-slate-950">
                  Informações de Atendimento Direto
                </h2>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">WhatsApp Oficial</div>
                      <div className="font-mono-tabular text-base text-slate-800 mt-0.5">
                        {config.whatsapp.formattedNumber}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Horário de Atendimento</div>
                      <div className="mt-0.5">{config.whatsapp.supportHours}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900">Atendimento Seguro</div>
                      <div className="mt-0.5">
                        Suporte completo para instalação, ativação de código de 16 dígitos e renovação.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink('contact')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir Conversa no WhatsApp Agora</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Pre-Fill Form for WhatsApp (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-display font-bold text-slate-950 mb-2">
                  Iniciar Atendimento Personalizado
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Preencha rapidamente seu nome e aparelho abaixo para já iniciar a conversa no WhatsApp com todas as
                  informações prontas para o atendente:
                </p>

                <form onSubmit={handleStartWhatsAppWithDetails} className="space-y-4">
                  <div>
                    <label htmlFor="visitor-name" className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      id="visitor-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Digite seu nome..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="visitor-device" className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Qual é o seu aparelho?
                      </label>
                      <select
                        id="visitor-device"
                        value={deviceType}
                        onChange={(e) => setDeviceType(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                      >
                        <option value="Smart TV Android / Google TV">Smart TV Android / Google TV</option>
                        <option value="TV Box Android">TV Box Android</option>
                        <option value="Amazon Fire TV Stick">Amazon Fire TV Stick</option>
                        <option value="Celular ou Tablet Android">Celular ou Tablet Android</option>
                        <option value="Smart TV Samsung ou LG">Smart TV Samsung ou LG</option>
                        <option value="Outro aparelho">Outro aparelho</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="visitor-subject" className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Como podemos ajudar?
                      </label>
                      <select
                        id="visitor-subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-orange-600"
                      >
                        <option value="Conhecer o Teste Grátis">Conhecer o Teste Grátis</option>
                        <option value="Conhecer Planos e Preços">Conhecer Planos e Preços</option>
                        <option value="Ajuda para Instalar a UniTV">Ajuda para Instalar a UniTV</option>
                        <option value="Renovar meu acesso UniTV">Renovar meu acesso UniTV</option>
                        <option value="Tirar dúvida de compatibilidade">Tirar dúvida de compatibilidade</option>
                      </select>
                    </div>
                  </div>

                  {submitted && (
                    <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Redirecionando para o atendimento oficial no WhatsApp...</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem para o WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
