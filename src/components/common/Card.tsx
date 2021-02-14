import React from 'react';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../styles/variables';

const useStyles = makeStyles({
  card: {
    backgroundColor: colors.white,
    color: '#333',
    borderRadius: 10,
    boxShadow: '0 3px 10px rgb(0 0 0 / 20%)',
    padding: 20,
    margin: 10,
  },
});
interface CardProps {
  children: React.ReactElement | JSX.Element | React.ReactNodeArray;
  className?: string;
}
const Card = ({ children, className }: CardProps): JSX.Element => {
  const styles = useStyles();
  return <div className={styles.card + ' ' + className}>{children}</div>;
};

export default Card;
