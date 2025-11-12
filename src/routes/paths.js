// ======================================================================
// 📁 ARQUIVO: src/routes/paths.js
// 🔹 Função: Centraliza todas as rotas nomeadas da aplicação
// 🔹 Benefício: evita "strings soltas" e facilita o versionamento/expansão
// ======================================================================

// ----------------------------------------------------------------------
// 🔸 Definição das rotas raiz (root paths) de cada módulo principal
// ----------------------------------------------------------------------
const ROOTS = {
  AUTH: '/auth', // Rotas relacionadas à autenticação
  DASHBOARD: '/dashboard', // Rotas do dashboard principal
  MACHINE: '/maquinas', // Rotas do módulo de Máquinas
  FINANCE: '/financeiro', // Rotas do módulo Financeiro
};

// ----------------------------------------------------------------------
// 🔸 Objeto "paths" exportado globalmente para uso em todo o sistema
// ----------------------------------------------------------------------
export const paths = {
  // Rotas genéricas do sistema
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',

  // =============================================================
  // 🔹 ROTAS DE AUTENTICAÇÃO
  // =============================================================
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },

  // =============================================================
  // 🔹 ROTAS DO DASHBOARD PRINCIPAL
  // =============================================================
  dashboard: {
    root: ROOTS.DASHBOARD,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },

  // =============================================================
  // 🔹 ROTAS DO MÓDULO MACHINE
  // =============================================================
  machine: {
    root: ROOTS.MACHINE, // rota base /machine
    analytics: `${ROOTS.MACHINE}/overview`, // página principal /machine/overview
  },

  finance: {
    root: ROOTS.FINANCE,
    payables: `${ROOTS.FINANCE}/contas-a-pagar`,
    receivables: `${ROOTS.FINANCE}/contas-a-receber`,
    categories: `${ROOTS.FINANCE}/categorias`,
    paymentMethods: `${ROOTS.FINANCE}/formas-de-pagamento`,
    accounts: `${ROOTS.FINANCE}/contas-financeiras`,
    reports: {
      expenses: `${ROOTS.FINANCE}/relatorios/despesas`,
      revenue: `${ROOTS.FINANCE}/relatorios/receitas`,
      cashflow: `${ROOTS.FINANCE}/relatorios/fluxo-de-caixa`,
    },
  },
};
