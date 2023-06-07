import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar-components/Navbar";
import Footer from "../Footer-components/Footer";
import HeadImg from "../../Assets/img/caousel1.jpeg";

const Som15th = () => {
  return (
    <>
      <Navbar />
      <div class="container mt-5 starting-point">
        <div class="row">
          <div class="col-lg-8">
            {/* <!-- Post content--> */}
            <article>
              {/* <!-- Post header--> */}
              <header class="mb-4">
                {/* <!-- Post title--> */}
                <h1 class="fw-bolder mb-1">
                  15th SUMATERA OPTHALMOLOGIST MEETING
                </h1>
                {/* <!-- Post meta content--> */}
                <div class="text-muted fst-italic mb-2">
                  Posted on April 21, 2023 by PERDAMI Sumatera Barat
                </div>
                {/* <!-- Post categories--> */}
                <a
                  class="badge bg-secondary text-decoration-none link-light"
                  href="#!">
                  som 15th
                </a>
                <a
                  class="badge bg-secondary text-decoration-none link-light"
                  href="#!">
                  Bukit tinggi
                </a>
              </header>
              {/* <!-- Preview image figure--> */}
              <figure class="mb-4">
                <img class="img-fluid rounded" src={HeadImg} alt="..." />
              </figure>
              {/* <!-- Post content--> */}
              <section class="mb-5">
                <p class="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus ipsa harum architecto fugiat maxime saepe eaque
                  iusto quibusdam, consequuntur aspernatur molestiae, alias
                  animi obcaecati praesentium soluta ex error libero at dolorum
                  modi. Minima maiores iste voluptatum a perferendis repellendus
                  et dolores. Illo minima excepturi deleniti, dolores explicabo
                  in laborum natus?
                </p>
                <p class="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore nobis facere dicta voluptas culpa, nesciunt eum quod
                  ex? Debitis dolore ipsum quis, quo optio voluptatum. Dolor
                  incidunt vero reiciendis sit eaque, amet vitae odit corrupti!
                </p>
                <p class="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quo in nesciunt aliquam placeat, culpa, vel itaque
                  vitae obcaecati neque nihil repellendus, voluptatem debitis
                  cum.
                </p>

                <h2 class="fw-bolder mb-4 mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p class="fs-5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  molestias maiores suscipit magni non quis expedita nostrum
                  deserunt enim ipsam officia tenetur, quia ex cumque dolorum
                  est veniam neque possimus.
                </p>
                <p class="fs-5 mb-4">
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
          <div class="col-lg-4">
            {/* <!-- Search widget--> */}
            {/* <div class="card mb-4">
              <div class="card-header">Search</div>
              <div class="card-body">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter search term..."
                    aria-label="Enter search term..."
                    aria-describedby="button-search"
                  />
                  <button
                    class="btn btn-primary"
                    id="button-search"
                    type="button">
                    Go!
                  </button>
                </div>
              </div>
            </div>{" "} */}
            {/* <!-- Categories widget--> */}
            <div class="card mb-4">
              <div class="card-header">Categories</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link to={"../../Pages/Events/Pelantikan"}>
                          Pelantikan Pengurus
                        </Link>
                      </li>
                      <li>
                        <a href="#!">Symposium</a>
                      </li>
                      <li>
                        <a href="#!">Workshop</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="family-gathering.html">Family Gathering</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Side widget--> */}
            {/* <div class="card mb-4">
              <div class="card-header">Side Widget</div>
              <div class="card-body">
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the Bootstrap 5 card component!
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Som15th;
