import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { GradientHolder } from '../../../styles/shared';

const RoadmapItem = ({ number, subtitle, title, icon }) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      flexWrap='wrap'
      my={4}
    >
      <GradientHolder
        primaryColor
        circle
        reverse
        style={{ position: 'relative' }}
      >
        {icon()}
      </GradientHolder>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        style={{ width: '350px' }}
      >
        <Box m={2}>
          <Typography variant='h3' color='primary' style={{ fontWeight: 700 }}>
            {number}
          </Typography>
        </Box>
        <div>
          <Typography color='primary'>{subtitle}</Typography>
          <Typography style={{ fontWeight: 700 }} variant='h5' color='primary'>
            {title}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default RoadmapItem;
