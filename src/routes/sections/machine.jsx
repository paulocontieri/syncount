// ======================================================================
// 📁 ARQUIVO: src/routes/sections/machine.jsx
// 🔹 Função: Define as rotas e estrutura do módulo "Machine"
// 🔹 Integração: Usa o mesmo layout principal do Dashboard
// ======================================================================

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// ----------------------------------------------------------------------
// 🔸 Importações globais de configuração e layout
// ----------------------------------------------------------------------
import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard'; // Layout padrão reutilizável

// 🔸 Importa o menu lateral específico do módulo Machine
import { navData as machineNavData } from 'src/layouts/config-nav-machine';

// 🔸 Componente de carregamento (loader de transição)
import { LoadingScreen } from 'src/components/loading-screen';

// 🔸 Guardião de autenticação (protege as rotas internas)
import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------
// 🔸 Páginas carregadas de forma assíncrona (lazy loading)
// ----------------------------------------------------------------------
const OverviewPage = lazy(() => import('src/pages/machine/overview'));

// ----------------------------------------------------------------------
// 🔸 Estrutura do layout aplicada ao módulo Machine
//     - Reutiliza DashboardLayout
//     - Substitui o menu lateral por machineNavData
// ----------------------------------------------------------------------
const layoutContent = (
  <DashboardLayout data={{ nav: machineNavData }}>
    <Suspense fallback={<LoadingScreen />}>
      {/* Outlet é onde as páginas internas (overview, etc.) são renderizadas */}
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

// ----------------------------------------------------------------------
// 🔸 Exporta as rotas do módulo Machine
//     - O AuthGuard garante que apenas usuários logados acessem
// ----------------------------------------------------------------------
export const machineRoutes = [
  {
    path: 'machine', // rota base: /machine
    element: CONFIG.auth.skip ? (
      <>{layoutContent}</> // se auth.skip = true, não exige login
    ) : (
      <AuthGuard>{layoutContent}</AuthGuard> // se auth.skip = false, exige login
    ),
    children: [
      // Página inicial padrão (/machine)
      { element: <OverviewPage />, index: true },
    ],
  },
];
