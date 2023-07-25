import React from "react";
import Navbar from "../Navbar-components/Navbar";
import Footer from "../Footer-components/Footer";
import Logo from "../../Assets/img/logo.jpg";

import Blank from "../../Assets/struktur-org/blank-00.png";

import Romi_Yusardi from "../../Assets/struktur-org/dr.Romi_Yusardi.jpg";

const DKEDK = () => {
  return (
    <>
      <Navbar />
      <section className="starting-point strc-org">
        <div className="container">
          <div className="caption-head">
            <h2>
              DEWAN KEHORMATAN ETIK DAN DISIPLIN KEDOKTERAN SUMATERA BARAT
            </h2>
            <h3>PERIODE 2022-2025</h3>
          </div>

          <img src={Logo} alt="" className="logo-head" />

          <div className="row">
            <div className="profil-img col-lg-12">
              <img src={Romi_Yusardi} alt="" />
              <h3>KETUA</h3>
              <p> dr. Romi yusardi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p> dr. Harmen, SpM(K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p> dr. Azwin Aziz, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-12">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>Dr. dr. Havriza Vitresia, SpM(K)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DKEDK;
