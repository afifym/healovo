import React from 'react';
import styled from 'styled-components/macro';
import { FaQuoteLeft } from 'react-icons/fa';
import { Avatar } from '@material-ui/core';

const CarouselContainer = styled.div`
  width: 600px;
  padding-top: 1rem;
  margin-top: 2rem;

  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  background-color: ${({ theme }) => theme.colors.light1};
  transform: rotate(2deg);

  @media screen and (max-width: 1050px) {
    width: 500px;
  }
  @media screen and (max-width: 961px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 280px;
  }
  ${({ reverse }) => reverse && 'transform: rotate(-2deg)'}
`;

const CardDetails = styled.div`
  text-align: left;
  padding: 1rem 2rem 0.5rem;
  color: ${({ theme }) => theme.colors.dark2};
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.gradients.gradient5};
  border-radius: 0 0 5px 5px;
  text-align: left;
  margin-top: 1em;
  color: white;
`;

const AvatarWrapper = styled.figure`
  margin: 0 1rem 0 0;
  padding: 0;
`;

const Wrapper = styled.div`
  padding: 2em 0;
`;

const Card = ({ title, revRotate }) => {
  return (
    <Wrapper>
      <CarouselContainer reverse={revRotate}>
        <CardDetails>
          <FaQuoteLeft
            size={35}
            style={{ color: '#ddd', marginBottom: '1rem' }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            dapibus mauris ac convallis lobortis. Nulla facilisi. Cras egestas
            sollicitudin magna, sed feugiat nibh. Aenean gravida
          </p>
        </CardDetails>
        <CardFooter>
          <AvatarWrapper>
            <Avatar alt='Remy Sharp' src='/assets/images/reviews-avatar.png' />
          </AvatarWrapper>
          <h4>{title}</h4>
        </CardFooter>
      </CarouselContainer>
    </Wrapper>
  );
};

export default Card;
