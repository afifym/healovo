import React from 'react';
import Button from '@material-ui/core/Button';
import { FaAppStoreIos } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  position: relative;
  text-align: left;
  border-radius: 50px;
  padding: 1em;
  background: ${({ theme }) => theme.gradients.gradient4};

  .MuiButton-label {
    display: block;
    text-align: left;
    padding-left: 3em;
    margin: 1em;
    color: white;
  }

  .MuiButton-startIcon {
    position: absolute;
    left: 25px;
    top: 55%;
    transform: translateY(-50%);
  }
`;

const Wrapper = styled.div`
  height: 140vh;
  background: url(/assets/images/mobileApp.jpg) left bottom no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 4em;
  }

  h2 {
    width: 36px;
    margin-right: 5em;
    background: ${({ theme }) => theme.colors.main2};
    color: ${({ theme }) => theme.colors.dark1};
    font-weight: 600;
    font-size: 36px;
    line-height: 1.5;
  }

  button {
    font-size: 20px;
    width: 250px;
    max-width: 400px;
    margin-bottom: 25px;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0px 15px 20px rgba(57, 59, 58, 0.4);
      transform: translateY(-7px);
    }
  }

  .btn-wrapper {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
  }

  @media (max-width: 820px) {
    background-position: -180px 0;
    .container {
      height: 80%;
    }
    h2 {
      align-self: flex-start;
      margin-left: 1em;
    }

    .btn-wrapper {
      align-self: center;
    }
  }
`;

const MobileApp = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2>Download Our App</h2>
        <span className='btn-wrapper'>
          <StyledButton startIcon={<AiFillAndroid color='white' size={30} />}>
            For Andriod
          </StyledButton>
          <StyledButton startIcon={<FaAppStoreIos color='white' size={30} />}>
            For IOS
          </StyledButton>
        </span>
      </div>
    </Wrapper>
  );
};

export default MobileApp;
