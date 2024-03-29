import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux'; //add

const StyledLink = styled(Link)`
  padding: 1.25rem 0.938rem;
  margin-left: 1.563rem;
  font-weight: 700;
  font-size: 1rem;
  color: #343949;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    color: #2d50ef;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    border-bottom: 0.15rem solid #2d50ef;
    margin-top: 0.313rem;
    transition: all 0.2s linear;
  }

  &:hover::after {
    width: 50%;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth); //add
  return (
    <Wrapper open={open}>
      <Link to='/' className='logo-wrapper'>
        <img
          src='/assets/images/healovo-black.svg'
          alt='Healovo Logo'
          style={{ width: '100%' }}
          // used in our library
        />
      </Link>

      <Icon onClick={() => setOpen(!open)}>
        <RiMenu3Fill color='hsl(229, 86%, 56%)' size={40} />
      </Icon>

      <Links open={open}>
        <LinkWrapper>
          <StyledLink to='/'>Home</StyledLink>
          <StyledLink to='/search'>Find A Doctor</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
          <StyledLink to='/contact'>Contact Us</StyledLink>
          {isAuth && <StyledLink to='/chat'>Chat</StyledLink>}
          {isAuth && <StyledLink to='/dashboard'>Profile</StyledLink>}
          {!isAuth && <StyledLink to='/login'>Login</StyledLink>}
        </LinkWrapper>
        {!isAuth && (
          <Link to='/signup'>
            <Button>Signup</Button>
          </Link>
        )}
      </Links>
    </Wrapper>
  );
};
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1130px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  padding: 0.5em 4.375rem;
  color: #000000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  transition: all 0.2s linear;

  .logo-wrapper {
    width: 180px;
    text-decoration: none;
  }

  @media (max-width: 1130px) {
    ${({ open }) =>
      open &&
      css`
        background-color: white;
        position: absolute;
        z-index: 30;
      `}
  }

  @media (max-width: 400px) {
    padding: 0 1em;
    .logo-wrapper {
      width: 160px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;

  @media (max-width: 1130px) {
    flex-direction: column;
    width: 100%;
    display: flex;

    align-items: center;
    visibility: hidden;
    opacity: 0;

    ${({ open }) =>
      open &&
      css`
        visibility: visible;
        opacity: 1;
      `}
  }
`;

const Button = styled.button`
  background-color: #5672f1;
  padding: 0.625rem 2.5rem;
  border-radius: 2.2rem;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 0.938rem;
  border: 0;
  outline: none;
  cursor: pointer;
  margin: 0.938rem 0 0.938rem 0.938rem;

  transition: all 0.1s linear;

  &:hover {
    opacity: 0.7;
  }
`;

const Icon = styled.div`
  display: none;
  cursor: pointer;
  padding: 1.563rem 0;

  @media (max-width: 1130px) {
    display: flex;
  }
`;

export default Navbar;
