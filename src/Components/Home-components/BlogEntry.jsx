import React from "react";
import styles from "../../Css/owl.carousel.min.module.css";

const BlogEntry = ({ image, day, month, year, heading, text }) => {
  return (
    <div className={styles.item}>
      <div className={`${styles["blog-entry"]}`}>
        <a
          href="#"
          className={`${styles["block-20"]} ${styles["d-flex"]} ${styles["align-items-start"]}`}
          style={{ backgroundImage: `url(${image})` }}>
          <div
            className={`${styles["meta-date"]} ${styles["text-center"]} ${styles["p-2"]}`}>
            <span className={styles.day}>{day}</span>
            <span className={styles.mos}>{month}</span>
            <span className={styles.yr}>{year}</span>
          </div>
        </a>
        <div
          className={`${styles["text"]} ${styles["border"]} ${styles["border-top-0"]} ${styles["p-4"]}`}>
          <h3 className={styles.heading}>
            <a href="#">{heading}</a>
          </h3>
          <p>{text}</p>
          <div
            className={`${styles["d-flex"]} ${styles["align-items-center"]} ${styles["mt-4"]}`}>
            <p className={`${styles["mb-0"]}`}>
              <a
                href="#"
                className={`${styles["btn"]} ${styles["btn-primary"]}`}>
                Read More <span className="ion-ios-arrow-round-forward"></span>
              </a>
            </p>
            <p className="ml-auto meta2 mb-0">
              <a href="#" className="mr-2">
                Admin
              </a>
              <a href="#" className="meta-chat">
                <span className="ion-ios-chatboxes"></span> 3
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEntry;
