import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles/variables';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles({
  footer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '160px',
    borderTop: '1px solid #eaeaea',
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
});

const Footer = (): React.ReactElement => {
  const styles = useStyles();
  return (
    <div className={styles.footer}>
      <div>
        <h4>YEP Podcast</h4>
        <p>Copyright &copy; 2020-2021</p>
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
      <div>
        <Link href="/rules">Правила</Link>
      </div>
    </div>
  );
};

export default Footer;
