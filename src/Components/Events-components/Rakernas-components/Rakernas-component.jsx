import React from "react";
// import Img1 from "../../../Assets/img";

const RakernasComponent = () => {
  return (
    <>
      {/* <!-- Header--> */}
      <header className="bg-primary bg-gradient text-white starting-point">
        <div className="container px-4 text-center"></div>
      </header>
      {/* <!-- About section--> */}
      <section id="about">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>About this page</h2>
              <p className="lead">
                This is a great place to talk about your webpage. This template
                is purposefully unstyled so you can use it as a boilerplate or
                starting point for you own landing page designs! This template
                features:
              </p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>
                  Responsive behavior when clicking nav links perfect for a one
                  page website
                </li>
                <li>
                  Bootstrap's scrollspy feature which highlights which section
                  of the page you're on in the navbar
                </li>
                <li>
                  Minimal custom CSS so you are free to explore your own unique
                  design options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services section--> */}
      <section className="bg-light" id="services">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Services we offer</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                optio velit inventore, expedita quo laboriosam possimus ea
                consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                laborum vel, labore ut velit dignissimos.
              </p>
            </div>
          </div>
        </div>

        <div class="container">
          <h2 class="border-bottom">SYMPOSIUM</h2>
          <div class="row">
            <div class="col-md-6 col-sm-12 order-sm-first text-center">
              {/* <img src={Img1} class="float-start me-3" /> */}
            </div>
            <div class="col-md-6 col-sm-12 order-sm-last text-start">
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
          <div class="symposium-part">
            <div class="row">
              <div class="col-md-6 col-sm-12 d-flex align-items-center">
                {/* <img src={Img2} /> */}
              </div>
              <div class="col-md-6 col-sm-12 d-flex align-items-center">
                {/* <img src={Img3} /> */}
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12 d-flex align-items-center">
                {/* <img src={Img4} /> */}
              </div>
              <div class="col-md-6 col-sm-12 d-flex align-items-center">
                {/* <img src={Img5} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RakernasComponent;
