import React from "react";
import styles from "../styles/Shop.module.css";

import CarouselItem from "./CarouselItem.component";
export default function Shop() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span>SHOP</span>
        <h1>Surfboards</h1>
      </div>
      <div className={styles.carousel}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <div className={styles.controls}>
          <i className="bi bi-chevron-left"></i>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
      <a href="" className={styles.showAll}>
        SHOW ALL
      </a>
    </div>
  );
}
