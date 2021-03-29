import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getLocalizationProps } from '../../../context/LanguageContext';
import { locales } from '../../../translations/config';
import services from '../../../assets/services.json';
import { Button, makeStyles } from '@material-ui/core';
import Container from '../../../components/common/Container';
import Image from 'next/image';
import useTranslation from '../../../hooks/useTranslation';
import ContactDialog from '../../../components/ContactDialog';
import Card from '../../../components/common/Card';

const useStyles = makeStyles({
  service: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    padding: '8rem 0',

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
      margin: '0 auto',
    },
  },
  desc: {
    display: 'flex',
    flexFlow: 'column',
  },
  title: {
    fontSize: '3rem',
    textAlign: 'center',
    paddingBottom: '5rem',

    '@media (max-width: 768px)': {
      textAlign: 'center',
    },
  },
  list: {
    fontSize: '1.8rem',
    listStyle: 'inside',
    flexGrow: 1,

    '& li': {
      padding: '.6rem',
    },
  },
  button: {
    padding: '1rem 3rem',
    fontSize: '1.5rem',
    alignSelf: 'flex-end',
    marginRight: '2rem',
  },
});

type ServiceType = {
  title: string;
  servicesList: string[];
  imgSrc: string;
};
interface ServiceProps {
  service: ServiceType;
}

const Service = ({ service }: ServiceProps): JSX.Element => {
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();
  const styles = useStyles();
  const { title, servicesList, imgSrc } = service;

  const handleDialogState = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <Layout>
      <ContactDialog
        open={openDialog}
        onClose={handleDialogState}
        initialText={title}
        dialogTitle={t('purchaseHeader')}
      />
      <Container>
        <Card className={styles.service}>
          <div className={styles.imageBox}>
            <Image src={imgSrc} width={500} height={500} />
          </div>
          <div className={styles.desc}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
              {servicesList.map((item) => (
                <li key={item.substr(0, 6)}>{item}</li>
              ))}
            </ul>
            <Button
              className={styles.button}
              variant="contained"
              color="secondary"
              onClick={handleDialogState}
            >
              {t('common')['buy']}
            </Button>
          </div>
        </Card>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, 'services');
  const queryId = ctx.params.id;
  const id = Array.isArray(queryId) ? queryId[0] : queryId;
  const service = services[localization.locale][id];

  return {
    props: {
      localization,
      service,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.flatMap((lang) =>
    Object.keys(services[lang]).map((serviceName) => ({
      params: { lang, id: serviceName },
    }))
  ),
  fallback: false,
});

export default Service;
