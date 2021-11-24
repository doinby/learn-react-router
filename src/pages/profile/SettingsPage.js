import React from 'react';
import {Button, TextField} from '@mui/material';

export default function SettingsPage() {
  return (
    <div>
      <h1>Profile Settings</h1>
      <TextField
        label='Password'
        type='password'
        autoComplete='current-password'
        variant='filled'
      />
      <Button variant='contained'>Save Change</Button>
    </div>
  );
}
