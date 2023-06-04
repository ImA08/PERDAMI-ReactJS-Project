import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/img/logo.jpg";

function NavbarBrand() {
  return (
    <div className="d-flex justify-content-center">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
}

export default NavbarBrand;
