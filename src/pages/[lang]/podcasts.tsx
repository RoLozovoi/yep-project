import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getLocalizationProps } from '../../context/LanguageContext';
import useTranslation from '../../hooks/useTranslation';
import Layout from '../../components/Layout';
import Section from '../../components/common/Section';
import Container from '../../components/common/Container';
import React from 'react';
import EntityCard from '../../components/EntityCard';

const PodcastsPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common')['metaPodcastsTitle']}</title>
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
      <Layout>
        <Section>
          <Container>
            <EntityCard
              imgSrc="/images/podcasts/snobs_logo.png"
              title={t('snobsName')}
              subtitle={t('snobsSubtitle')}
              desc={t('snobsDesc')}
              href="https://we.fo/1491888204?p=auto"
            />
            <EntityCard
              imgSrc="/images/podcasts/dogs_logo.png"
              title={t('gotADogName')}
              subtitle={t('gotADogSubtitle')}
              desc={t('gotADogDesc')}
              href="https://we.fo/1538378031?p=auto"
            />
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'podcasts');
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['ru', 'ua'].map((lang) => ({
    params: { lang },
  })),
  fallback: false,
});

export default PodcastsPage;
