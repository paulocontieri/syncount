// ======================================================================
// 📁 ARQUIVO: src/layouts/config-nav-finance.jsx
// 🔹 Função: Define o menu lateral (sidebar) do módulo Financeiro
// 🔹 Padrão visual: igual aos demais módulos (usa SvgColor e paths.js)
// ======================================================================

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------
// 🔸 Helper para importar ícones do diretório /assets/icons/navbar
// ======================================================================
const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

// ----------------------------------------------------------------------
// 🔸 Mapa de ícones (Mapeado para ícones EXISTENTES no seu projeto)
// ----------------------------------------------------------------------
const ICONS = {
  // 'ic-payables' (Pagar) ➔ 'ic-invoice' (Fatura)
  payables: icon('ic-invoice'),

  // 'ic-receivables' (Receber) ➔ 'ic-order' (Pedido/Ordem)
  receivables: icon('ic-order'),

  // 'ic-categories' (Categorias) ➔ 'ic-label' (Etiqueta)
  categories: icon('ic-label'),

  // 'ic-payment' (Pagamento) ➔ 'ic-banking' (Banco)
  payment: icon('ic-banking'),

  // 'ic-accounts' (Contas) ➔ 'ic-folder' (Pasta/Agrupador)
  accounts: icon('ic-folder'),

  // 'ic-expense' (Despesas) ➔ 'ic-analytics' (Gráfico/Relatório)
  expenses: icon('ic-analytics'),

  // 'ic-revenue' (Receitas) ➔ 'ic-ecommerce' (Vendas/Comércio)
  revenue: icon('ic-ecommerce'),

  // 'ic-cashflow' (Fluxo de Caixa) ➔ 'ic-kanban' (Fluxo/Kanban)
  cashflow: icon('ic-kanban'),

  // O 'ic-reports' não existe, então usamos 'ic-file' como genérico
  reports: icon('ic-file'),
};

// ----------------------------------------------------------------------
// 🔸 Estrutura do menu do módulo Financeiro
// ----------------------------------------------------------------------
export const navData = [
  {
    subheader: 'Financeiro',
    items: [
      { title: 'Contas a Pagar', path: paths.finance.payables, icon: ICONS.payables },
      { title: 'Contas a Receber', path: paths.finance.receivables, icon: ICONS.receivables },
      { title: 'Categorias', path: paths.finance.categories, icon: ICONS.categories },
      { title: 'Formas de Pagamento', path: paths.finance.paymentMethods, icon: ICONS.payment },
      { title: 'Contas Financeiras', path: paths.finance.accounts, icon: ICONS.accounts },
    ],
  },
  {
    subheader: 'Relatórios',
    items: [
      { title: 'Despesas', path: paths.finance.reports.expenses, icon: ICONS.expenses },
      { title: 'Receitas', path: paths.finance.reports.revenue, icon: ICONS.revenue },
      { title: 'Fluxo de Caixa', path: paths.finance.reports.cashflow, icon: ICONS.cashflow },
    ],
  },
];
