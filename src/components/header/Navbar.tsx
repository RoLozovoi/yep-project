import Image from 'next/image';
import useTranslation from '../../hooks/useTranslation';
import LocaleSwitcher from '../common/LocaleSwitcher';
import LocaleLink from '../common/LocaleLink';
import Header from './Header';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles/variables';

const useStyles = makeStyles({
  navbar: {
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 20,
    height: 80,
    padding: 15,
    backgroundColor: colors.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media (max-width: 768px)': {
      flexFlow: 'wrap',
    },
  },
  link: {
    color: colors.black,
    padding: 10,
    fontSize: 18,
    '&:hover': {
      borderBottom: `2px solid ${colors.black}`,
    },
  },
  logo: {
    cursor: 'pointer',
  },
});

type PathLink = {
  tKey: string;
  path: string;
};

const links: Array<PathLink> = [
  { tKey: 'navAbout', path: '/about' },
  { tKey: 'navProjects', path: '/projects' },
  { tKey: 'navPodcasts', path: '/podcasts' },
  { tKey: 'navServices', path: '/services' },
  { tKey: 'navContacts', path: '/contacts' },
];

const Navbar = (): JSX.Element => {
  const styles = useStyles();
  const { t, locale } = useTranslation();

  console.log('locale', locale);
  return (
    <div className={styles.navbar}>
      <Header />
      <LocaleLink href={`/${locale}`} as="/">
        <div className={styles.logo}>
          <Image
            src="/images/black_logo.png"
            alt="Site Logo"
            layout="fixed"
            width={128}
            height={55}
            className={styles.logo}
          />
        </div>
      </LocaleLink>
      <div>
        {links.map(({ tKey, path }) => (
          <LocaleLink
            key={tKey}
            href={`/${locale}${path}`}
            as={path}
            className={styles.link}
          >
            {t('common')[tKey]}
          </LocaleLink>
        ))}
      </div>
      {/*<LocaleSwitcher />*/}
    </div>
  );
};

export default Navbar;
