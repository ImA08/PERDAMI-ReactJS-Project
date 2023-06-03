import React from "react";
import Logo from "../../Assets/img/logo.jpg";

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
    </>
  );
}

export default AboutSection;
