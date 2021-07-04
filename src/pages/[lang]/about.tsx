import useTranslation from '../../hooks/useTranslation';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getLocalizationProps } from '../../context/LanguageContext';
import Layout from '../../components/Layout';
import Section from '../../components/common/Section';
import Container from '../../components/common/Container';
import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles/variables';

const useStyles = makeStyles({
  'person-block': {
    display: 'grid',
    zIndex: 5,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5rem',
    marginBottom: '5rem',

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
    },
  },
  'person-block__image': {
    borderRadius: '50%',
    color: '#333',
    boxShadow: '0 3px 10px rgb(0 0 0 / 20%)',
    padding: 20,
    margin: 10,
  },
  'person-block__description': {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',

    '& h3': {
      textAlign: 'center',
      color: colors.secondary,
      fontSize: '4rem',
      fontWeight: 'bold',
      padding: '2.5rem 0',
    },
    '& p': {
      fontSize: '2rem',
    },
  },
  subtitle: {
    textAlign: 'center',
    padding: '3.5rem',
    fontSize: '4.5rem',
    fontWeight: 'bold',

    '@media (max-width: 576px)': {
      fontSize: '3rem',
    },
  },
});

const AboutPage = (): JSX.Element => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common')['metaAboutTile']}</title>
        <link
          rel="alternate"
          hrefLang="uk"
          href="https://www.yep-studio.com/ua/about"
        />
        <link
          rel="alternate"
          hrefLang="ru"
          href="https://www.yep-studio.com/ru/about"
        />
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className={styles['person-block']}>
              <Image
                src="/images/about/ksu.png"
                className={styles['person-block__image']}
                width={450}
                height={420}
                quality={100}
              />
              <div className={styles['person-block__description']}>
                <h3>{t('latsvievaH')}</h3>
                <p>{t('latsvievaP')}</p>
              </div>
            </div>
            <div className={styles['person-block']}>
              <div className={styles['person-block__description']}>
                <h3>{t('tadaiH')}</h3>
                <p>{t('tadaiP')}</p>
              </div>
              <Image
                src="/images/about/tanya.png"
                className={styles['person-block__image']}
                width={450}
                height={420}
                quality={100}
              />
            </div>
            <h2 className={styles.subtitle}>{t('editorsTitle')}</h2>
            <div className={styles['person-block']}>
              <Image
                src="/images/about/dima.png"
                className={styles['person-block__image']}
                width={450}
                height={420}
                quality={100}
              />
              <div className={styles['person-block__description']}>
                <h3>{t('dimaH')}</h3>
                <p>{t('dimaP')}</p>
                <p>{t('dimaAudioPortfolio')}</p>
                <p>{t('dimaVideoPortfolio')}</p>
              </div>
            </div>
            <div className={styles['person-block']}>
              <div className={styles['person-block__description']}>
                <h3>{t('ilyaH')}</h3>
                <p>{t('ilyaP')}</p>
                <p>{t('ilyaAudioPortfolio')}</p>
                <p>{t('ilyaVideoPortfolio')}</p>
              </div>
              <Image
                src="/images/about/illya.png"
                className={styles['person-block__image']}
                width={450}
                height={420}
                quality={100}
              />
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'about');
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

export default AboutPage;
