import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../translations/getInitialLocale';

const Podcasts: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}${router.asPath}`);
  });

  return (
    <Head>
      <title>Podcasts Page</title>
      <link
        rel="alternate"
        hrefLang="uk"
        href="https://www.yep-studio.com/ua/podcasts"
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href="https://www.yep-studio.com/ru/podcasts"
      />
    </Head>
  );
};

export default Podcasts;
