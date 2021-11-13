import React from "react";
import styles from "../styles/Hero.module.css";
import logo from "../assets/images/logo.png";
import hero from "../assets/images/hero.png";
import vimeo from "../assets/images/vimeo.png";
import twitter from "../assets/images/twitter.png";
import tumblr from "../assets/images/tumblr.png";

export default function Hero() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          <img src={logo}></img>
        </a>
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
      </header>

      <div className={styles.heroContent}>
        <img
          src={hero}
          alt="some one surfing on a wave"
          className={styles.sliderImage}
        />
        <div className={styles.textContainer}>
          <h6>YOUR</h6>
          <h1>Beatiful Escape</h1>
          <p>
            One of the greatest things about the sport of surfing is <br /> that
            you need only three things: your body. <br /> a surfboard and a wave
          </p>
        </div>
        <div className={styles.sliderControl}>
          <i className="bi bi-chevron-left"></i>
          <span className={styles.active}>1</span>/<span>5</span>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <div className={styles.sideCol}>
        <h3>First Surfing Magazine</h3>
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
    </div>
  );
}
