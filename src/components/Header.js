import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import {Link} from '@mui/material';

import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to='/' component={RouterLink} underline='hover'>
        Home
      </Link>
      <Link to='/services' component={RouterLink} underline='hover'>
        Services
      </Link>
    </header>
  );
}
