import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../translations/getInitialLocale';

const Contacts: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}${router.asPath}`);
  });

  return (
    <Head>
      <title>Contacts Page</title>
      <link
        rel="alternate"
        hrefLang="uk"
        href="https://www.yep-studio.com/ua/contacts"
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href="https://www.yep-studio.com/ru/contacts"
      />
    </Head>
  );
};

export default Contacts;
