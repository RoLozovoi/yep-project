import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { languageNames, locales } from '../../translations/config';
import useTranslation from '../../hooks/useTranslation';
import { colors } from '../../styles/variables';

const useStyles = makeStyles({
  localeSwitcher: {
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageIcon: {
    color: colors.black,
    fontSize: '3rem',
    marginRight: '1.5rem',
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
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${targetLang}`)
      );
    },
    [router]
  );

  return (
    <div className={styles.localeSwitcher}>
      <LanguageIcon className={styles.languageIcon} />
      <FormControl>
        <InputLabel id="demo-simple-select-label">
          {t('common')['localeSwitcher']}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locale}
          onChange={handleLocaleChange}
        >
          {Object.entries(languageNames).map(([lang, langName]) => (
            <MenuItem value={lang} key={lang}>
              {langName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default LocaleSwitcher;
