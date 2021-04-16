import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Typography } from '@material-ui/core';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light1};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  text-align: center;
  padding: 4em 2em;
  border: 1px solid ${({ theme }) => theme.colors.main1};

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
      <Typography color='primary' style={{ width: '400px' }}>
        {details}
      </Typography>
    </Wrapper>
  );
};

export default ForDoctorsItem;
