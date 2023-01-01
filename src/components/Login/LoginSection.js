import React from "react";
import styled from "./LoginSection.module.css";

const LoginSection = () => {
  return (
    <section className={styled.container}>
      <div className={styled.logo_container}>
        <h1>Welcome to your professional community</h1>
        <img src="/assets/login-hero.svg" />
      </div>
      <div className={styled.nav_container}>
        <button className={styled.logo}>
          <img src="/assets/google.svg" alt="google logo" />
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default LoginSection;
