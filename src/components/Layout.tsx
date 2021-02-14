import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  main: {
    width: '100%',
    marginTop: 80,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC = ({ children }: LayoutProps) => {
  const { page, main } = useStyles();
  return (
    <>
      <div className={page}>
        <Navbar />
        <main className={main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
