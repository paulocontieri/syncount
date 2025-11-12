// ======================================================================
// 📁 ARQUIVO: src/layouts/config-nav-machine.jsx
// 🔹 Função: Define o menu lateral (sidebar) exclusivo do módulo Machine
// 🔹 Cada módulo pode ter seu próprio "navData"
// ======================================================================

import { paths } from 'src/routes/paths'; // Caminhos nomeados globais
import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------
// 🔸 Helper para facilitar a definição de ícones do menu
//     - Usa o mesmo padrão do layout principal
// ----------------------------------------------------------------------
const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

// ----------------------------------------------------------------------
// 🔸 Dicionário de ícones usados neste módulo
//     - Facilita reaproveitamento e manutenção
// ----------------------------------------------------------------------
const ICONS = {
  dashboard: icon('ic-dashboard'),
};

// ----------------------------------------------------------------------
// 🔸 Estrutura de navegação (menu lateral) do módulo Machine
//     - "subheader" define o título da seção
//     - "items" contém as opções de menu
// ----------------------------------------------------------------------
export const navData = [
  {
    subheader: 'Gestão de Maquinário',
    items: [
      {
        title: 'Visão Geral',
        path: paths.machine.root, // ✅ /maquinas
        icon: ICONS.dashboard,
      },
    ],
  },
];
