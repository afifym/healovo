import {
  Container,
  Card,
  Grid,
  Box,
  Typography,
  Paper,
} from '@material-ui/core';

import React from 'react';
import styled from 'styled-components';

import VisionCard from './VisionCard/VisionCard';

import { BiBookHeart } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { RiUserHeartFill } from 'react-icons/ri';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main2};

  .vision-card {
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.main1};
      color: ${({ theme }) => theme.colors.light1};
      transform: scale(1.05);
    }
  }
`;

const Vision = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container justify='center'>
          <Grid item md={6} xs={9}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              m={2}
            >
              <img
                src='/assets/images/vision.jpg'
                alt='our vision'
                style={{ width: '80%' }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} className=''>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
              alignItems='center'
              style={{ height: '100%' }}
            >
              <VisionCard
                title='Our Vision'
                details='Something about mission bla bla Something about'
                iconComponent={<BiBookHeart size={45} />}
              />
              <VisionCard
                title='Our Mission'
                details='Something about mission bla bla Something about'
                iconComponent={<FaHandHoldingHeart size={45} />}
              />
              <VisionCard
                title='Our Values'
                details='Something about mission bla bla Something about'
                iconComponent={<RiUserHeartFill size={45} />}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Vision;
