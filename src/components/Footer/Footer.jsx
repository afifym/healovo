import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  ul {
    margin-top: 1em;
  }
  li {
    padding: 0.3em 0;
  }

  a {
    color: ${({ theme }) => theme.colors.dark1};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Box p={3} display='flex' alignItems='center' justifyContent='center'>
        <Grid className='debug' justify='center' container spacing={1}>
          <Grid item lg={2} sm={4}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              style={{ height: '100%' }}
            >
              <Link to='/'>
                <img
                  src='/assets/images/healovo.svg'
                  alt='healovo'
                  style={{ width: '220px' }}
                />
              </Link>
            </Box>
          </Grid>
          <Grid item lg={1} sm={1}></Grid>
          <Grid item lg={3} sm={4}>
            <Typography variant='h5'>About Healovo</Typography>
            <Box>
              <ul>
                <li>
                  <a href='#'>Pricing</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
                <li>
                  <a href='#'>Trust</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item lg={3} sm={4}>
            <Typography variant='h5'>Help</Typography>
            <Box>
              <ul>
                <li>
                  <a href='#'>Support Center</a>
                </li>
                <li>
                  <a href='#'>FAQ</a>
                </li>
                <li>
                  <a href='#'>Tutorials</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item lg={3} sm={4}>
            <Typography variant='h5'>Services</Typography>
            <Box>
              <ul>
                <li>
                  <a href='#'>Payments</a>
                </li>
                <li>
                  <a href='#'>Video Meeting</a>
                </li>
                <li>
                  <a href='#'>Refund Policy</a>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default Footer;
