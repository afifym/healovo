import { Box, Paper } from '@material-ui/core';
import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const VisionCard = ({ title, details, iconComponent }) => {
  return (
    <Paper
      style={{ maxWidth: '450px', margin: '0.5em 0', borderRadius: '30px' }}
      className='vision-card'
    >
      <Link to='/signup' style={{ color: 'inherit' }}>
        <Box display='flex' alignItems='center' mx={4} my={4}>
          <Box mr={3}>{iconComponent}</Box>
          <div>
            <Typography
              component='h5'
              variant='h5'
              style={{ fontWeight: '700', whiteSpace: 'nowrap' }}
            >
              {title}
            </Typography>
            <Typography variant='subtitle1' component='p'>
              {details}
            </Typography>
          </div>
        </Box>
      </Link>
    </Paper>
  );
};

export default VisionCard;
