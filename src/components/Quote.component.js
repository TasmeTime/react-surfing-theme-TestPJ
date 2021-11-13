import React from "react";
import styles from "../styles/Quote.module.css";

export default function Quote() {
  return (
    <div className={styles.quoteContainer}>
      <blockquote>
        Surfing is the most blissful experience you can have on this planet, a
        taste of heaven.
      </blockquote>
      <span className={styles.name}>JOHN MCCARTHY</span>
      <span className={styles.line}></span>
    </div>
  );
}
