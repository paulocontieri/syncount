// ======================================================================
// 📁 ARQUIVO: src/pages/machine/overview.jsx
// 🔹 Função: Página inicial (Overview) do módulo Machine
// 🔹 Padrão: simples, reutiliza componentes visuais genéricos
// ======================================================================

import { Helmet } from 'react-helmet-async'; // Gerencia título e meta tags do documento
import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view'; // Componente genérico de placeholder

// ----------------------------------------------------------------------
// 🔸 Metadados dinâmicos da página (para SEO e título da aba)
// ----------------------------------------------------------------------
const metadata = { title: `Overview | Machine - ${CONFIG.site.name}` };

// ----------------------------------------------------------------------
// 🔸 Componente principal da página
// ----------------------------------------------------------------------
export default function MachineOverviewPage() {
  return (
    <>
      {/* Define o título da página na aba do navegador */}
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Exibe o conteúdo base — neste caso, um componente em branco */}
      <BlankView title="Overview" />
    </>
  );
}
