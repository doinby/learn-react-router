/* eslint-disable no-unused-vars */
import React from 'react';
import {useParams} from 'react-router-dom';
import servicesData from './servicesData';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';

import '../../images/card-image/lawn-mowing.jpg';
import '../../images/card-image/leaf-raking.jpg';
import '../../images/card-image/weeding.jpg';
import '../../images/card-image/sprinkler-repair.jpg';

export default function ServiceDetail() {
  const {serviceId} = useParams();

  // Find object that matches with serviceId
  // and store it in new variable called currentService
  const currentService = servicesData.find(
    (service) => service._id === serviceId
  );
  const {name, price, description, _id, image} = currentService;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={`../../images/card-image/${image}.jpg`}
        />
        <CardContent>
          <Typography variant='h3'>{name}</Typography>
          <Typography
            variant='h4'
            sx={{fontSize: '1.75rem'}}
          >{`$${price}`}</Typography>
          <Divider />
          <Typography variant='body2'>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
