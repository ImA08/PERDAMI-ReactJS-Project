import React from "react";
import styles from "../../Css/owl.carousel.min.module.css";
import ReactOwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/owl.carousel.min.js";
import { OwlCarouselProps } from "react-owl-carousel";
import { Link } from "react-router-dom";

const BlogEntry = ({ image, day, month, year, heading, text, link }) => {
  return (
    <ReactOwlCarousel>
      <div className="item">
        <div className="blog-entry">
          <Link
            to={link}
            className="block-20 d-flex align-items-start"
            style={{ backgroundImage: `url(${image})` }}>
            <div className="meta-date text-center p-2">
              <span className="day">{day}</span>
              <span className="mos">{month}</span>
              <span className="yr">{year}</span>
            </div>
          </Link>
          <div className="text border border-top-0 p-4">
            <h3 className="heading">
              <a href="#">{heading}</a>
            </h3>
            <p>{text}</p>
            <div className="d-flex align-items-center mt-4">
              <p className="mb-0">
                <a href="#" className="btn btn-primary">
                  Read More{" "}
                  <span className="ion-ios-arrow-round-forward"></span>
                </a>
              </p>
              <p className="ml-auto meta2 mb-0">
                <a href="#" className="mr-2">
                  Admin
                </a>
                <a href="#" className="meta-chat">
                  <span className="ion-ios-chatboxes"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ReactOwlCarousel>
  );
};

export default BlogEntry;
