import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Typography } from '@material-ui/core';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light1};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6em 2em;
  border: 1px solid ${({ theme }) => theme.colors.main1};
  border-top: none;
  border-bottom: none;

  ${({ left }) =>
    left &&
    css`
      border: none;
      border-bottom-left-radius: ${({ theme }) =>
        theme.borderRadiuses.borderRadius1};
      border-top-left-radius: ${({ theme }) =>
        theme.borderRadiuses.borderRadius1};
    `}

  ${({ right }) =>
    right &&
    css`
      border: none;
      border-bottom-right-radius: ${({ theme }) =>
        theme.borderRadiuses.borderRadius1};
      border-top-right-radius: ${({ theme }) =>
        theme.borderRadiuses.borderRadius1};
    `}

  @media (max-width: 1300px) {
    border-radius: ${({ theme }) => theme.borderRadiuses.borderRadius1};
    border-color: ${({ theme }) => theme.colors.light1};
    margin: 1em;
    box-shadow: ${({ theme }) => theme.shadows.shadow1};
  }

  @media (max-width: 500px) {
    padding: 3em 1em;
    width: 400px;
  }
`;

const ForDoctorsItem = ({ left, right, title, details, icon }) => {
  return (
    <Wrapper left={left} right={right}>
      {icon}
      <Box my={2}>
        <Typography
          color='primary'
          variant='h4'
          component='h3'
          style={{ fontWeight: '600' }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        color='secondary'
        style={{ maxWidth: '400px', opacity: '0.8' }}
      >
        {details}
      </Typography>
    </Wrapper>
  );
};

export default ForDoctorsItem;
