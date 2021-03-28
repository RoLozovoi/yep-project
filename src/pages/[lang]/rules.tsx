import { GetStaticPaths, GetStaticProps } from 'next';
import { getLocalizationProps } from '../../context/LanguageContext';
import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import Layout from '../../components/Layout';
import Section from '../../components/common/Section';
import Container from '../../components/common/Container';
import Image from 'next/image';
import Card from '../../components/common/Card';
import { locales } from '../../translations/config';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  rulesBlock: {
    margin: '4rem 1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
    },
  },
  imageBox: {
    margin: '0 3rem',

    '& img': {
      borderRadius: '2rem',
    },

    '@media (max-width: 768px)': {
      margin: 0,
      order: 1,
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    padding: '2rem 0',
  },
  desc: {
    '& h3': {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    '& p': {
      fontSize: '1.6rem',
    },
    '& li': {
      fontSize: '1.5rem',
    },
  },
});

const RulesPage = (): React.ReactElement => {
  const styles = useStyles();
  const { t, locale } = useTranslation();

  return (
    <Layout>
      <Section>
        <Container>
          <Card>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.rulesBlock}>
              <div className={styles.imageBox}>
                <Image
                  src={
                    locale === 'ua'
                      ? '/images/rules/4_tech_ua.png'
                      : '/images/rules/4_tech.png'
                  }
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.desc}>
                <h3>{t('techReqs')}</h3>
                <p>{t('techReq1')}</p>
                <p>{t('techReq2')}</p>
                <p>{t('techReq3')}</p>
              </div>
            </div>

            <div className={styles.rulesBlock}>
              <div className={styles.imageBox}>
                <Image
                  src={
                    locale === 'ua'
                      ? '/images/rules/5_task_ua.png'
                      : '/images/rules/5_task.png'
                  }
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.desc}>
                <h3>{t('taskReq')}</h3>
                <p>
                  <b>{t('taskReq1t')}</b>
                  {t('taskReq1p')}
                </p>
                <p>
                  <b>{t('taskReq2t')}</b>
                  {t('taskReq2p')}
                </p>
                <p>
                  <b>{t('taskReq3t')}</b>
                  {t('taskReq3p')}
                </p>
                <p>{t('taskReqConcl')}</p>
              </div>
            </div>

            <div className={styles.rulesBlock}>
              <div className={styles.imageBox}>
                <Image
                  src={
                    locale === 'ua'
                      ? '/images/rules/6_montage_ua.png'
                      : '/images/rules/6_montage.png'
                  }
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.desc}>
                <h3>{t('montageReq')}</h3>
                <p>{t('montageDesc')}</p>
                <p>{t('montageSubT')}</p>
                <ul>
                  <li>{t('montageEx1')}</li>
                  <li>{t('montageEx2')}</li>
                  <li>{t('montageEx3')}</li>
                  <li>{t('montageEx4')}</li>
                </ul>
              </div>
            </div>

            <div className={styles.rulesBlock}>
              <div className={styles.imageBox}>
                <Image
                  src="/images/rules/7_rules.png"
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.desc}>
                <h3>{t('correctionsReq')}</h3>
                <p>{t('corrections1p')}</p>
                <p>{t('corrections2p')}</p>
                <p>{t('corrections3p')}</p>
              </div>
            </div>

            <div className={styles.rulesBlock}>
              <div className={styles.imageBox}>
                <Image
                  src={
                    locale === 'ua'
                      ? '/images/rules/8_corrections_ua.png'
                      : '/images/rules/8_corrections.png'
                  }
                  width={300}
                  height={300}
                />
              </div>
              <div className={styles.desc}>
                <h3>{t('correctionsImpossibleTitle')}</h3>
                <ul>
                  <li>{t('correctionsItem1')}</li>
                  <li>{t('correctionsItem2')}</li>
                  <li>
                    <ul>
                      <li>{t('correctionsItem2subitem1')}</li>
                      <li>{t('correctionsItem2subitem2')}</li>
                    </ul>
                  </li>
                  <li>{t('correctionsItem3')}</li>
                  <li>{t('correctionsItem4')}</li>
                  <li>{t('correctionsItem5')}</li>
                </ul>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'rules');

  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default RulesPage;
