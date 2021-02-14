import { makeStyles } from '@material-ui/core';

export const flexCenter = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const flexBetween = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
