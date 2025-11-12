import { paths } from 'src/routes/paths'; // Você precisará adicionar os caminhos de 'machine' em paths.js
import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// Reutilize os ícones ou crie novos
const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  dashboard: icon('ic-dashboard'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Machine Overview
   */
  {
    subheader: 'Machine',
    items: [
      {
        title: 'Overview',
        path: paths.machine.root,
        icon: ICONS.dashboard,
      },
    ],
  },
];
