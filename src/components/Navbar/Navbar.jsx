import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <div style={{ width: "15%" }}>
        <img
          src="assets/Navbar/logo.png"
          alt="Healovo Logo"
          style={{ width: "100%" }}
        />
      </div>

      <Icon onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </Icon>

      <Links open={open}>
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>About</Link>
        <Link>Contacts</Link>
        <Link>Login</Link>
        <Link>
          <Button>Signup</Button>
        </Link>
      </Links>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 70px;
  color: #000000;
  background-color: #eaeaf8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const Link = styled.a`
  padding: 20px 15px;
  margin-left: 25px;
  font-weight: 500;
  font-size: 20px;
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
    border-bottom: 2px solid #2d50ef;
    margin-top: 5px;
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
  border: 0;
`;

const Icon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 25px 0;

  span {
    width: 30px;
    height: 2px;
    background-color: #2d50ef;
    margin-bottom: 7px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;
