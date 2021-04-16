import React from 'react';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import GradientButton from '../shared/GradientButton/GradientButton';
import { Box, Typography } from '@material-ui/core';

const Wrapper = styled.div`
  text-align: center;
  background: url('/assets/images/curious-bg.svg') no-repeat;
  background-size: cover;
  height: 80vh;

  .title {
    @media (max-width: 470px) {
      font-size: 2.6rem;
      margin-bottom: 0.3em;
    }
  }
`;

const Curious = () => {
  return (
    <Wrapper>
      <Box
        style={{ height: '100%' }}
        display='flex'
        alignItems='center'
        justifyContent='center'
        mx={1}
      >
        <div>
          <Typography
            className='title'
            variant='h2'
            component='h2'
            style={{ fontWeight: 700 }}
          >
            Curious yet?
          </Typography>
          <Typography
            color='secondary'
            component='p'
            variant='h6'
            style={{ marginBottom: '70px' }}
          >
            It only takes a few minutes to get up and start running!
          </Typography>
          <GradientButton
            width='210px'
            lightCircle
            blueBg
            icon={<FaChevronRight color='hsl(229, 86%, 56%)' size={13} />}
          >
            Get Started
          </GradientButton>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Curious;
