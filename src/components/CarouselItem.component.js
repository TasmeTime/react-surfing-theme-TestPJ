import React from "react";
import styles from "../styles/CarouselItem.module.css";
import board from "../assets/images/board.png";

export default function CarouselItem() {
  return (
    <div className={styles.item}>
      {/* <span className={styles.bgElement}></span> */}
      <div className={styles.imageContainer}>
        <img src={board}></img>
        <span className={styles.imgBG}></span>
      </div>
      <div className={styles.info}>
        <span className={styles.category}>FUNBOARDS</span>
        <h3 className={styles.title}>Chilli Rare Bird</h3>
        <div>
          <span className={styles.price}>$890</span>
          <span className={styles.buy}>BUY</span>
        </div>
      </div>
    </div>
  );
}
