import React from 'react';
import { useRouter } from 'next/router';
import { locales } from '../../translations/config';
import useTranslation from '../../hooks/useTranslation';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  localeSwitcher: {
    display: 'inline-block',
  },
});

const LocaleSwitcher = (): JSX.Element => {
  const styles = useStyles();
  const router = useRouter();
  const { t, locale } = useTranslation();

  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const targetLang = e.target.value;
      const regex = new RegExp(`^/(${locales.join('|')})`);
      console.log('router.pathname', router.pathname);
      console.log('regex', regex);
      console.log('targetLang', targetLang);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${targetLang}`)
      );
    },
    [router]
  );

  return (
    <div className={styles.localeSwitcher}>
      <label>
        {t('common')['localeSwitcher']}
        <select onChange={handleLocaleChange} defaultValue={locale}>
          {locales.map((el: string) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LocaleSwitcher;
