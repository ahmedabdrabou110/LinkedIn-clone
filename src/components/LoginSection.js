import React from "react";
import styled from "styled-components";

const LoginSection = () => {
  return (
    <Section>
      <Hero>
        <h1>Welcome to your professional community</h1>
        <img src="/assets/login-hero.svg" />
      </Hero>
      <Form>
        <Google>
          <img src="/assets/google.svg" alt="google logo" />
          Sign in with Google
        </Google>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    font-size: 56px;
    width: 56%;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
      align-items: center;
      font-size: 23px;
      width: 100%;
      line-height: 2;
      text-align: center;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin: auto;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 2px rgb(0 0 0 / 0%) inset 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    background: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default LoginSection;
