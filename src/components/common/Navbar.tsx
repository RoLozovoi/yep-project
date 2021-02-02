import navStyles from '../../styles/Nav.module.scss';
import Link from 'next/link';
import useTranslation from '../../hooks/useTranslation';
import LocaleSwitcher from './LocaleSwitcher';

const Navbar = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={navStyles.nav}>
      <Link href="/">LOGO</Link>
      <Link href={`/about`}>{t('common')['navAbout']}</Link>
      <Link href={`/projects`}>{t('common')['navProjects']}</Link>
      <Link href={`/podcasts`}>{t('common')['navPodcasts']}</Link>
      <Link href={`/services`}>{t('common')['navServices']}</Link>
      <Link href={`/contacts`}>{t('common')['navContacts']}</Link>
      <LocaleSwitcher />
    </div>
  );
};
export default Navbar;
