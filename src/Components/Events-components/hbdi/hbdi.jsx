import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { forwardRef } from "react";
import Navbar from "../../Navbar-components/Navbar";
import Footer from "../../Footer-components/Footer";
import HeadImg from "../../../Assets/events/hbdii.jpg";

import Img1 from "../../../Assets/events/bg-masthead.jpg";
import Img2 from "../../../Assets/events/bg-masthead.jpg";
import Img3 from "../../../Assets/events/bg-masthead.jpg";
import Img4 from "../../../Assets/events/bg-masthead.jpg";
import Img5 from "../../../Assets/events/bg-masthead.jpg";

const HBDI = () => {
  const pelantikanRef = useRef(null);
  const handleLinkClick = () => {
    pelantikanRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <div className="container mt-5 starting-point">
        <div className="row">
          <div className="col-lg-8">
            {/* <!-- Post content--> */}
            <article>
              {/* <!-- Post header--> */}
              <header className="mb-4">
                {/* <!-- Post title--> */}
                <h1 className="fw-bolder mb-1">
                  HARI BAKTI DOKTER INDONESIA 115th
                </h1>
                {/* <!-- Post meta content--> */}
                <div className="text-muted fst-italic mb-2">
                  Posted on may 20th, 2023 by PERDAMI Sumatera Barat
                </div>
                {/* <!-- Post categories--> */}
                <a
                  className="badge bg-secondary text-decoration-none link-light"
                  href="#!">
                  HBDI 115th
                </a>
                <a
                  className="badge bg-secondary text-decoration-none link-light"
                  href="#!">
                  Padang
                </a>
              </header>
              {/* <!-- Preview image figure--> */}
              <figure className="mb-4">
                <img className="img-fluid rounded" src={HeadImg} alt="..." />
              </figure>
              {/* <!-- Post content--> */}
              <section className="mb-5">
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus ipsa harum architecto fugiat maxime saepe eaque
                  iusto quibusdam, consequuntur aspernatur molestiae, alias
                  animi obcaecati praesentium soluta ex error libero at dolorum
                  modi. Minima maiores iste voluptatum a perferendis repellendus
                  et dolores. Illo minima excepturi deleniti, dolores explicabo
                  in laborum natus?
                </p>
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore nobis facere dicta voluptas culpa, nesciunt eum quod
                  ex? Debitis dolore ipsum quis, quo optio voluptatum. Dolor
                  incidunt vero reiciendis sit eaque, amet vitae odit corrupti!
                </p>
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quo in nesciunt aliquam placeat, culpa, vel itaque
                  vitae obcaecati neque nihil repellendus, voluptatem debitis
                  cum.
                </p>

                <h2 className="fw-bolder mb-4 mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  molestias maiores suscipit magni non quis expedita nostrum
                  deserunt enim ipsam officia tenetur, quia ex cumque dolorum
                  est veniam neque possimus.
                </p>
                <p className="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam pariatur accusantium saepe consequuntur esse
                  praesentium rerum, quas quae atque commodi voluptate
                  dignissimos nihil explicabo nobis ea?
                </p>
              </section>
            </article>
            {/* <!-- Comments section--> */}
          </div>
          {/* <!-- Side widgets--> */}
          <div className="col-lg-4">
            {/* <!-- Search widget--> */}
            {/* <div className="card mb-4">
              <div className="card-header">Search</div>
              <div className="card-body">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter search term..."
                    aria-label="Enter search term..."
                    aria-describedby="button-search"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-search"
                    type="button">
                    Go!
                  </button>
                </div>
              </div>
            </div>{" "} */}
            {/* <!-- Categories widget--> */}
            {/* <div className="card mb-4">
              <div className="card-header">Categories</div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <div ref={pelantikanRef} onClick={handleLinkClick}>
                          Pelantikan Pengurus
                        </div>
                      </li>
                      <li>
                        <Link to="/Pelantikan">Symposium</Link>
                      </li>
                      <li>
                        <Link to="/Pelantikan">Workshop</Link>
                      </li>
                      <li>
                        <Link to="/Pelantikan">Family Gathering</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="family-gathering.html">Family Gathering</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <!-- Side widget--> */}
            {/* <div className="card mb-4">
              <div className="card-header">Side Widget</div>
              <div className="card-body">
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the Bootstrap 5 card component!
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="starting-point head-symposium">
        <div className="container">
          {/* <h2 className="border-bottom">SYMPOSIUM</h2> */}
          <div className="row">
            <div className="col-md-6 col-sm-12 order-sm-first text-center">
              <img src={Img1} className="float-start me-3" />
            </div>
            <div className="col-md-6 col-sm-12 order-sm-last text-start">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                laudantium veritatis tempore cumque modi culpa eaque magni
                inventore eligendi quisquam esse dicta accusantium a error hic
                rerum corrupti aliquid ex reiciendis ea quas aliquam suscipit
                deserunt. Dolore voluptates necessitatibus accusantium
                asperiores sapiente ex ab officia tenetur, repellat deleniti
                similique non.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="symposium-part">
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img2} />
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img3} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img4} />
              </div>
              <div className="col-md-6 col-sm-12 d-flex align-items-center">
                <img src={Img5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HBDI;
