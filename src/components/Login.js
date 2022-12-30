import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginSection from "./LoginSection";
const Login = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/assets/login-logo.svg" />
        </Link>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <LoginSection />
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 134px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  padding: 10px 12px;
  margin-right: 12px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bolder;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  color: #0a66c2;
  cursor: pointer;
  border-radius: 24px;
  text-docoration: none;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: bolder;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 118, 249, 0.15);
    color: #0a66c2;
    text-docoration: none;
  }
`;

export default Login;
