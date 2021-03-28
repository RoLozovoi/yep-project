import React from 'react';
import Link from 'next/link';
import { getInitialLocale } from '../translations/getInitialLocale';

const FourOhFour: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default FourOhFour;
