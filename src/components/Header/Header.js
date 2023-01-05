import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.logo}>
          <a href="/home">
            <img src="assets/home-logo.svg" />
          </a>
        </span>
        <div className={styles.search}>
          <div className={styles.search_input}>
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.search_icon}>
            <img src="assets/search-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
