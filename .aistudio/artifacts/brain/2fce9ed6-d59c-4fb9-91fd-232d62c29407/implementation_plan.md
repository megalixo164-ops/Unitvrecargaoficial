# Atualização da Tabela Comercial de Planos UniTV

Atualização dos valores oficiais dos quatro planos de acesso da UniTV em todo o portal, incluindo o recálculo proporcional da equivalência mensal, a atualização automática dos dados estruturados para mecanismos de busca (Schema.org) e a sincronização imediata com o estado persistido no navegador.

## Decisões Confirmadas e Revisão do Usuário

> [!IMPORTANT]
> As preferências abaixo foram confirmadas e governam a exibição comercial na Página Inicial, na Página de Planos e nos metadados de SEO.

- **Novos Valores Comerciais Confirmados**:
  - **Plano Mensal (30 dias)**: `R$ 29,90`
  - **Plano Trimestral (90 dias)**: `R$ 79,90`
  - **Plano Semestral (180 dias)**: `R$ 159,90`
  - **Plano Anual (365 dias)**: `R$ 289,90`
- **Equivalência Mensal Atualizada**: Exibição ativa dos valores proporcionais mensais (`R$ 29,90 / mês` no Mensal, `Equivalente a R$ 26,63 / mês` no Trimestral, `Equivalente a R$ 26,65 / mês` no Semestral e `Equivalente a R$ 24,15 / mês` no Anual).
- **Destaque Visual Principal**: Manutenção do destaque visual (`featured`) no **Plano Trimestral (R$ 79,90)** como opção de equilíbrio em evidência.

---

## 1. Visão Geral e Conceito Central

- **O que esta atualização entrega**: Alinha todos os pontos de contato comerciais do portal aos novos preços definidos, garantindo consistência visual na vitrine da página inicial, no comparativo detalhado de planos, nas mensagens pré-preenchidas de WhatsApp e nos metadados de produtos indexados pelo Google.
- **Público-Alvo**: Visitantes que pesquisam por preços e condições de contratação ou renovação da UniTV e desejam clareza imediata antes de iniciar o atendimento via WhatsApp.
- **Valor Principal**: Transparência comercial absoluta e atualização automática mesmo para visitantes que já acessaram o portal anteriormente no mesmo navegador.

---

## 2. Experiência do Usuário e Design Visual

- **Fluxo do Visitante**:
  1. O visitante acessa a Página Inicial ou a Página de Planos e visualiza os quatro cartões lado a lado com tipografia tabular (`tabular-nums`) para leitura imediata dos novos preços.
  2. Abaixo de cada preço principal, o subtítulo informa o valor mensal equivalente atualizado.
  3. O **Plano Trimestral (R$ 79,90)** permanece em destaque com superfície escura (`bg-slate-950`), borda de ênfase em laranja oficial (`border-orange-500`) e botão de conversão primário.
  4. Ao clicar em contratar qualquer plano, o visitante é direcionado ao WhatsApp com a mensagem contextualizada do plano escolhido.
- **Identidade Visual e Tipografia**:
  - Preservação da regra tipográfica com `Plus Jakarta Sans` para títulos, `DM Sans` para descrições e `JetBrains Mono` (`font-mono-tabular`) para todos os valores monetários (`R$ 29,90`, `R$ 79,90`, `R$ 159,90` e `R$ 289,90`).
  - Manutenção da distribuição cromática 60-30-10 sem uso de pílulas estáticas desnecessárias.

---

## 3. Decisões de Produto e Arquitetura

- **Decisão 1: Versionamento da Chave de Armazenamento Local**
  - *Abordagem Escolhida*: Incrementar o identificador da configuração persistida no navegador para garantir que os novos valores padrão substituam imediatamente qualquer cache anterior salvo na sessão do usuário, mantendo a capacidade de edição em tempo real pelo painel administrativo do rodapé.
  - *Por quê*: Evita que o navegador continue exibindo os preços antigos salvos anteriormente no `localStorage`.
- **Decisão 2: Sincronização com Schema.org (`Offer`)**
  - *Abordagem Escolhida*: Como os dados estruturados JSON-LD (`SoftwareApplication` e `Product`) leem dinamicamente da configuração centralizada, a atualização dos preços reflete automaticamente nos metadados de rich snippets para o Google.

---

## 4. Arquitetura Técnica e Fluxo de Dados

```
┌──────────────────────────────────────────────────────────────────────┐
│                   Configuração Comercial Central                     │
│  • Plano Mensal:     R$ 29,90  (R$ 29,90 / mês)                      │
│  • Plano Trimestral: R$ 79,90  (Equivalente a R$ 26,63 / mês) [★]    │
│  • Plano Semestral:  R$ 159,90 (Equivalente a R$ 26,65 / mês)        │
│  • Plano Anual:      R$ 289,90 (Equivalente a R$ 24,15 / mês)        │
└──────────────────────────────────┬───────────────────────────────────┘
                                   │
                                   ▼
┌──────────────────────────────────────────────────────────────────────┐
│            Provedor de Estado Comercial (Sincronização v2)           │
│  • Atualiza cache local automaticamente para novos preços            │
│  • Mantém suporte ao Modal Editor Comercial em tempo real            │
└───────────┬──────────────────────┬───────────────────────┬───────────┘
            │                      │                       │
            ▼                      ▼                       ▼
┌───────────────────────┐ ┌────────────────────┐ ┌─────────────────────┐
│   Vitrine de Planos   │ │  Schema.org SEO    │ │  Conversão WhatsApp │
│  • Página Inicial     │ │  • JSON-LD Offers  │ │  • Links diretos    │
│  • Página de Planos   │ │  • Preços em BRL   │ │    por plano        │
└───────────────────────┘ └────────────────────┘ └─────────────────────┘
```
