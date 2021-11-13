import React from "react";
import styles from "../styles/MediaContent.module.css";
import surfThumbnail from "../assets/images/surfThumb.png";
import surfLeft from "../assets/images/surfLeft.png";

export default function MediaContent() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <img src={surfLeft} alt="some dude w8ting by sea"></img>
        <div>
          <p>
            By better understanding the various aspects of surfing, you will
            improve faster and have more fun in the water.
          </p>
          <a className={styles.readMore}>READ MORE</a>
        </div>
      </div>

      <div className={styles.rightContent}>
        <video poster={surfThumbnail}>
          <source src="video.mp4" type="video/mp4" />
        </video>
        <span>
          <i className="bi bi-play-fill"></i>
        </span>
      </div>
    </div>
  );
}
