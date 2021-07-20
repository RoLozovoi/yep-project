import React from 'react';
import Head from 'next/head';
import { getInitialLocale } from '../translations/getInitialLocale';

const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <Head>
      <title>Home Page</title>
      <link
        rel="alternate"
        hrefLang="uk"
        href="https://www.yep-studio.com/ua"
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href="https://www.yep-studio.com/ru"
      />
    </Head>
  );
};

export default Index;
