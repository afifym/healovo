import React from "react";
import styled from "styled-components/macro";
import {FaQuoteLeft} from 'react-icons/fa';
import {Avatar} from '@material-ui/core';

const CarouselContainer = styled.div`
  width: 600px;
  padding-top: 1rem;
  margin-top: 2rem;
  border-radius: 0 0 5px 5px;
  box-shadow: 4px 4px 29px rgba(145, 142, 142, 0.25);
  transform: rotate(2deg);
  ${({reverse}) => reverse && "transform: rotate(-2deg)"}
  `;

const CardDetails = styled.div`
  text-align: left;
  padding: 1rem 2rem 0.5rem;
  font-wight: 700;
  font-size: 18px;
  line-height: 22px
`
const CardHeading = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background-image: linear-gradient(91.29deg, #2D50EF 0%, #4ADEDE 100%);
  border-radius: 0 0 4px 4px;
  text-align: left;
  margin: 0;
  color: white;
`;

const AvatarWrapper = styled.figure`
  margin:0 1rem 0 0;
  padding: 0;
`

const Card = ({ title, revRotate }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <CarouselContainer reverse={revRotate}>
        <CardDetails>
          <FaQuoteLeft size={35} style={{color: "#ddd"}}/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus
            mauris ac convallis lobortis. Nulla facilisi. Cras egestas
            sollicitudin magna, sed feugiat nibh. Aenean gravida
          </p>
        </CardDetails>
        <CardHeading>
          <AvatarWrapper>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </AvatarWrapper>
          <h2>{title}</h2>
        </CardHeading>
      </CarouselContainer>
    </div>
  );
};

export default Card;
