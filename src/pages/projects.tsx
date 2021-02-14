import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../translations/getInitialLocale';

const Projects: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}${router.asPath}`);
  });

  return (
    <Head>
      <title>Projects Page</title>
    </Head>
  );
};

export default Projects;
