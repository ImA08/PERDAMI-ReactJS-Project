import React from "react";
import Logo from "../../Assets/img/logo.jpg";
import Img from "../../Assets/pelantikan/(5) H1.e. Pelantikan Pengurus Perdami.jpg";

function AboutSection() {
  return (
    <>
      <section id="about" className="about">
        <div className="row">
          <div className="about-box col-lg-6 col-md-12">
            <img src={Logo} alt="" />
          </div>
          <div className="about-box col-lg-6 col-md-12">
            <h3>PERDAMI WILAYAH SUMATERA BARAT</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quidem fugiat maxime, dicta repellendus tempora
              voluptatibus dolorum, reprehenderit ad expedita officia quam sequi
              magni voluptas odit blanditiis distinctio atque. Eius.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <img src={Img} alt="" />
            </div>
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
        </div>
      </section>
    </>
  );
}

export default AboutSection;
