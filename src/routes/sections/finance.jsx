// src/routes/sections/finance.jsx
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';
import { navData as financeNavData } from 'src/layouts/config-nav-finance';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// lazy load das páginas
const PayablesPage = lazy(() => import('src/pages/finance/payables'));
const ReceivablesPage = lazy(() => import('src/pages/finance/receivables'));
const CategoriesPage = lazy(() => import('src/pages/finance/categories'));
const PaymentMethodsPage = lazy(() => import('src/pages/finance/payment-methods'));
const AccountsPage = lazy(() => import('src/pages/finance/accounts'));
const ReportsExpensesPage = lazy(() => import('src/pages/finance/reports-expenses'));
const ReportsRevenuePage = lazy(() => import('src/pages/finance/reports-revenue'));
const ReportsCashflowPage = lazy(() => import('src/pages/finance/reports-cashflow'));

const layoutContent = (
  <DashboardLayout data={{ nav: financeNavData }}>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const financeRoutes = [
  {
    path: 'financeiro',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { path: 'contas-a-pagar', element: <PayablesPage /> },
      { path: 'contas-a-receber', element: <ReceivablesPage /> },
      { path: 'categorias', element: <CategoriesPage /> },
      { path: 'formas-de-pagamento', element: <PaymentMethodsPage /> },
      { path: 'contas-financeiras', element: <AccountsPage /> },
      { path: 'relatorios/despesas', element: <ReportsExpensesPage /> },
      { path: 'relatorios/receitas', element: <ReportsRevenuePage /> },
      { path: 'relatorios/fluxo-de-caixa', element: <ReportsCashflowPage /> },
    ],
  },
];
