import {
  Container,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
} from '@material-ui/core';
import React from 'react';
import visionImage from '../../assets/images/vision.jpg';
import styled from 'styled-components';
import { AiFillMacCommand } from 'react-icons/ai';
const StyledCard = styled.div`
  width: 100%;
  height: 20%;
  border-radius: ${({ theme }) => theme.borderRadiuses.borderRadius1};
  background-color: ${({ theme }) => theme.colors.light1};
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main2};
`;

const Vision = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={10}>
          <Grid item md={6}>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <img
                src={visionImage}
                alt='our vision'
                style={{ width: '80%' }}
              />
            </Box>
          </Grid>
          <Grid item md={6} className='debug'>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='space-around'
              alignItems='center'
              className='debug'
            >
              <Card>
                <CardContent>
                  <Grid container alignItems='center'>
                    <Grid item xs={2}>
                      <AiFillMacCommand size={45} />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography component='h5' variant='h5'>
                        Our Mission
                      </Typography>
                      <Typography variant='subtitle1' color='textSecondary'>
                        Something about mission bla bla Something
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <StyledCard>wwww</StyledCard>
              <StyledCard>wwww</StyledCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Vision;
