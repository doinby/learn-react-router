import {createTheme} from '@mui/material/styles';
import MinigapLight from './fonts/MinigapLight.woff';
import MinigapLight2 from './fonts/MinigapLight.woff2';
import MinigapBold from './fonts/MinigapBold.woff';
import MinigapBold2 from './fonts/MinigapBold.woff2';
import './index.css';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00bfa5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'MinigapLight',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'MinigapLight';
            src: local(MinigapLight), url(${MinigapLight}) format('woff'),
              url(${MinigapLight2}) format('woff2);
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }

          @font-face {
            font-family: 'MinigapBold';
            src: local(MinigapBold), url(${MinigapBold}) format('woff'),
              url(${MinigapBold2}) format('woff2);
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
  },
});
