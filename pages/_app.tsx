import { GlobalStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
