import React from 'react';
import useTranslation from '../hooks/useTranslation';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('hello')}</h1>
    </>
  );
};

export default Home;
