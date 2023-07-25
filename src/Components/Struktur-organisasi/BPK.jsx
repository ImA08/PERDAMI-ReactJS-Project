import React from "react";
import Navbar from "../Navbar-components/Navbar";
import Footer from "../Footer-components/Footer";
import Logo from "../../Assets/img/logo.jpg";

import Blank from "../../Assets/struktur-org/blank-00.png";
import Khairul_Said from "../../Assets/struktur-org/dr.Khairul_Said.jpeg";
import Hondrizal from "../../Assets/struktur-org/dr.Hondrizal.jpeg";
import Afiyarni from "../../Assets/struktur-org/dr.Afiyarni.jpg";
import Mardijas_Efendi from "../../Assets/struktur-org/dr.Mardijas_Efendi.jpg";

const BPK = () => {
  return (
    <>
      <Navbar />
      <section className="starting-point strc-org">
        <div className="container">
          <div className="caption-head">
            <h2>BADAN PEMERIKSA KEUANGAN (BPK)</h2>
            <h3>PERIODE 2022-2025</h3>
          </div>

          <img src={Logo} alt="" className="logo-head" />

          <div className="row">
            <div className="profil-img col-lg-12">
              <img src={Khairul_Said} alt="" />
              <h3>KETUA</h3>
              <p> dr. Khairul Said, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Mardijas_Efendi} alt="" />
              <h3>ANGGOTA</h3>
              <p> dr. Mardijas Effendi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Afiyarni} alt="" />
              <h3>ANGGOTA</h3>
              <p> dr. Afiyarni Ibrahim, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-12">
              <img src={Hondrizal} alt="" />
              <h3>ANGGOTA</h3>
              <p> dr. Hondrial, SpM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BPK;
