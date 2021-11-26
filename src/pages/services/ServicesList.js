/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link as RouterLink, Routes, Route} from 'react-router-dom';
import servicesData from './servicesData';

import {List, ListItem, Typography} from '@mui/material';

import './ServicesList.css';

export default function ServicesList() {
  const serviceItem = servicesData.map((service) => {
    return (
      <ListItem
        key={service._id}
        to={`/services/${service._id}`}
        button
        component={RouterLink}
      >
        <Typography variant='h3'>{service.name}</Typography>
        <Typography
          className='price'
          variant='body1'
        >{`$${service.price}`}</Typography>
      </ListItem>
    );
  });

  return (
    <>
      <Typography variant='h2'>Services List Page</Typography>
      <List>{serviceItem}</List>
    </>
  );
}
