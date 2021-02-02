import useTranslation from '../../hooks/useTranslation';

const About = (): JSX.Element => {
  const { t } = useTranslation();
  return <div>{t('about')['us']}</div>;
};

export default About;
