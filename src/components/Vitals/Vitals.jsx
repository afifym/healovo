import React from 'react';
import Styled from 'styled-components/macro';

const Vitals = ({ height, weight, massIndex, fat, bbi }) => {
  return (
    <Wrapper className=''>
      <ButtonList>
        <Item>
          <p>Height</p>
          <h3>{height} cm</h3>
        </Item>
        <Item>
          <p>Weight</p>
          <h3>{weight} kg</h3>
        </Item>
        <Item>
          <p>Mass Index</p>
          <h3>{massIndex} BMI</h3>
        </Item>
        <Item>
          <p>Fat</p>
          <h3>{fat} %</h3>
        </Item>
        <Item>
          <p>BBI</p>
          <h3>{bbi} c</h3>
        </Item>
      </ButtonList>
      <span className='divider'></span>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
    display: flex;
    justify-content: center;
    position:relative;


    .divider{
        border-bottom:2px solid rgba(0, 0, 0, 0.2);
        position:absolute;
        top:50%;
        width:120%;
    }
    p{
      margin-bottom: 10px
    }

    h3 {
        padding-top:0.5em;
      font-size: 25px;
      width: 105px;
    }
`;
const ButtonList = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    color: gray;

    @media (max-width: 840px) {
      flex-direction: column;
      align-items: baseline;
    } 
`;

const Item = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    align-items: flex-start;
    color: #2D50EF;
`;

export default Vitals;
