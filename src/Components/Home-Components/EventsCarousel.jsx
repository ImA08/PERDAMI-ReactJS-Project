import React from "react";
import { Link } from "react-router-dom";
import "../../Css/main.css";
import EventSlider from "./EventSlider";
import event1 from "../../Assets/events/caousel1.jpeg";
import event2 from "../../Assets/rakernas/rakernas1.jpg";
import event3 from "../../Assets/events/hbdii.jpg";
// import { Carousel } from "bootstrap";
// import { CarouselItem } from "react-bootstrap";

function EventCarousel() {
  return (
    <>
      <div className="events">
        <h2>Berita dan Acara</h2>
        <div className="col-lg-12">
          <div
            id="carouselExample"
            className="carousel slide d-none d-md-block"
            data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <img src={event1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">
                          Sumatera Opthalmologist Meeting 15th
                        </h5>
                        <p className="card-text"></p>
                        <Link to="/Som15th" className="btn btn-primary">
                          Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <img src={event2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Rakernas</h5>
                        <p className="card-text"></p>
                        <Link to="/rakernas" className="btn btn-primary">
                          Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <img src={event3} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">HBDI 115th</h5>
                        <p className="card-text"></p>
                        <Link to="/hbdi" className="btn btn-primary">
                          Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <EventSlider />
    </>
  );
}

export default EventCarousel;
