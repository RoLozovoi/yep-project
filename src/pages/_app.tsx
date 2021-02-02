import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <LanguageProvider localization={pageProps.localization}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </LanguageProvider>
);

export default MyApp;

// notes from BRAD TRAVERSY NEXTJS COURSE
