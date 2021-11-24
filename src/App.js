import './fonts/MinigapLight.woff';
import './fonts/MinigapLight.woff2';
import {Button, ButtonBase} from '@mui/material';
import {theme} from './theme';
import './App.css';
import {ThemeProvider} from '@emotion/react';
import {Box} from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained'>Contained</Button>
    </ThemeProvider>
  );
}

export default App;
