import React from "react";
import styles from "../styles/ArticleSmall.module.css";
import pointBreak from "../assets/images/pointBreak.png";

export default function ArticleSmall() {
  return (
    <article className={styles.container}>
      <span className={styles.sideText}>Surf Camps</span>
      <img className={styles.image} src={pointBreak} />
      <div className={styles.infoContainer}>
        <span className={styles.number}>02</span>
        <h1 className={styles.title}>Point Break</h1>
        <p>
          By better understanding the various aspects of surfing, By better
          understanding the various aspects of surfing, you will improve faster
          and have more fun in the water.
        </p>
        <a href="" className={styles.readMore}>
          READ MORE
        </a>
      </div>
    </article>
  );
}
