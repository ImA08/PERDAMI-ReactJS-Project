import React from "react";
import Navbar from "../Navbar-components/Navbar";
import Footer from "../Footer-components/Footer";
import Logo from "../../Assets/img/logo.jpg";

import Blank from "../../Assets/struktur-org/blank-00.png";

// dewan penasehat
import Khalilul_Rahman from "../../Assets/struktur-org/dr.Khalilul_Rahman.jpeg";
import Hendriati from "../../Assets/struktur-org/dr.Hendriati.jpeg";

import Ellya_Thaher from "../../Assets/struktur-org/dr.Ellya_Thaher.jpeg";
import Heksan from "../../Assets/struktur-org/dr.Heksan.jpg";
import M_Hidayat from "../../Assets/struktur-org/dr.M_Hidayat.jpg";

// pengurus inti
import Fitratul_Ilahi from "../../Assets/struktur-org/dr.Fitratul_Ilahi.jpg";
import Naima_Lassie from "../../Assets/struktur-org/dr.Naima_Lassie.jpeg";
import Fitriliza_Hamdy from "../../Assets/struktur-org/dr.Fitriliza_Hamdy.jpg";
import Neneng_Susanti from "../../Assets/struktur-org/dr.Neneng_Susanti.jpg";
import Lavina_Rini_Sofyan from "../../Assets/struktur-org/dr.Lavina_Rini_Sofyan.jpg";
import Rinda_Wati from "../../Assets/struktur-org/dr.Rinda_Wati.jpeg";
import Nova_Herdana from "../../Assets/struktur-org/dr.Nova_Herdana.jpg";

// Sie Ilmiah & pengembangan profesi
import Desty_Ria_Tiffany from "../../Assets/struktur-org/dr.Desty_Ria_Tiffany.jpg";
import Reni_Anggraini from "../../Assets/struktur-org/dr.Reni_Anggraini.jpeg";
import Lona_Diolanda from "../../Assets/struktur-org/dr.Lona_Diolanda.jpg";
import Raihana_rustam from "../../Assets/struktur-org/dr.Raihana_rustam.jpeg";

// Sie penanggulangan buta katarak
import Irawadi_Putra from "../../Assets/struktur-org/dr.Irawadi_Putra.jpg";
import Felichia_Yovianda from "../../Assets/struktur-org/dr.Felichia_Yovianda.jpeg";
import Primery_Puteri from "../../Assets/struktur-org/dr.Primery_Puteri.jpg";
import Mayasari_Nasrul from "../../Assets/struktur-org/dr.Mayasari_Nasrul.jpg";
import Andri_Yosrizal from "../../Assets/struktur-org/dr.Andri_Yosrizal.jpg";

// Sie Pengabdian Masyarakat
import Dahlina from "../../Assets/struktur-org/dr.Dahlina.jpg";
import Suci_Permata from "../../Assets/struktur-org/dr.Suci_Permata.jpeg";
import Ismail_Abdullah from "../../Assets/struktur-org/dr.Ismail_Abdullah.jpg";

// sie p2kb
import Julita from "../../Assets/struktur-org/dr.Julita.jpg";
import Haves_Ashan from "../../Assets/struktur-org/dr.Haves_Ashan.jpg";
import Silvy_Fetriyanita from "../../Assets/struktur-org/dr.Silvy_Fetriyanita.jpg";
import Yanuhardi from "../../Assets/struktur-org/dr.Yanuhardi.jpg";

// sie pemberdayaan dan kesejahteraan anggota
import Linda_Wira_Putri from "../../Assets/struktur-org/dr.Linda_Wira_Putri.jpeg";
import Ewi_Primadona from "../../Assets/struktur-org/dr.Ewi_Primadona.jpeg";
import Indriani_Syafitri from "../../Assets/struktur-org/dr.Indriani_Syafitri.jpg";
import Tetri_Guvariani from "../../Assets/struktur-org/dr.Tetri_Guvariani.jpeg";

// sie pgpk
import Ike_Rahayu from "../../Assets/struktur-org/dr.Ike_Rahayu.jpeg";
import Kaniela_Ayuni_Putri from "../../Assets/struktur-org/dr.Kaniela_Ayuni_Putri.jpeg";

import Elfi_Risalma_Putri from "../../Assets/struktur-org/dr.Elfi_Risalma_Putri.jpg";
import Zulhijjah_Yati_Syari from "../../Assets/struktur-org/dr.Zulhijjah_Yati_Syari.jpeg";

// sie humas it dan web
import Diska_Herriadi from "../../Assets/struktur-org/dr.Diska_Herriadi.jpg";
import Deni_Wiryulisda from "../../Assets/struktur-org/dr.Deni_Wiryulisda.jpeg";
import Messia_Refri_Rahmi from "../../Assets/struktur-org/dr.Messia_Refri_Rahmi.jpg";
import Dicky_Stevano from "../../Assets/struktur-org/dr.Dicky_Stevano.jpeg";

function StrukturOrganisasi() {
  return (
    <>
      <Navbar />
      <section className="starting-point strc-org">
        <div className="container">
          <div className="caption-head">
            <h2>PENGURUS PERDAMI WILAYAH SUMATERA BARAT</h2>
            <h3>PERIODE 2022-2025</h3>
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
              <img src={M_Hidayat} alt="" />
              <h3>ANGGOTA</h3>
              <p>Dr. dr. M. Hidayat, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Hendriati} alt="" />
              <h3>ANGGOTA</h3>
              <p>Dr. dr. Hendriati, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Ellya_Thaher} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Ellya Thaher, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Heksan} alt="" />
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
              <img src={Rinda_Wati} alt="" />
              <h3>WAKIL KETUA I</h3>
              <p>dr. Rinda Wati, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Naima_Lassie} alt="" />
              <h3>WAKIL KETUA II</h3>
              <p>dr. Naima Lassie, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Fitriliza_Hamdy} alt="" />
              <h3>SEKRETARIS</h3>
              <p>dr. Fitriliza Hamdy, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Nova_Herdana} alt="" />
              <h3>WAKIL SEKRETARIS</h3>
              <p>dr. Nova Herdana, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Neneng_Susanti} alt="" />
              <h3>BENDAHARA</h3>
              <p>dr. Neneng Susanti, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-6">
              <img src={Lavina_Rini_Sofyan} alt="" />
              <h3>WAKIL BENDAHARA</h3>
              <p>dr. Lavina Rini Sofyan, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI ILMIAH DAN PENGEMBANGAN PROFESI</h3>
            <div className="profil-img col-lg-12">
              <img src={Reni_Anggraini} alt="" />
              <h3>KETUA</h3>
              <p>dr. Reni Anggraini, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-4 col-lg-4">
              <img src={Lona_Diolanda} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Lona Diolanda, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-4 col-lg-4">
              <img src={Raihana_rustam} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Raihana Rustam, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-4 col-lg-4">
              <img src={Desty_Ria_Tiffany} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Desty Ria Tiffani, SPM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PENANGGULANGAN BUTA KATARAK</h3>
            <div className="profil-img col-lg-12">
              <img src={Irawadi_Putra} alt="" />
              <h3>KETUA</h3>
              <p>dr. Irawadi Putra, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Mayasari_Nasrul} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Mayasari Nasrul, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Primery_Puteri} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Primeri Putri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Felichia_Yovianda} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Felichia Yovianda, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-12">
              <img src={Andri_Yosrizal} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Andri Yosrizal, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PENGABDIAN MASYARAKAT</h3>
            <div className="profil-img col-lg-12">
              <img src={Dahlina} alt="" />
              <h3>KETUA</h3>
              <p>dr. Dahlina, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Blank} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Adil, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Ismail_Abdullah} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Ismail Abdullah, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Suci_Permata} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Suci Permata Sari, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI P2KB</h3>
            <div className="profil-img col-lg-12">
              <img src={Julita} alt="" />
              <h3>KETUA</h3>
              <p>dr. Julita, SpM (K)</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Haves_Ashan} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Haves Ashan, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Yanuhardi} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Yanuhardi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Silvy_Fetriyanita} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Silvy Fetriyanita, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PEMBERDAYAAN DAN KESEJAHTERAAN ANGGOTA</h3>
            <div className="profil-img col-lg-12">
              <img src={Linda_Wira_Putri} alt="" />
              <h3>KETUA</h3>
              <p>dr. Linda Wira Putri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Tetri_Guvariani} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Tetri Gusvariani, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Ewi_Primadona} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Ewi Primadona, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Indriani_Syafitri} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Indriani Syafitri, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PGPK</h3>
            <div className="profil-img col-lg-12">
              <img src={Ike_Rahayu} alt="" />
              <h3>KETUA</h3>
              <p>dr. Ike Rahayu, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Elfi_Risalma_Putri} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Elfi Risalma Puteri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Zulhijjah_Yati_Syari} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Zulhijjah Yati Syari, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Kaniela_Ayuni_Putri} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Kaniela Ayuni Putri, SpM</p>
            </div>
          </div>

          <div className="row">
            <h3>SEKSI PENGABDIAN HUMAS IT DAN WEBSITE</h3>
            <div className="profil-img col-lg-12">
              <img src={Diska_Herriadi} alt="" />
              <h3>KETUA</h3>
              <p>dr. Diska Herriadi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Dicky_Stevano} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Dicky Stevano Zukhri, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-6 col-lg-4">
              <img src={Messia_Refri_Rahmi} alt="" />
              <h3>ANGGOTA</h3>
              <p>dr. Messia Refri Rahmi, SpM</p>
            </div>
            <div className="profil-img col-sm-12 col-md-12 col-lg-4">
              <img src={Deni_Wiryulisda} alt="" />
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
