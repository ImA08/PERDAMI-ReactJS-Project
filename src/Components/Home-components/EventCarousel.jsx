import React from "react";
import "../../Css/main.css";
import EventSlider from "./EventSlider";
import event1 from "../../Assets/events/(2) H1.c. Workshop.jpg";
import event2 from "../../Assets/events/(129) H1.e. Pelantikan Pengurus Perdami.jpg";
import event3 from "../../Assets/events/(1) H3.a. Fun Bike.jpg";

function EventCarousel() {
  return (
    <>
      <div class="events">
        <h2>ACARA</h2>
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
                        <h5 className="card-title">Workshop</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">
                          Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <img src={event2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Pelantikan Anggota</h5>
                        <p className="card-text"></p>
                        <a href="pelantikan.html" className="btn btn-primary">
                          Selengkapnya
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                      <img src={event3} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Family Gathering</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">
                          Selengkapnya
                        </a>
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
