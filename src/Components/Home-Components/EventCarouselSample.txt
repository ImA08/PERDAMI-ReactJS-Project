import React from "react";
import BlogEntry from "./BlogEntry";
import ReactOwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/owl.carousel.min.js";
import { OwlCarouselProps } from "react-owl-carousel";

import "../../Css/Carousel/css/owl.carousel.min.css";
import "../../Css/Carousel/css/owl.theme.default.min.css";

import styles from "../../Css/owl.carousel.min.module.css";
import event1 from "../../Assets/events/(2) H1.c. Workshop.jpg";
import event2 from "../../Assets/events/(129) H1.e. Pelantikan Pengurus Perdami.jpg";
import event3 from "../../Assets/events/(1) H3.a. Fun Bike.jpg";

const CarouselSample = () => {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading-section mb-5 pb-md-4">Carousel #07</h2>
            </div>
            <div className="col-md-12">
              <div className="featured-carousel owl-carousel">
                <div>
                  {/* Menggunakan komponen BlogEntry dengan properti yang sesuai */}
                  <BlogEntry
                    image="../../Assets/events/(2) H1.c. Workshop.jpg"
                    day="26"
                    month="Nov."
                    year="2019"
                    heading="Sumatera Opthalmologist Meeting 15th"
                    text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    link="/som15th"
                  />

                  <BlogEntry
                    image="../../Assets/events/(129) H1.e. Pelantikan Pengurus Perdami.jpg"
                    day="26"
                    month="Nov."
                    year="2019"
                    heading="Rakernas"
                    text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    link="/"
                  />

                  <BlogEntry
                    image="../../Assets/events/(1) H3.a. Fun Bike.jpg"
                    day="26"
                    month="Nov."
                    year="2019"
                    heading="HBDI 115th"
                    text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselSample;
