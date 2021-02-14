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
    </Head>
  );
};

export default Podcasts;
