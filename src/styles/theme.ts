import { createMuiTheme } from '@material-ui/core';
import { colors } from './variables';
const { primary, secondary } = colors;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

export default theme;
