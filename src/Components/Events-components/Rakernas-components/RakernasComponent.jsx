import React from "react";
import styles from "../../../Css/rakernas.module.css";
import bgImg1 from "../../../Assets/rakernas/rakernas1.jpg";
import bgImg2 from "../../../Assets/rakernas/rakernas2.jpg";
import bgImg3 from "../../../Assets/rakernas/rakernas3.jpg";
import bgImg4 from "../../../Assets/rakernas/rakernas4.jpg";
import bgImg5 from "../../../Assets/rakernas/rakernas5.jpg";
import bgImg6 from "../../../Assets/rakernas/rakernas6.jpg";

const RakernasComponent = () => {
  return (
    <>
      {/* MastHead */}
      <header className={`${styles["masthead"]} ${styles["starting-point"]}`}>
        <div
          className={`${styles["container"]} ${styles["position-relative"]}`}>
          <div
            className={`${styles["row"]} ${styles["justify-content-center"]}`}>
            <div className={styles["col-xl-6"]}>
              <div className={`${styles["text-center"]} ${["text-white"]}`}>
                {/* <!-- Page heading--> */}
                <h1 className={styles.mb - 5}>RAKERNAS</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Image Showcases--> */}
      <section className={styles.showcase}>
        <div className={`${styles["container-fluid"]} ${styles["p-0"]}`}>
          <div className={`${styles["row"]} ${styles["g-0"]}`}>
            <div
              className={`${styles["col-lg-6"]} ${styles["order-lg-2"]} ${styles["text-white"]} ${styles["showcase-img"]}`}
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}></div>

            <div
              className={`${styles["col-lg-6"]} ${styles["order-lg-1"]} ${styles["my-auto"]} ${styles["showcase-text"]}`}>
              <h2>Lorem, ipsum dolor.</h2>
              <p className={`${styles["lead"]} ${styles["mb-0"]}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                unde expedita cupiditate odio distinctio, aliquam reiciendis
                recusandae iusto voluptatibus excepturi libero quidem nam rem
                nulla?
              </p>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["g-0"]}`}>
            <div
              className={`${styles["col-lg-6"]} ${styles["text-white"]} ${styles["showcase-img"]}`}
              style={{
                backgroundImage: `url(${bgImg2})`,
              }}></div>
            <div
              className={`${styles["col-lg-6"]} ${styles["my-auto"]} ${styles["showcase-text"]}`}>
              <h2>Lorem, ipsum dolor.</h2>
              <p className={`${styles["lead"]} ${styles["mb-0"]}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                facere doloribus magnam. Dolore, nemo cumque magni, similique
                rem quae nesciunt obcaecati nam doloribus vitae exercitationem?
              </p>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["g-0"]}`}>
            <div
              className={`${styles["col-lg-6"]} ${styles["order-lg-2"]} ${styles["text-white"]} ${styles["showcase-img"]}`}
              style={{
                backgroundImage: `url(${bgImg3})`,
              }}></div>
            <div
              className={`${styles["col-lg-6"]} ${styles["order-lg-1"]} ${styles["my-auto"]} ${styles["showcase-text"]}`}>
              <h2>Lorem, ipsum dolor.</h2>
              <p className={`${styles["lead"]} ${styles["mb-0"]}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit vero non tempore ipsam optio dolorum?
                Nam, eaque et. Odio quis impedit exercitationem inventore dicta.
              </p>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["g-0"]}`}>
            <div
              className={`${styles["col-lg-6"]} ${styles["text-white"]} ${styles["showcase-img"]}`}
              style={{
                backgroundImage: `url(${bgImg4})`,
              }}></div>
            <div
              className={`${styles["col-lg-6"]} ${styles["my-auto"]} ${styles["showcase-text"]}`}>
              <h2>Lorem, ipsum dolor.</h2>
              <p className={`${styles["lead"]} ${styles["mb-0"]}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                facere doloribus magnam. Dolore, nemo cumque magni, similique
                rem quae nesciunt obcaecati nam doloribus vitae exercitationem?
              </p>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["g-0"]}`}>
            <div
              className={`${styles["col-lg-6"]} ${styles["order-lg-2"]} ${styles["text-white"]} ${styles["showcase-img"]}`}
              style={{
                backgroundImage: `url(${bgImg5})`,
              }}></div>
            <div
              className={`${styles["col-lg-6"]} ${styles["order-lg-1"]} ${styles["my-auto"]} ${styles["showcase-text"]}`}>
              <h2>Lorem, ipsum dolor.</h2>
              <p className={`${styles["lead"]} ${styles["mb-0"]}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit vero non tempore ipsam optio dolorum?
                Nam, eaque et. Odio quis impedit exercitationem inventore dicta.
              </p>
            </div>
          </div>
          <div className={`${styles["row"]} ${styles["g-0"]}`}>
            <div
              className={`${styles["col-lg-6"]} ${styles["text-white"]} ${styles["showcase-img"]}`}
              style={{
                backgroundImage: `url(${bgImg6})`,
              }}></div>
            <div
              className={`${styles["col-lg-6"]} ${styles["my-auto"]} ${styles["showcase-text"]}`}>
              <h2>Lorem, ipsum dolor.</h2>
              <p className={`${styles["lead"]} ${styles["mb-0"]}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                facere doloribus magnam. Dolore, nemo cumque magni, similique
                rem quae nesciunt obcaecati nam doloribus vitae exercitationem?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RakernasComponent;
