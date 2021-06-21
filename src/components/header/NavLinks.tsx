import React from 'react';
import LocaleLink from '../common/LocaleLink';
import useTranslation from '../../hooks/useTranslation';
import { Button } from '@material-ui/core';

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
  buttonStyles: string;
}

const NavLinks = ({
  linkStyle,
  navStyle,
  buttonStyles,
}: NavLinksProps): JSX.Element => {
  const { t, locale } = useTranslation();
  console.log(buttonStyles);
  return (
    <div className={navStyle}>
      {links.map(({ tKey, path }) => (
        <LocaleLink key={tKey} href={path} as={path} className={linkStyle}>
          {t('common')[tKey]}
        </LocaleLink>
      ))}
      <a
        href={
          locale === 'ru'
            ? '/kits/yep-studio-mediakit-ru.pdf'
            : '/kits/yep-studio-mediakit-ua.pdf'
        }
        target="_blank"
        rel="noreferrer"
      >
        <Button className={buttonStyles} variant="contained" color="secondary">
          {t('common')['mediaKit']}
        </Button>
      </a>
    </div>
  );
};

export default NavLinks;
