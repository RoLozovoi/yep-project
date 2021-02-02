import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  NextPageContext,
} from 'next';
import { getLocalizationProps } from '../../context/LanguageContext';
import useTranslation from '../../hooks/useTranslation';
import React from 'react';

const IndexPage: NextPage<NextPageContext> = () => {
  const { t, locale } = useTranslation();
  console.log('rendered ?');
  return (
    <>
      <h1>{t('hello')}</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'home');
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['ru', 'ua'].map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default IndexPage;
