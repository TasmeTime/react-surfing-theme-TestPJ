import React from "react";
import styles from "../styles/Contact.module.css";
import contact from "../assets/images/contact.png";

export default function Contact() {
  return (
    <div className={styles.container}>
      <img src={contact} />
      <section>
        <h5>OUR CAMP</h5>
        <address>
          CA 91932, USA <br />
          Imperial Beach <br />
          560 Silver Strand Blvd
        </address>
        <a href="">GET IN TOUCH</a>
      </section>
    </div>
  );
}
