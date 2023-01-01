import React from "react";
import { Link } from "react-router-dom";
import styled from "./Login.module.css";
import LoginSection from "./LoginSection";
const Login = () => {
  return (
    <div className={styled.login__container}>
      <nav className={styled.navbar}>
        <Link to="/">
          <img src="/assets/login-logo.svg" />
        </Link>
        <div>
          <a className={styled.join_link}>Join Now</a>
          <a className={styled.sign_in_link}>Sign In</a>
        </div>
      </nav>
      <LoginSection />
    </div>
  );
};

export default Login;
