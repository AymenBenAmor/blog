import { GlobalStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
