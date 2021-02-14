import React from 'react';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles/variables';

const useStyles = makeStyles({
  section: {
    width: '100%',
    padding: '0 2rem',
    backgroundColor: ({ bgColor }: { bgColor: string }) =>
      bgColor || colors.white,
  },
});

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

const Section = ({
  bgColor,
  children,
  className,
}: SectionProps): JSX.Element => {
  const { section } = useStyles({ bgColor });

  return <section className={section + ' ' + className}>{children}</section>;
};

export default Section;
