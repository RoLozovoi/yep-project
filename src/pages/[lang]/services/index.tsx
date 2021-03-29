import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { makeStyles } from '@material-ui/core';

import { getLocalizationProps } from '../../../context/LanguageContext';
import useTranslation from '../../../hooks/useTranslation';
import Layout from '../../../components/Layout';
import Section from '../../../components/common/Section';
import Container from '../../../components/common/Container';
import ServiceCard from '../../../components/ServiceCard';
import ContactDialog from '../../../components/ContactDialog';

const useStyles = makeStyles({
  mainServices: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
    },
  },
  secondaryServices: {
    paddingTop: '5rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const ServicesPage = (): React.ReactElement => {
  const [openDialog, setOpenDialog] = useState(false);
  const [descriptionText, setDescriptionText] = useState('');
  const styles = useStyles();
  const { t, locale } = useTranslation();

  const handleDialogState = () => {
    setOpenDialog(!openDialog);
  };

  const handlePurchase = (text) => () => {
    setDescriptionText(text);
    handleDialogState();
  };

  return (
    <Layout>
      <ContactDialog
        open={openDialog}
        onClose={handleDialogState}
        initialText={descriptionText}
        dialogTitle={t('purchaseHeader')}
      />
      <Section>
        <Container>
          <div className={styles.mainServices}>
            <ServiceCard
              title={t('companyPodcastTitle')}
              desc={t('companyPodcastDesc')}
              imgSrc={
                locale === 'ua'
                  ? '/images/services/podcast_for_comp_ua.png'
                  : '/images/services/podcast_for_comp_ru.png'
              }
              imgSize={500}
              buttonLabel={t('common')['details']}
              withLink="/services/company-podcast"
            />
            <ServiceCard
              title={t('privatePodcastTitle')}
              desc={t('privatePodcastDesc')}
              imgSrc={
                locale === 'ua'
                  ? '/images/services/podcast_idea_ua.png'
                  : '/images/services/podcast_idea_ru.png'
              }
              imgSize={500}
              buttonLabel={t('common')['details']}
              withLink="/services/private-podcast"
            />
          </div>
          <div className={styles.secondaryServices}>
            <ServiceCard
              title={t('consultingTitle')}
              desc={t('consultingDesc')}
              imgSrc={
                locale === 'ua'
                  ? '/images/services/consult_ua.png'
                  : '/images/services/consult_ru.png'
              }
              imgSize={300}
              buttonLabel={t('common')['buy']}
              onClick={handlePurchase(t('consultingInitialDesc'))}
            />
            <ServiceCard
              title={t('montageTitle')}
              desc={t('montageDesc')}
              imgSrc="/images/services/montaj.png"
              imgSize={300}
              buttonLabel={t('common')['details']}
              withLink="/services/montage"
            />
            <ServiceCard
              title={t('recordingTitle')}
              desc={t('recordingDesc')}
              imgSrc={
                locale === 'ua'
                  ? '/images/services/recording_ua.png'
                  : '/images/services/recording_ru.png'
              }
              imgSize={300}
              buttonLabel={t('common')['buy']}
              onClick={handlePurchase(t('recordingInitialDesc'))}
            />
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'services');
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
export default ServicesPage;
