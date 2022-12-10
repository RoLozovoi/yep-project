import React from 'react';
import { useState } from 'react';
import { Drawer, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavLinks from './NavLinks';
import LogoBox from './LogoBox';
import LocaleSwitcher from '../common/LocaleSwitcher';

const MobileView = ({ styles }): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerState = () => setDrawerOpen(!drawerOpen);

  return (
    <Toolbar>
      <IconButton
        edge="start"
        aria-label="menu"
        aria-haspopup
        onClick={handleDrawerState}
      >
        <MenuIcon className={styles.burger} />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerState}>
        <NavLinks
          linkStyle={styles.link}
          navStyle={styles.mobileLinks}
          buttonStyles={styles.mediakitButton}
        />
      </Drawer>
      <LogoBox className={styles.logo} />
      {/*<LocaleSwitcher />*/}
    </Toolbar>
  );
};
export default MobileView;
