import React from "react";
import styles from "../styles/Subscribe.module.css";

export default function Subscribe() {
  return (
    <div className={styles.container}>
      <span className={styles.line}></span>
      <h1>Join the Club</h1>
      <h4>
        By better understanding the various aspects of surfing, you will improve
        faster and have more fun in the water.
      </h4>
      <form action="#">
        <input type="email" required placeholder="YOUR E-MAIL" />
        <button type="submit">
          <i className="bi bi-chevron-right" />
        </button>
      </form>
    </div>
  );
}
