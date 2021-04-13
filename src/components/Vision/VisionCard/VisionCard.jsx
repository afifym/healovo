import { Box, Paper } from '@material-ui/core';
import React from 'react';
import { Container, Card, Grid, Typography } from '@material-ui/core';

const VisionCard = ({ title, details, iconComponent }) => {
  return (
    <Paper
      style={{ maxWidth: '450px', margin: '0.5em 0' }}
      className='vision-card'
    >
      <Box display='flex' alignItems='center' mx={4} my={4}>
        <Box mr={3}>{iconComponent}</Box>
        <div>
          <Typography component='h5' variant='h5' style={{ fontWeight: '700' }}>
            {title}
          </Typography>
          <Typography variant='subtitle1'>{details}</Typography>
        </div>
      </Box>
    </Paper>
  );
};

export default VisionCard;
