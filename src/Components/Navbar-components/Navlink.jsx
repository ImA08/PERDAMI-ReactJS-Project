import React from "react";
import { Link } from "react-router-dom";

function Navlink({ to, text }) {
  return (
    <Link to={to} className="nav-link me-5" aria-current="page">
      {text}
    </Link>
  );
}

export default Navlink;
