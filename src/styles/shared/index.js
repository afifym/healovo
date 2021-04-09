import styled from 'styled-components';

const GradientHolder = styled.span`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  padding: 2em 2em;
  border-radius: 25px;

  background: ${({ theme }) => theme.gradients.gradien1};
  color: ${({ theme }) => theme.colors.dark1};

  ${({ disableShadow }) =>
    !disableShadow &&
    css`
      box-shadow: 4px 4px 29px rgba(145, 142, 142, 0.25);
    `}

  ${({ reverse }) =>
    reverse &&
    css`e
      background: ${({ theme }) => theme.gradients.gradien2};
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
