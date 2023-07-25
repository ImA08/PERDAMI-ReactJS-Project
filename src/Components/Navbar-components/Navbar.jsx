import React from "react";
import { Link } from "react-router-dom";
import NavbarBrand from "./NavbarBrand";
import Navlink from "./Navlink";
import DropdownMenu from "./DropdownMenu";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavbarBrand />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mx-auto">
            <Navlink to="/" text="Home" />

            <DropdownMenu
              title="Profil"
              links={[
                { to: "/About", text: "Tentang PERDAMI" },
                {
                  to: "/StrukturOrganisasi",
                  text: "Struktur Organisasi",
                },
                {
                  to: "/DKEDK",
                  text: "Dewan Kehormatan Etik dan Disilplin Kedokteran(DKEDK)",
                },
                { to: "/BPK", text: "Badan Pemerikasa Keuangan(BPK)" },
              ]}
            />

            <DropdownMenu
              title="Events"
              links={[
                { to: "/Som15th", text: "SOM 15th" },
                { to: "/Rakernas", text: "Rakernas" },
                { to: "/HBDI", text: "HBDI 115th" },
              ]}
            />

            <DropdownMenu
              title="Media"
              links={[
                { to: "/E_Certificate", text: "E-Certificate" },
                { to: "/Gallery", text: "Galeri" },
                // { to: "#", text: "Agenda Ilmiah" },
              ]}
            />

            <Navlink to="/ContactUs" text="Hubungi Kami" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
