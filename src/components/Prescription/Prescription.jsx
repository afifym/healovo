import React from 'react';
import Styled from 'styled-components/macro';
import { GradientHolder } from '../../styles/shared';

const Prescription = ({ name, duration, index }) => {
  return (
    <Wrapper className=''>
      <Pill>
        <Text>
          <p className='bold'>
            <span className='span'>Medicine {index + 1}</span>
            {name}
          </p>
          <p className='bold'>
            <span className='endLine'>every</span>
            <span className='span'>{duration} hours</span>
          </p>
        </Text>
      </Pill>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

const Pill = Styled(GradientHolder)`
    padding: 25px 40px;
    background: ${({ theme }) => theme.gradients.gradient3};
    border-right: 12px solid #2D50EF;
    border-left: 12px solid #2D50EF;
    border-radius: 10px;
    width: 500px !important;
    max-width: 100% !important;

`;

const Text = Styled.div`
    display: flex;
    justify-content: space-between; 
    width: 100%;

    .bold {
      display: flex;
      font-size: 14px;
      flex-direction: column;
    }

    .span {
      font-size: 20px;
      font-weight: bolder;
    }

    .endLine {
      align-self: flex-end;
    }

    @media (max-width: 500px) {
      width: 150px;
      flex-direction: column;

      .bold:last-child {
        align-self: flex-end;
      }
    }
`;

export default Prescription;
