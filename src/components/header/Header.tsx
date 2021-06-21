import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(() => ({
  header: {
    width: '100%',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: colors.white,

    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    cursor: 'pointer',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  burger: {
    color: colors.black,
    fontSize: '3rem',
  },
  link: {
    color: colors.black,
    padding: 10,
    fontSize: 18,
    '&:hover': {
      borderBottom: `2px solid ${colors.black}`,
    },
  },
  mobileLinks: {
    display: 'flex',
    flexFlow: 'column',
    minWidth: '25rem',
  },
  desktopLinks: {
    paddingLeft: '3.5rem',
  },
  mediakitButton: {
    padding: '7px 15px',
    margin: '10px',
    fontSize: '1.2rem',
  },
}));

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (): JSX.Element => {
  const styles = useStyles();
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () =>
      window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return (
    <HideOnScroll>
      <AppBar className={styles.header}>
        {mobileView ? (
          <MobileView styles={styles} />
        ) : (
          <DesktopView styles={styles} />
        )}
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
