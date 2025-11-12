import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------

const metadata = { title: `Overview | Machine - ${CONFIG.site.name}` };

export default function MachineOverviewPage() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <BlankView title="Overview" />
    </>
  );
}
