import React from 'react';
import useTranslation from '../hooks/useTranslation';

const Home = (): JSX.Element => {
  const { t, locale } = useTranslation();
  console.log('rendered ?');
  return (
    <>
      <h1>{t('hello')}</h1>
    </>
  );
};

export default Home;
