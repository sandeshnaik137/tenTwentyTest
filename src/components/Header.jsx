import React, { useState } from "react";
import "./Header.scss";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <header>
      <a href="#" className={`menu-burger ${show ? "active" : ""}`} onClick={() => setShow(!show)}>
        <span className="lines"></span>
      </a>
      <nav className={`navbar ${show ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Make Enquiry</a>
          </li>
        </ul>
      </nav>
      <a className="btn-contact" href="#">
        Contact us <span className="arrow-icon"></span>
      </a>
    </header>
  );
}

export default Header;
