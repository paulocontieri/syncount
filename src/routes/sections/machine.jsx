import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard'; // Reutilizando o layout
// 1. Importe o NOVO menu de configuração
import { navData as machineNavData } from 'src/layouts/config-nav-machine';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

// 2. Importe as NOVAS páginas de 'machine'
const OverviewPage = lazy(() => import('src/pages/machine/overview'));

// ----------------------------------------------------------------------

const layoutContent = (
  // 3. Passe o novo menu para o DashboardLayout
  // O DashboardLayout foi feito para aceitar 'data.nav'
  <DashboardLayout data={{ nav: machineNavData }}>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const machineRoutes = [
  {
    path: 'machine', // 4. Defina o caminho base
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <OverviewPage />, index: true }, // Rota /machine
    ],
  },
];
