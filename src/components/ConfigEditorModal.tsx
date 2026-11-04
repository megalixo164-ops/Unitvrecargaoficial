import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Save, Check } from 'lucide-react';
import { useSiteConfig } from '../context/ConfigContext';
import { SiteConfig } from '../config/siteConfig';

export const ConfigEditorModal: React.FC = () => {
  const { config, updateConfig, resetConfig, isEditorOpen, setIsEditorOpen } = useSiteConfig();
  const [draft, setDraft] = useState<SiteConfig>(config);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    setDraft(config);
  }, [config, isEditorOpen]);

  if (!isEditorOpen) return null;

  const handlePlanPriceChange = (planId: string, newPrice: string) => {
    setDraft((prev) => ({
      ...prev,
      plans: prev.plans.map((p) => (p.id === planId ? { ...p, price: newPrice } : p)),
    }));
  };

  const handlePlanEquivChange = (planId: string, newEquiv: string) => {
    setDraft((prev) => ({
      ...prev,
      plans: prev.plans.map((p) => (p.id === planId ? { ...p, equivalentMonthly: newEquiv } : p)),
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(draft);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      setIsEditorOpen(false);
    }, 900);
  };

  const handleReset = () => {
    resetConfig();
    setIsEditorOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-modal-title"
    >
      <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 id="config-modal-title" className="text-lg font-bold text-slate-900">
              Configurações Comerciais Editáveis
            </h2>
            <p className="text-xs text-slate-500">
              Altere valores dos planos, número de WhatsApp e disponibilidade do teste em tempo real.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsEditorOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Fechar painel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-6">
          {/* WhatsApp Centralizado */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Atendimento WhatsApp Centralizado
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Número com DDD (Apenas números)
                </label>
                <input
                  type="text"
                  value={draft.whatsapp.rawNumber}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      whatsapp: { ...draft.whatsapp, rawNumber: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600 font-mono-tabular"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Número Formatado para Exibição
                </label>
                <input
                  type="text"
                  value={draft.whatsapp.formattedNumber}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      whatsapp: { ...draft.whatsapp, formattedNumber: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600 font-mono-tabular"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Horário de Atendimento Exibido
              </label>
              <input
                type="text"
                value={draft.whatsapp.supportHours}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    whatsapp: { ...draft.whatsapp, supportHours: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>

          {/* Valores dos Planos */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Tabela de Preços dos Planos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {draft.plans.map((plan) => (
                <div key={plan.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div className="text-xs font-bold text-slate-900">
                    {plan.name} ({plan.durationDays})
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-0.5">Valor Principal</label>
                    <input
                      type="text"
                      value={plan.price}
                      onChange={(e) => handlePlanPriceChange(plan.id, e.target.value)}
                      className="w-full px-2.5 py-1.5 text-sm bg-white border border-slate-300 rounded-md font-mono-tabular"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-600 mb-0.5">Equivalência Mensal</label>
                    <input
                      type="text"
                      value={plan.equivalentMonthly || ''}
                      onChange={(e) => handlePlanEquivChange(plan.id, e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teste Grátis */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Condições do Teste Grátis
            </h3>
            <label className="flex items-center gap-2.5 text-sm text-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={draft.trial.available}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    trial: { ...draft.trial, available: e.target.checked },
                  })
                }
                className="w-4 h-4 accent-orange-600 rounded"
              />
              <span>Exibir disponibilidade de Teste Grátis para novos aparelhos</span>
            </label>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Descrição das Condições do Teste
              </label>
              <textarea
                rows={2}
                value={draft.trial.durationDescription}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    trial: { ...draft.trial, durationDescription: e.target.value },
                  })
                }
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsEditorOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
              >
                {savedNotice ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Salvo!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Salvar Alterações</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
