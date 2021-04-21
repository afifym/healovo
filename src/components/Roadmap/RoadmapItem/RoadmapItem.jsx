import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { GradientHolder } from '../../../styles/shared';
import styled from 'styled-components';

const Wrapper = styled.div`
  .container {
    width: 350px;
  }

  @media (max-width: 350px) {
    .container {
      width: 320px;
    }
  }
`;

const RoadmapItem = ({ number, subtitle, title, icon }) => {
  return (
    <Wrapper>
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
          className='container'
        >
          <Box m={2}>
            <Typography
              variant='h3'
              color='primary'
              style={{ fontWeight: 700 }}
            >
              {number}
            </Typography>
          </Box>
          <div>
            <Typography color='primary'>{subtitle}</Typography>
            <Typography
              style={{ fontWeight: 700 }}
              variant='h5'
              color='primary'
            >
              {title}
            </Typography>
          </div>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default RoadmapItem;
