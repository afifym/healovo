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
          <Grid item md={6} xs={7}>
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
              <Paper style={{ maxWidth: '450px' }} className='vision-card'>
                <Box display='flex' alignItems='center' mx={4} my={4}>
                  <Box mr={3}>
                    <BiBookHeart size={45} />
                  </Box>
                  <div>
                    <Typography
                      component='h5'
                      variant='h5'
                      style={{ fontWeight: '700' }}
                    >
                      Our Vision
                    </Typography>
                    <Typography variant='subtitle1'>
                      Something about mission bla bla Something about
                    </Typography>
                  </div>
                </Box>
              </Paper>
              <Paper
                style={{ maxWidth: '450px', margin: '1em 0' }}
                className='vision-card'
              >
                <Box display='flex' alignItems='center' mx={4} my={4}>
                  <Box mr={3}>
                    <FaHandHoldingHeart size={45} />
                  </Box>
                  <div>
                    <Typography
                      component='h5'
                      variant='h5'
                      style={{ fontWeight: '700' }}
                    >
                      Our Mission
                    </Typography>
                    <Typography variant='subtitle1'>
                      Something about mission bla bla Something about
                    </Typography>
                  </div>
                </Box>
              </Paper>
              <Paper style={{ maxWidth: '450px' }} className='vision-card'>
                <Box display='flex' alignItems='center' mx={4} my={4}>
                  <Box mr={3}>
                    <RiUserHeartFill size={45} />
                  </Box>
                  <div>
                    <Typography
                      component='h5'
                      variant='h5'
                      style={{ fontWeight: '700' }}
                    >
                      Our Values
                    </Typography>
                    <Typography variant='subtitle1'>
                      Something about mission bla bla Something about
                    </Typography>
                  </div>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Vision;
