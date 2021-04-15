import { Button } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const GradientHolder = styled.span`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  padding: 2em 2em;
  border-radius: 25px;

  background: ${({ theme }) => theme.gradients.gradient1};
  color: ${({ theme }) => theme.colors.dark1};

  ${({ disableShadow }) =>
    !disableShadow &&
    css`
      box-shadow: 4px 4px 29px rgba(145, 142, 142, 0.25);
    `}

  ${({ reverse }) =>
    reverse &&
    css`
      background: ${({ theme }) => theme.gradients.gradient2};
    `}

    
  ${({ primaryColor }) =>
    primaryColor &&
    css`
      color: ${({ theme }) => theme.colors.main1};
    `}

  ${({ circle }) =>
    circle &&
    css`
      border-radius: 50%;
      padding: 2em;
    `}
`;

export const StyledButton = styled(Button)`
  position: relative;

  background: linear-gradient(
    to right bottom,
    #ffffff 0%,
    #e7e8e9 95.44%
  ) !important;

  font-size: 1.1rem !important;
  box-shadow: 4px 4px 29px rgba(87, 87, 87, 0.25) !important;

  & > span {
    width: ${({ width }) => width || '190px'};
    color: ${({ theme }) => theme.colors.main1};
  }

  .MuiButton-endIcon {
    position: absolute;
    right: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.main1};
  }

  ${({ blueBg }) =>
    blueBg &&
    css`
      background: ${({ theme }) => theme.gradients.gradient4} !important;

      & > span {
        color: ${({ theme }) => theme.colors.light1};
        svg {
          fill: ${({ theme }) => theme.colors.main1};
        }
      }
    `}

  ${({ lightCircle }) =>
    lightCircle &&
    css`
      .MuiButton-endIcon {
        background-color: ${({ theme }) => theme.colors.light1};
      }
    `}

  ${({ darkCircle }) =>
    darkCircle &&
    css`
      .MuiButton-endIcon {
        background-color: ${({ theme }) => theme.colors.dark1};
      }
    `}

  svg {
    margin: 0.45em;
  }
`;

export const StyledHeading = styled.h2`
  margin: 1.5em auto;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  color: ${({ theme }) => theme.colors.dark1};

  &:after {
    position: absolute;
    content: '';
    background: ${({ theme }) => theme.gradients.gradient4};
    height: 7px;
    width: 150px;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50px;
  }
`;
