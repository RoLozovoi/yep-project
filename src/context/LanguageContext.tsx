import React from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { isLocale, Localization, Locale } from '../translations/types';
import defaultStrings from '../translations/locales/ru';
import locales from '../translations/locales';
import { GetStaticPropsContext } from 'next';

/**
 * Language Context
 */

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = React.createContext<ContextProps>({
  localization: {
    locale: 'ru',
    translations: defaultStrings.common,
    namespace: 'common',
  },
  setLocale: () => null,
});

/**
 * Language Context: Provider
 */

interface LanguageProviderProps {
  readonly localization: Localization;
  readonly children: React.ReactNode;
}

export const LanguageProvider: React.FC<{
  localization: Localization;
  children: React.ReactNode;
}> = ({ localization, children }: LanguageProviderProps) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
  const [getStoredLocale, setStoredLocale] = useLocalStorage('locale');
  const { query } = useRouter();

  React.useEffect(() => {
    if (localizationState.locale !== getStoredLocale) {
      setStoredLocale(localizationState.locale);
    }
  }, [getStoredLocale, localizationState, setStoredLocale]);

  React.useEffect(() => {
    if (
      typeof query.lang === 'string' &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace,
      });
    }
  }, [
    query.lang,
    localizationState,
    localization?.locale,
    localization?.translations,
    localization?.namespace,
  ]);

  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const getLocalizationProps = (
  ctx: GetStaticPropsContext,
  namespace: string
): Localization => {
  const lang: Locale = (ctx.params?.lang as Locale) || 'ru';
  const locale: any = locales[lang];
  const strings: any = locale[namespace];

  const translations = {
    common: locales[lang].common,
    ...strings,
  };
  return {
    locale: lang,
    translations,
    namespace,
  };
};
