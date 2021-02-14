import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';

import { getLocalizationProps } from '../../context/LanguageContext';
import useTranslation from '../../hooks/useTranslation';

import Layout from '../../components/Layout';
import Section from '../../components/common/Section';
import Container from '../../components/common/Container';
import Card from '../../components/common/Card';
import ContactForm from '../../components/common/ContactForm';

const useStyles = makeStyles({
  contacts: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4rem',
    padding: '8rem 0',

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
    },
  },
  contactsInfo: {
    '& h3': {
      textAlign: 'center',
      fontSize: '4rem',
    },

    '& p': {
      fontSize: '2rem',
      padding: '2rem 0',
    },

    '& a': {},
  },
});

const ContactsPage = (): React.ReactElement => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <Layout>
      <Section>
        <Container className={styles.contacts}>
          <div className={styles.contactsInfo}>
            <h3>{t('feedbackTitle')}</h3>
            <p>{t('feedbackDesc')}</p>
            <p>
              {t('feedbackParagraphPart1')}
              <Link href="mailto:moitvoipodcast@gmail.com">
                moitvoipodcast@gmail.com
              </Link>
              {t('feedbackParagraphPart2')}
              <Link href="https://t.me/ta_tadai" target="_blank" rel="noopener">
                @ta_tadai
              </Link>{' '}
              &#47;{' '}
              <Link href="https://t.me/Lats_k" target="_blank" rel="noopener">
                @Lats_k
              </Link>
              &#46;
            </p>
          </div>
          <div>
            <Card>
              <ContactForm />
            </Card>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'contacts');
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

export default ContactsPage;
