import React from 'react';
// import {Link, Switch, Route} from 'react-router-dom';
import {Link as RouterLink, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import {Button, Link} from '@mui/material';
import './App.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button component={RouterLink} to='/'>
        Home
      </Button>
      <Button component={RouterLink} to='/about'>
        About
      </Button>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}
