import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { getLocalizationProps } from '../../context/LanguageContext';
import { makeStyles } from '@material-ui/core';
import FastForwardIcon from '@material-ui/icons/FastForward';
import BuildIcon from '@material-ui/icons/Build';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import useTranslation from '../../hooks/useTranslation';
import Layout from '../../components/Layout';
import Container from '../../components/common/Container';
import Section from '../../components/common/Section';
import Card from '../../components/common/Card';
import { colors } from '../../styles/variables';

const useStyles = makeStyles({
  banner: {
    padding: '8rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: colors.white,

    '& .logo-wrapper': {
      maxWidth: '66rem',
      maxHeight: '30rem',
      paddingBottom: '5rem',
    },

    '& .title': {
      fontSize: '7.5rem',
      fontWeight: 'bold',
      padding: '4rem 0',
    },
    '& .subtitle': {
      fontSize: '4rem',
    },
  },
  benefitsSection: {
    paddingTop: '11rem',
    backgroundImage: 'url("images/home_mic.png")',
    // width: '100%',
    backgroundPosition: 'center' /* Center the image */,
    backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
    backgroundSize:
      '100% 100%' /* Resize the background image to cover the entire container */,

    '@media (max-width: 992px)': {
      background: 'initial',
    },
  },
  benefitsBlock: {
    padding: '4rem 0 15rem 0',

    '& .podcasts-description': {
      maxWidth: 600,
      marginLeft: 'auto',
      '& h3': {
        fontSize: '4rem',
        paddingBottom: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
      },

      '& h4': {
        fontSize: '2.5rem',
        paddingTop: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
      },

      '& p': {
        fontSize: '2rem',
      },

      '@media (max-width: 992px)': {
        margin: '0 auto',
      },
    },
  },

  servicesBlock: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '2rem 0 8rem 0',

    '& .card': {
      width: 300,
      margin: 15,
      textAlign: 'center',

      '& h5': {
        fontSize: '2.2rem',
      },

      '& p': {
        fontSize: '1.8rem',
      },
    },
  },

  partnersBlock: {
    padding: '8rem 0',

    '& h3': {
      fontSize: '4rem',
      textAlign: 'center',
    },

    '& .partners-block': {
      marginTop: '4rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '5rem',

      '&__item': {
        '& img': {
          width: '100%',
          height: 'auto',
        },
      },
    },
  },

  icon: {
    fontSize: '5rem',
    color: colors.secondary,
    margin: 15,
  },
});

const partnersImagePaths: string[] = [
  '/images/partners/arthuss.jpg',
  '/images/partners/gastrofamily.png',
  '/images/partners/hallway.png',
  '/images/partners/kabanosy.png',
  '/images/partners/laba.jpg',
  '/images/partners/mariecosmetics.jpg',
  '/images/partners/oldlev.jpg',
  '/images/partners/decgroup.png',
];

const IndexPage = (): JSX.Element => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <Layout>
      <Section bgColor={colors.primary}>
        <Container className={styles.banner}>
          <div className="logo-wrapper">
            <Image
              src="/images/white_logo.png"
              width={700}
              height={318}
              className="logo-image"
            />
          </div>
          <h1 className="title">{t('title')}</h1>
          <h2 className="subtitle">{t('subtitle')}</h2>
        </Container>
      </Section>
      <Section className={styles.benefitsSection}>
        {/*<div className="image-wrapper">*/}
        {/*  <img src="/images/home_mic.png" />*/}
        {/*</div>*/}
        <Container className={styles.benefitsBlock}>
          <div className="podcasts-description">
            <h3>{t('whyNeededHeading')}</h3>
            <h4>{t('whyNeededFirstH')}</h4>
            <p>{t('whyNeededFirstP')}</p>
            <h4>{t('whyNeededSecondH')}</h4>
            <p>{t('whyNeededSecondP')}</p>
            <h4>{t('whyNeededThirdH')}</h4>
            <p>{t('whyNeededThirdFirstParagraph')}</p>
            <p>{t('whyNeededThirdSecondParagraph')}</p>
          </div>
        </Container>
      </Section>
      <Section bgColor={colors.primary}>
        <Container className={styles.servicesBlock}>
          <Card className="card">
            <h5>{t('responsibilities1H')}</h5>
            <QuestionAnswerIcon className={styles.icon} />
            <p>{t('responsibilities1P')}</p>
          </Card>
          <Card className="card">
            <h5>{t('responsibilities2H')}</h5>
            <FastForwardIcon className={styles.icon} />
            <p>{t('responsibilities2P')}</p>
          </Card>
          <Card className="card">
            <h5>{t('responsibilities3H')}</h5>
            <BuildIcon className={styles.icon} />
            <p>{t('responsibilities3P')}</p>
          </Card>
        </Container>
      </Section>
      <Section>
        <Container className={styles.partnersBlock}>
          <h3>{t('ourPartners')}</h3>
          <div className="partners-block">
            {partnersImagePaths.map((path: string, index) => (
              <div className="partners-block__item" key={path}>
                <img src={path} alt={`partner #${index}`} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
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
