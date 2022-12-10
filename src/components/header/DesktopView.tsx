import { Toolbar } from '@material-ui/core';
import React from 'react';
import NavLinks from './NavLinks';
import LocaleSwitcher from '../common/LocaleSwitcher';
import LogoBox from './LogoBox';

const MobileView = ({ styles }): JSX.Element => (
  <Toolbar className={styles.toolbar}>
    <LogoBox className={styles.logo} />
    <NavLinks
      linkStyle={styles.link}
      navStyle={styles.desktopLinks}
      buttonStyles={styles.mediakitButton}
    />
    {/*<LocaleSwitcher />*/}
  </Toolbar>
);

export default MobileView;
