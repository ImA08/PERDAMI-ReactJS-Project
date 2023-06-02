import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ title, links }) {
  return (
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle me-5"
        to="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {title}
      </Link>
      <ul className="dropdown-menu">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="dropdown-item" to={link.to}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownMenu;
