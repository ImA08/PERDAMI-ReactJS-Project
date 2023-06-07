import React from "react";
import "../../Css/gallery.css";

const GalleryComponent = () => {
  return (
    <>
      <section className="starting-point gallery-som15">
        <div className="container">
          <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
            Thumbnail Gallery
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="items btns-group">
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg active"
              data-name="all">
              All
            </button>
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg"
              data-name="som15th">
              SOM15th
            </button>
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg"
              data-name="pelantikan">
              Pelantikan
            </button>
            <button
              type="button"
              className="item buttons btn btn-outline-primary btn-lg"
              data-name="fam-gath">
              Family Gathering
            </button>
          </div>

          <div className="row text-center text-lg-start">
            {/* <!-- som15th --> */}
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-1">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/som15th/gallery1.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-2">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/som15th//gallery2.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-3">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/som15th//gallery3.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-4">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/som15th//gallery4.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-5">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/bussiness-meeting/(1).H1.b. Business Meeting.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-6">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/bussiness-meeting/(34).H1.b. Business Meeting.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-7">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/bussiness-meeting/(48).H1.b. Business Meeting.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-8">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/bussiness-meeting/(73).H1.b. Business Meeting.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-9">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/bussiness-meeting/(73).H1.b. Business Meeting.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="som15th">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar1-10">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/bussiness-meeting/(73).H1.b. Business Meeting.jpg"
                  alt=""
                />
              </a>
            </div>

            {/* <!-- pelantikan --> */}
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-1">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(129) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-2">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(21) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-3">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(6) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-4">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(71) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-5">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(80) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-6">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(108) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-7">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(24) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-8">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(28) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-9">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(37) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>
            <div
              className="image col-lg-3 col-md-4 col-6"
              data-name="pelantikan">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar2-10">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/pelantikan/(49) H1.e. Pelantikan Pengurus Perdami.jpg"
                  alt=""
                />
              </a>
            </div>

            {/* <!-- family-gathering --> */}
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-1">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(1) H3.b. Senam Pagi.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-2">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(21) H3.b. Senam Pagi.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-3">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(58) H3.b. Senam Pagi.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-4">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(6) H3.b. Senam Pagi.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-5">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(1) H3.a. Fun Bike.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-6">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(110) H3.a. Fun Bike.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-7">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(133) H3.a. Fun Bike.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-8">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(138) H3.a. Fun Bike.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-9">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(1) H3.c. Stand Kuliner.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-10">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(12) H3.c. Stand Kuliner.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-11">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(5) H3.c. Stand Kuliner.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-12">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(58) H3.c. Stand Kuliner.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-13">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(11) H3.d. SOM Idol.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-14">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(14) H3.d. SOM Idol.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-15">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(20) H3.d. SOM Idol.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-16">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(27) H3.d. SOM Idol.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-17">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(11) H3.e. KIM.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-18">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(12) H3.e. KIM.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-19">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(34) H3.e. KIM.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="image col-lg-3 col-md-4 col-6" data-name="fam-gath">
              <a
                href="#"
                className="d-block mb-4 h-100"
                data-bs-toggle="modal"
                data-bs-target="#gambar3-20">
                <img
                  className="img-fluid img-thumbnail"
                  src="assets/gallery/fam-gath/(35) H3.e. KIM.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <div
            className="modal fade"
            id="gambar1-1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th/"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 2 --> */}
          <div
            className="modal fade"
            id="gambar1-2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th//gallery2.jpg"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 3 --> */}
          <div
            className="modal fade"
            id="gambar1-3"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th//gallery3.jpg"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 4 --> */}
          <div
            className="modal fade"
            id="gambar1-4"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th//gallery4.jpg"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <div
            className="modal fade"
            id="gambar1-1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th/"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <div
            className="modal fade"
            id="gambar1-1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th/"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <div
            className="modal fade"
            id="gambar1-1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th/"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <div
            className="modal fade"
            id="gambar1-1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th/"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>

          {/* <!-- Modal gambar 1 --> */}
          <div
            className="modal fade"
            id="gambar1-1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <img
                  className="img-fluid"
                  src="assets/gallery/som15th/"
                  alt=""
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryComponent;
