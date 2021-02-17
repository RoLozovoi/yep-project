import React from 'react';
import LocaleLink from '../common/LocaleLink';
import Image from 'next/image';

const LogoBox = ({ className }: { className: string }): JSX.Element => (
  <LocaleLink href="/" as="/">
    <div>
      <Image
        src="/images/black_logo.png"
        alt="Site Logo"
        layout="fixed"
        width={128}
        height={55}
        className={className}
      />
    </div>
  </LocaleLink>
);

export default LogoBox;
