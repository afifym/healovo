import { Box } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ForDoctorsItem from './ForDoctorsItem/ForDoctorsItem';
import GradientButton from '../shared/GradientButton/GradientButton';
import { IoMdChatboxes } from 'react-icons/io';
import { BsCreditCard } from 'react-icons/bs';
import { BiCalendarCheck } from 'react-icons/bi';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-image: url('/assets/images/forDoctors.svg');
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: 100% 50%;

  background-color: ${({ theme }) => theme.colors.main1};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  color: ${({ theme }) => theme.colors.light1};
  width: 100%;
  padding: 4em 1em;
`;

const StyledHeading = styled.h2`
  width: fit-content;
  font-size: 2rem;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.dark1};
  background-color: ${({ theme }) => theme.colors.light1};

  span {
    color: ${({ theme }) => theme.colors.main1};
  }

  @media (max-width: 440px) {
    font-size: 1.7rem;
  }

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const ForDoctors = () => {
  return (
    <Wrapper>
      <StyledHeading>
        Healovo for <span>Doctors</span>
      </StyledHeading>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexWrap='wrap'
        my={3}
      >
        <ForDoctorsItem
          left
          title='Chat App'
          details='Easily reach out to your patients anytime with our chat App'
          icon={<IoMdChatboxes size={80} color='hsl(229, 86%, 56%)' />}
        />
        <ForDoctorsItem
          center
          title='Payment System'
          details='Seemless and easy to use payment system for your comfort'
          icon={<BsCreditCard size={80} color='hsl(229, 86%, 56%)' />}
        />
        <ForDoctorsItem
          right
          title='Easier Appointments'
          details='Don’t own a clinic? easy! you can make appointments in patient’s residence'
          icon={<BiCalendarCheck size={80} color='hsl(229, 86%, 56%)' />}
        />
      </Box>
      <Box display='flex' justifyContent='center' my={5}>
        <Link to='/signup'>
          <GradientButton icon={<FaChevronRight color='white' size={13} />}>
            Join Now
          </GradientButton>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default ForDoctors;
