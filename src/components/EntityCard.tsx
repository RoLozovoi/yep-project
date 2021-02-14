import React from 'react';
import Image from 'next/image';
import Card from './common/Card';
import useTranslation from '../hooks/useTranslation';
import { colors } from '../styles/variables';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  entity: {
    backgroundColor: colors.dark_white,
    margin: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',

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
    },
  },
  info: {
    display: 'flex',
    flexFlow: 'column',
    position: 'relative',

    '& a': {
      alignSelf: 'flex-end',
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    padding: '2rem 0',
  },
  subtitle: {
    fontSize: '2rem',
  },
  desc: {
    fontSize: '1.6rem',
    flexGrow: 1,
  },
  button: {
    padding: '1rem 3rem',
    fontSize: '1.5rem',
    alignSelf: 'flex-end',
  },
});

interface EntityCardProps {
  imgSrc: string;
  title: string;
  subtitle?: string;
  desc: string | string[];
  href: string;
}

const EntityCard = ({
  imgSrc,
  title,
  subtitle,
  desc,
  href,
}: EntityCardProps): JSX.Element => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <Card className={styles.entity}>
      <div className={styles.imageBox}>
        <Image src={imgSrc} width={300} height={300} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        {typeof desc === 'string' ? (
          <p className={styles.desc}>{desc}</p>
        ) : (
          desc.map((descItem: string, index) => (
            <p className={styles.desc} key={index}>
              {descItem}
            </p>
          ))
        )}
        {href ? (
          <a href={href} target="_blank" rel="noreferrer">
            <Button
              className={styles.button}
              variant="contained"
              color="secondary"
            >
              {t('common')['listenTo']}
            </Button>
          </a>
        ) : (
          <Button
            className={styles.button}
            variant="contained"
            color="secondary"
            disabled
          >
            {t('common')['listenTo']}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default EntityCard;
