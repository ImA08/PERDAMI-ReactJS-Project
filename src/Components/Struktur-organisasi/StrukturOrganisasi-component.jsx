import React from "react";
import Navbar from "../Navbar-components/Navbar";
import Footer from "../Footer-components/Footer";
import Logo from "../../Assets/img/logo.jpg";

import Blank from "../../Assets/struktur-org/blank-00.png";
import Elfi_Risalma_Putri from "../../Assets/struktur-org/dr.Elfi_Risalma_Putri.jpg";
import Ellya_Thaher from "../../Assets/struktur-org/dr.Ellya_Thaher.jpeg";
import Fitratul_Ilahi from "../../Assets/struktur-org/dr.Fitratul_Ilahi.jpg";
import Khalilul_Rahman from "../../Assets/struktur-org/dr.Khalilul_Rahman.jpeg";
import Felichia_Yovianda from "../../Assets/struktur-org/dr.Felichia_Yovianda.jpeg";

function StrukturOrganisasi() {
  return (
    <>
      <Navbar />
      <section className="starting-point strc-org">
        <div className="container">
          <div className="caption-head">
            <h2>PENGURUS PERDAMI WILAYAH SUMATERA BARAT</h2>
            <h3>PERIODE</h3>
          </div>

          <img src={Logo} alt="" className="logo-head" />
          <div className="row">
            <h3>DEWAN PENASEHAT</h3>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Khalilul_Rahman} alt="" />
              <h3>ANGGOTA</h3>
              <p>Prof. dr. Khalilul Rahman, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>Dr. dr. M. Hidayat, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>Dr. dr. Hendriati, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Ellya_Thaher} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Ellya Thaher, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Heksan, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Muslim, SpM (K)</p>
            </div>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Syarif Amal, SpM</p>
            </div>
          </div>
          <div className="row">
            <h3>PENGURUS INTI PERDAMI SUMATERA BARAT</h3>
            <div className="profil-img col-lg-12">
              <img src={Fitratul_Ilahi} alt="" />
              <h3>KETUA</h3>
              <p>Dr. dr. Fitratul Ilahi, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>WAKIL KETUA I</h3>
              <p>dr. Rinda Wati, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>WAKIL KETUA II</h3>
              <p>dr. Naima Lassie, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>SEKRETARIS</h3>
              <p>dr. Fitriliza Hamdy, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>BENDAHARA</h3>
              <p>dr. Neneng Susanti, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>WAKIL SEKRETARIS</h3>
              <p>dr. Nova Herdana, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Blank} alt="" />
              <h3>WAKIL BENDAHARA</h3>
              <p>dr. Lavina Rini Sofyan, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI ILMIAH DAN PENGEMBANGAN PROFESI</h3>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>KETUA</h3>
              <p>dr. Reni Anggraini, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-4 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Lona Diolanda, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-4 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Raihana Rustam, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-4 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Desty Ria Tiffani, SPM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PENANGGULANGAN BUTA KATARAK</h3>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>KETUA</h3>
              <p>dr. Irawadi Putra, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Mayasari Nasrul, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Primeri Putri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Felichia_Yovianda} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Felichia Yovianda, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-12">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Andri Yosrizal, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PENGABDIAN MASYARAKAT</h3>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>KETUA</h3>
              <p>dr. Dahlina, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Adil, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Ismail Abdullah, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Suci Permata Sari, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI P2KB</h3>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>KETUA</h3>
              <p>dr. Julita, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Haves Ashan, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Yanuhardi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Silvy Fetriyanita, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PEMBERDAYAAN DAN KESEJAHTERAAN ANGGOTA</h3>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>KETUA</h3>
              <p>dr. Linda Wira Putri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Tetri Gusvariani, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Ewi Primadona, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Indriani Syafitri, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PGPK</h3>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>KETUA</h3>
              <p>dr. Ike Rahayu, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Elfi_Risalma_Putri} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Elfi Risalma Puteri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Zulhijjah Yati Syari, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Kaniela Ayuni Putri, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PENGABDIAN HUMAS IT DAN WEBSITE</h3>
            <div className="profil-img col-lg-12">
              <img src={Blank} alt="" />
              <h3>KETUA</h3>
              <p>dr. Diska Herriadi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Dicky Stevano Zukhri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Messia Refri Rahmi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Deni Wiryulisda, SpM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default StrukturOrganisasi;
