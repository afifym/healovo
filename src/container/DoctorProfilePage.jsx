import React from "react";
import Profile from "../components/Profile/Profile";
import Styled from "styled-components/macro";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const doctorImg = useSelector((state) => state.doctor.image);

  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={doctorImg} />
      </ImgWrapper>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const ImgWrapper = Styled.div`
    width: 230px;
`;

const ProfileWrapper = Styled.div`
    width: 55%;
    
    @media (max-width: 960px) {
    display: flex;
    justify-content: center;
  }
`;

const Img = Styled.img`
    width: 100%;
`;

export default ProfilePage;
