import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.main2};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .list-title {
    font-weight: 600;
  }
  ul {
    margin-top: 1em;
  }
  li {
    padding: 0.3em 0;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      a {
        color: ${({ theme }) => theme.colors.main1};
        border-bottom: 2px solid ${({ theme }) => theme.colors.main1};
      }
    }
  }

  a {
    color: ${({ theme }) => theme.colors.dark1};
  }

  @media (max-width: 768px) {
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Box p={3} display='flex' justifyContent='space-around' flexWrap='wrap'>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          alignSelf='center'
          m={3}
          my={3}
          style={{ width: '220px' }}
          className='img-wrapper'
        >
          <Link to='/'>
            <img
              src='/assets/images/healovo.svg'
              alt='healovo'
              style={{ width: '220px' }}
            />
          </Link>
        </Box>
        <Box m={3} my={3} style={{ width: '220px' }}>
          <Typography className='list-title' variant='h5' color='secondary'>
            About Healovo
          </Typography>
          <Box>
            <ul>
              <li>
                <Link to='/'>Pricing</Link>
              </li>
              <li>
                <Link to='/'>Careers</Link>
              </li>
              <li>
                <Link to='/'>Trust</Link>
              </li>
              <li>
                <Link to='/'>Privacy Policy</Link>
              </li>
            </ul>
          </Box>
        </Box>
        <Box m={3} my={3} style={{ width: '220px' }}>
          <Typography className='list-title' variant='h5' color='secondary'>
            Help
          </Typography>
          <Box>
            <ul>
              <li>
                <Link to='/'>Support Center</Link>
              </li>
              <li>
                <Link to='/'>FAQ</Link>
              </li>
              <li>
                <Link to='/'>Tutorials</Link>
              </li>
              <li>
                <Link to='/'>Contact Us</Link>
              </li>
            </ul>
          </Box>
        </Box>
        <Box m={3} my={3} style={{ width: '220px' }}>
          <Typography className='list-title' variant='h5' color='secondary'>
            Services
          </Typography>
          <Box>
            <ul>
              <li>
                <Link to='/'>Payments</Link>
              </li>
              <li>
                <Link to='/'>Video Meeting</Link>
              </li>
              <li>
                <Link to='/'>Emergencies</Link>
              </li>
              <li>
                <Link to='/'>Refund Policy</Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Footer;
