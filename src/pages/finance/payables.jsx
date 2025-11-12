// ======================================================================
// 📁 ARQUIVO: src/pages/finance/payables.jsx
// 🔹 Função: Página inicial (Overview) do módulo Financeiro > Contas a Pagar
// 🔹 Padrão: simples, usando BlankView como placeholder
// ======================================================================

import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------
// 🔸 Metadados dinâmicos da página
// ----------------------------------------------------------------------
const metadata = { title: `Contas a Pagar | Financeiro - ${CONFIG.site.name}` };

// ----------------------------------------------------------------------
// 🔸 Página principal
// ----------------------------------------------------------------------
export default function PayablesPage() {
  return (
    <>
      {/* Título da aba */}
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Conteúdo Placeholder */}
      <BlankView title="Contas a Pagar" />
    </>
  );
}
