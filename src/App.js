/* eslint-disable no-unused-vars */
import React from 'react';
import {Link as RouterLink, Routes, Route} from 'react-router-dom';

import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
      </Routes>
    </ThemeProvider>
  );
}
