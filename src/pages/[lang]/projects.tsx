import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getLocalizationProps } from '../../context/LanguageContext';
import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import Layout from '../../components/Layout';
import Section from '../../components/common/Section';
import Container from '../../components/common/Container';
import EntityCard from '../../components/EntityCard';

const ProjectsPage = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('common')['metaProjectsTitle']}</title>
        <link
          rel="alternate"
          hrefLang="uk"
          href="https://www.yep-studio.com/ua/projects"
        />
        <link
          rel="alternate"
          hrefLang="ru"
          href="https://www.yep-studio.com/ru/projects"
        />
      </Head>
      <Layout>
        <Section>
          <Container>
            <EntityCard
              imgSrc="/images/projects/qwerty.JPG"
              title={t('qwertyName')}
              subtitle={t('qwertySubtitle')}
              desc={t('qwertyDesc')}
              href=""
            />
            <EntityCard
              imgSrc="/images/projects/clever_in_love.jpeg"
              title={t('cleverLovedName')}
              subtitle={t('cleverLovedSubtitle')}
              desc={[
                t('cleverLovedDesc1'),
                t('cleverLovedDesc2'),
                t('cleverLovedDesc3'),
              ]}
              href="https://we.fo/1486601414?p=auto"
            />
            <EntityCard
              imgSrc="/images/projects/m2.png"
              subtitle={t('squareMSubtitle')}
              title={t('squareMName')}
              desc={t('squareMDesc')}
              href="https://we.fo/1565087725?p=auto"
            />
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'projects');
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

export default ProjectsPage;
