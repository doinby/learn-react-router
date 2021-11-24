/* eslint-disable no-unused-vars */
import React from 'react';
import {Link as RouterLink, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/profile/Profile';
import InfoPage from './pages/profile/InfoPage';
import SettingsPage from './pages/profile/SettingsPage';

import {theme} from './theme';
import {ThemeProvider} from '@emotion/react';
import {Button, Link} from '@mui/material';
import './App.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Link component={RouterLink} to='/' underline='hover'>
        Home
      </Link>
      <Link component={RouterLink} to='/profile' underline='hover'>
        Profile
      </Link>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route path='/profile/info' element={<InfoPage />} />
        <Route path='/profile/settings' element={<SettingsPage />} />
      </Routes>
    </ThemeProvider>
  );
}
