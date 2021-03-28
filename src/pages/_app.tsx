import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

import '../styles/globals.scss';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App<{ err: any }> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps, router }: AppProps = this.props;

    return (
      <>
        <Head>
          <title>YEP podcast</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <LanguageProvider localization={pageProps.localization}>
            <Component {...pageProps} key={router.route} />
          </LanguageProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
