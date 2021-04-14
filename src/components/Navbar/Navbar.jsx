import React, { useState } from "react";
import styled from "styled-components/macro";
import DehazeIcon from "@material-ui/icons/Dehaze";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <div style={{ width: "150px" }}>
        <img
          src="assets/Navbar/logo.png"
          alt="Healovo Logo"
          style={{ width: "100%" }}
          // used in our library
        />
      </div>

      <Icon onClick={() => setOpen(!open)}>
        <DehazeIcon />
      </Icon>

      <Links open={open}>
        <LinkWrapper>
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>About</Link>
          <Link>Contacts</Link>
          <Link>Login</Link>
        </LinkWrapper>
        <Button>Signup</Button>
      </Links>
    </Wrapper>
  );
};
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  padding: 0 4.375rem;
  color: #000000;
  background-color: #eaeaf8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const Link = styled.a`
  padding: 1.25rem 0.938rem;
  margin-left: 1.563rem;
  font-weight: 500;
  font-size: 1.25rem;
  color: #343949;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: #2d50ef;
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    border-bottom: 0.125rem solid #2d50ef;
    margin-top: 0.313rem;
    transition: all 0.4s ease-in-out;
  }

  &:hover::after {
    width: 50%;
  }
`;

const Button = styled.button`
  background-color: #5672f1;
  padding: 0.625rem 2.5rem;
  border-radius: 2.2rem;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  margin-left: 0.938rem;
  border: 0;
  outline: none;
  cursor: pointer;
  margin: 0.938rem 0 0.938rem 0.938rem;
`;

const Icon = styled.div`
  display: none;
  cursor: pointer;
  padding: 1.563rem 0;

  @media (max-width: 1100px) {
    display: flex;
  }
`;

export default Navbar;
