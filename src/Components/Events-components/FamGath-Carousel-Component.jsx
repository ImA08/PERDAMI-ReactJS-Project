import React from "react";
import styles from "../../Css/owl.carousel.min.module.css";
import caro1 from "../../Assets/pelantikan/pelantikan1.jpg";
import caro2 from "../../Assets/pelantikan/pelantikan2.jpg";
import caro3 from "../../Assets/pelantikan/pelantikan3.jpg";
import caro4 from "../../Assets/pelantikan/pelantikan4.jpg";
import caro5 from "../../Assets/pelantikan/pelantikan5.jpg";
import caro6 from "../../Assets/pelantikan/pelantikan5.jpg";

const FamGathCarousel = () => {
  return (
    <>
      <div className={`${styles["container-fluid"]} ${styles["my-5"]}`}>
        <div className={styles.row}>
          <div className={`${styles["col-12"]} ${styles["m-auto"]}`}>
            <div className={`${styles["owl-carousel"]} ${styles["owl-theme"]}`}>
              <div className={`${styles["item"]} ${styles["mb-4"]}`}>
                <div
                  className={`${styles["card"]} ${styles["border-0"]} ${styles["shadow"]}`}>
                  <img
                    src={caro1}
                    alt=""
                    className={`${styles["card-img-top"]}`}
                  />
                  <div className={`${styles["card-body"]}`}>
                    <div
                      className={`${styles["card-title"]} ${styles["text-center"]}`}>
                      <h5>PERDAMI</h5>
                      <h5>ACEH</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.item}>
                <div
                  className={`${styles["card"]} ${styles["border-0"]} ${styles["shadow"]}`}>
                  <img
                    src={caro1}
                    alt=""
                    className={`${styles["card-img-top"]}`}
                  />
                  <div className={`${styles["card-body"]}`}>
                    <div
                      className={`${styles["card-title"]} ${styles["text-center"]}`}>
                      <h5>PERDAMI</h5>
                      <h5>ACEH</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div
                  className={`${styles["card"]} ${styles["border-0"]} ${styles["shadow"]}`}>
                  <img
                    src={caro2}
                    alt=""
                    className={`${styles["card-img-top"]}`}
                  />
                  <div className={`${styles["card-body"]}`}>
                    <div
                      className={`${styles["card-title"]} ${styles["text-center"]}`}>
                      <h5>PERDAMI</h5>
                      <h5>ACEH</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div
                  className={`${styles["card"]} ${styles["border-0"]} ${styles["shadow"]}`}>
                  <img
                    src={caro3}
                    alt=""
                    className={`${styles["card-img-top"]}`}
                  />
                  <div className={`${styles["card-body"]}`}>
                    <div
                      className={`${styles["card-title"]} ${styles["text-center"]}`}>
                      <h5>PERDAMI</h5>
                      <h5>ACEH</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div
                  className={`${styles["card"]} ${styles["border-0"]} ${styles["shadow"]}`}>
                  <img
                    src={caro4}
                    alt=""
                    className={`${styles["card-img-top"]}`}
                  />
                  <div className={`${styles["card-body"]}`}>
                    <div
                      className={`${styles["card-title"]} ${styles["text-center"]}`}>
                      <h5>PERDAMI</h5>
                      <h5>ACEH</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div
                  className={`${styles["card"]} ${styles["border-0"]} ${styles["shadow"]}`}>
                  <img
                    src={caro5}
                    alt=""
                    className={`${styles["card-img-top"]}`}
                  />
                  <div className={`${styles["card-body"]}`}>
                    <div
                      className={`${styles["card-title"]} ${styles["text-center"]}`}>
                      <h5>PERDAMI</h5>
                      <h5>ACEH</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div
                  className={`${styles["card"]} ${styles["border-0"]} ${styles["shadow"]}`}>
                  <img
                    src={caro6}
                    alt=""
                    className={`${styles["card-img-top"]}`}
                  />
                  <div className={`${styles["card-body"]}`}>
                    <div
                      className={`${styles["card-title"]} ${styles["text-center"]}`}>
                      <h5>PERDAMI</h5>
                      <h5>ACEH</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamGathCarousel;
