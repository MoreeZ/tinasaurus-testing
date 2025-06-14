import React from 'react';
import { TinaProvider as TinaCMSProvider, TinaCMS } from 'tinacms';

export function TinaProvider({ children }: { children: React.ReactNode }) {
  const cms = React.useMemo(() => {
    return new TinaCMS({
      enabled: true,
      sidebar: true
    });
  }, []);

  return <TinaCMSProvider cms={cms}>{children}</TinaCMSProvider>;
}
