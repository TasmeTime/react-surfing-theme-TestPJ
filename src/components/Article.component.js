import React from "react";
import styles from "../styles/Article.module.css";
import surfTraining from "../assets/images/surfTraining.png";

export default function Article() {
  return (
    <article className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.number}>01</span>
        <h1 className={styles.title}>Surf Training</h1>
        <p>
          By better understanding the various aspects of surfing, By better
          understanding the various aspects of surfing, you will improve faster
          and have more fun in the water.
        </p>
        <a href="" className={styles.readMore}>
          READ MORE
        </a>
      </div>
      <img className={styles.image} src={surfTraining} />
      <span className={styles.sideText}>Surf Camps</span>
    </article>
  );
}
