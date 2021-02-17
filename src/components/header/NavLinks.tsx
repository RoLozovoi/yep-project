import React from 'react';
import LocaleLink from '../common/LocaleLink';
import useTranslation from '../../hooks/useTranslation';

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

interface NavLinksProps {
  linkStyle: string;
  navStyle: string;
}

const NavLinks = ({ linkStyle, navStyle }: NavLinksProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={navStyle}>
      {links.map(({ tKey, path }) => (
        <LocaleLink key={tKey} href={path} as={path} className={linkStyle}>
          {t('common')[tKey]}
        </LocaleLink>
      ))}
    </div>
  );
};

export default NavLinks;
