import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../translations/getInitialLocale';

const Services: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}${router.asPath}`);
  });

  return (
    <Head>
      <title>Services Page</title>
    </Head>
  );
};

export default Services;
