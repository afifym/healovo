import React from 'react';
import Profile from '../components/Profile/Profile';
import Styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const patientImg = useSelector((state) => state.patient.image);

  return (
    <Wrapper className=''>
      <ImgWrapper>
        <img src={patientImg} alt='Profile Pic' className='img' />
      </ImgWrapper>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

const ImgWrapper = Styled.div`
    width: 250px;
    padding-right: 2em;

    .img {
      width:100%;
      height:auto;
      border-radius: 50%

    }
`;

const ProfileWrapper = Styled.div`
    width: 55%;
    
    @media (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
`;

export default ProfilePage;
