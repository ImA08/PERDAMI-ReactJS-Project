import React from "react";
import carousel1 from "../../Assets/img/carousel5.jpg";
import carousel2 from "../../Assets/img/carousel4.jpg";
import carousel3 from "../../Assets/img/carousel1.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="starting-point carousel caro-heading slide"
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carousel1}
            className="carousel-image d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousel2}
            className="carousel-image d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={carousel3}
            className="carousel-image d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
