import {Info, Settings} from '@mui/icons-material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import React from 'react';

export default function Profile() {
  return (
    <section>
      <h1>Profile Page</h1>
      <List className='profile-page-nav'>
        <ListItem button component={RouterLink} to='/profile/info'>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary='Profile Info' />
        </ListItem>
        <ListItem button component={RouterLink} to='/profile/settings'>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItem>
      </List>
    </section>
  );
}
