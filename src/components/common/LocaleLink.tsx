import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

import useTranslation from '../../hooks/useTranslation';

interface LocaleLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

const LocaleLink = (props: LocaleLinkProps): React.ReactElement => {
  const { locale } = useTranslation();
  const localized = Object.assign({ className: 'linka' }, props, {
    href: `/[lang]${props.href}`,
    as: props.as ? `/${locale}${props.as}` : `/${locale}${props.href}`,
  });
  return (
    <Link {...localized}>
      <a className={props.className}>{props.children}</a>
    </Link>
  );
};

export default LocaleLink;
