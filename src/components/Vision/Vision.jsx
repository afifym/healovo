import { Container, Grid, Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import VisionCard from './VisionCard/VisionCard';
import { BiBookHeart } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { RiUserHeartFill } from 'react-icons/ri';

const Wrapper = styled.div`
  width: 100%;
  padding: 7em 0;
  background-color: ${({ theme }) => theme.colors.main2};

  .vision-card {
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${({ theme }) => theme.colors.dark1};

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
        <Grid container justify='center' alignItems='center'>
          <Grid item md={6} xs={9}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              m={2}
            >
              <img
                src='/assets/images/vision.webp'
                alt='our vision'
                style={{ maxWidth: '400px', minWidth: '300px' }}
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
                details='Helping our users reach out to their doctors in a comfortable way'
                iconComponent={<BiBookHeart size={45} />}
              />
              <VisionCard
                title='Our Mission'
                details='Passiontely solving communication problems in the medical field'
                iconComponent={<FaHandHoldingHeart size={45} />}
              />
              <VisionCard
                title='Our Values'
                details='We believe in taking the extra step tainting our work with excellence'
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
