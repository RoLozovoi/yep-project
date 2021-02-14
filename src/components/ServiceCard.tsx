import React from 'react';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Card from './common/Card';
import { colors } from '../styles/variables';
import LocaleLink from './common/LocaleLink';

interface ServiceCardProps {
  title: string;
  desc: string;
  imgSrc: string;
  imgSize: number;
  buttonLabel: string | JSX.Element;
  onClick?: React.MouseEventHandler;
  withLink?: string;
}

const useStyles = makeStyles({
  serviceCard: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  info: {
    paddingTop: '1.5rem',
    flexGrow: 1,
  },
  title: {
    fontSize: '3rem',
  },
  desc: {
    maxWidth: ({ imgSize }: { imgSize: number }) => imgSize,
    fontSize: '1.6rem',
    paddingBottom: '2rem',
  },
  button: {
    padding: '1rem 3rem',
    fontSize: '1.5rem',
  },
  link: {
    color: colors.secondary,
  },
});

const ServiceCard = ({
  title,
  desc,
  imgSrc,
  imgSize,
  onClick,
  buttonLabel,
  withLink,
}: ServiceCardProps): JSX.Element => {
  const styles = useStyles({ imgSize });

  const ButtonComponent = (
    <Button
      className={styles.button}
      onClick={onClick}
      variant="outlined"
      color="secondary"
    >
      {buttonLabel}
    </Button>
  );

  return (
    <Card className={styles.serviceCard}>
      <Image src={imgSrc} width={imgSize} height={imgSize} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </div>
      {withLink ? (
        <LocaleLink href={withLink} as={withLink} passHref>
          {ButtonComponent}
        </LocaleLink>
      ) : (
        ButtonComponent
      )}
    </Card>
  );
};

export default ServiceCard;
