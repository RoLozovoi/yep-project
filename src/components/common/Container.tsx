import React from 'react';
import { makeStyles } from '@material-ui/core';

interface ContainerProps {
  children: React.ReactChildren | JSX.Element | React.ReactNodeArray;
  fullWidth?: boolean;
  className?: string;
}

interface StyleProps {
  fullWidth?: boolean;
}

const useStyles = makeStyles({
  container: {
    maxWidth: (props: StyleProps) => {
      const { fullWidth } = props;
      return fullWidth ? '100%' : '1140px';
    },
    margin: '0 auto',
    overflow: 'auto',
    padding: '2rem 0',
  },
});

const Container = ({
  children,
  ...props
}: ContainerProps): React.ReactElement => {
  const styles = useStyles(props);
  return (
    <div className={styles.container + ' ' + props.className}>{children}</div>
  );
};

export default Container;
