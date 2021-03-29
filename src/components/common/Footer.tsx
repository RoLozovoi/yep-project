import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles/variables';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles({
  footer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderTop: '1px solid #eaeaea',
    padding: '5rem 0',
    background: colors.secondary,
    color: colors.white,
    fontWeight: 'bold',

    '& div:first-child': {
      marginLeft: '2rem',

      '& h4': {
        fontSize: '2.5rem',
      },
      '& p': {
        fontSize: '1.4rem',
      },

      '@media (max-width: 768px)': {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      },
    },

    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
    },
  },

  social: {
    display: 'flex',
    justifyContent: 'center',

    '& .icon': {
      margin: '0 1.5rem',
      cursor: 'pointer',
      fontSize: '5rem',
      color: colors.white,
    },
  },

  linkBox: {
    textAlign: 'center',

    '& a': {
      color: colors.white,
      fontSize: '1.6rem',
    },
  },
});

const Footer = (): React.ReactElement => {
  const styles = useStyles();
  const { t, locale } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div>
        <h4>YEP Podcast</h4>
        <p>Copyright &copy; 2019-2021</p>
      </div>
      <div className={styles.social}>
        <a
          href="https://www.instagram.com/yep.podcasts"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="icon" />
        </a>
        <a href="https://t.me/moitvoipodcast" target="_blank" rel="noreferrer">
          <TelegramIcon className="icon" />
        </a>
      </div>
      <div className={styles.linkBox}>
        <Link href={`/${locale}/rules`}>{t('common')['ourRules']}</Link>
      </div>
    </footer>
  );
};

export default Footer;
