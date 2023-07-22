import React from "react";
import Navbar from "../../Components/Navbar-components/Navbar";

const Workshop = () => {
  return (
    <>
      {/* MastHead */}
      <header className="masthead starting-point">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                {/* <!-- Page heading--> */}
                <h1 className="mb-5">
                  Generate more leads with a professional landing page!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Image Showcases--> */}
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style="
              background-image: url('assets/img/\(11\)\ H3.b.\ Senam\ Pagi.jpg');
            "></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Lorem, ipsum dolor.</h2>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                unde expedita cupiditate odio distinctio, aliquam reiciendis
                recusandae iusto voluptatibus excepturi libero quidem nam rem
                nulla?
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 text-white showcase-img"
              style="
              background-image: url('assets/img/\(104\)\ H3.a.\ Fun\ Bike.jpg');
            "></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Lorem, ipsum dolor.</h2>
              <p className="lead mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                facere doloribus magnam. Dolore, nemo cumque magni, similique
                rem quae nesciunt obcaecati nam doloribus vitae exercitationem?
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style="
              background-image: url('assets/img/\(8\)\ H3.c.\ Stand\ Kuliner.jpg');
            "></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Lorem, ipsum dolor.</h2>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium reprehenderit vero non tempore ipsam optio dolorum?
                Nam, eaque et. Odio quis impedit exercitationem inventore dicta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workshop;
