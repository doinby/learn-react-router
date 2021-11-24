import {Button} from '@mui/material';
import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained'>Contained</Button>
      <p>App Works!</p>
    </ThemeProvider>
  );
}

export default App;
