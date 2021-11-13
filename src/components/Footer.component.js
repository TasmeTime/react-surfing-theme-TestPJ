import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/images/logo.png";
import vimeo from "../assets/images/vimeo.png";
import twitter from "../assets/images/twitter.png";
import tumblr from "../assets/images/tumblr.png";

export default function Footer() {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <nav>
        <a href="" className={styles.navItem}>
          STORIES
        </a>
        <a href="" className={styles.navItem}>
          EVENTS
        </a>
        <a href="" className={styles.navItem}>
          PLACES
        </a>
        <a href="" className={styles.navItem}>
          BOARDS
        </a>
      </nav>
      <div className={styles.socialMedia}>
        <a href="#">
          <img src={vimeo}></img>
        </a>
        <a href="#">
          <img src={twitter}></img>
        </a>
        <a href="#">
          <img src={tumblr}></img>
        </a>
      </div>
    </div>
  );
}
