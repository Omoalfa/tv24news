import React from "react";
import "./index.css";
import logo from "./logo.png";

const Header = () => (
  <header className="contact">
    <nav className="contact">
      <img src={logo} alt="logo" />
      <ul>
        <li className="contact nav-items">
          <a className="nav-links contacts" href="#">
            HOME
          </a>
        </li>
        <li className="contact nav-items">
          <a className="nav-links contacts" href="#">
            VOB
          </a>
        </li>
        <li className="contact nav-items">
          <a className="nav-links contacts" href="#">
            DISCOVER AFRICA
          </a>
        </li>
        <li className="contact nav-items">
          <a className="nav-links contacts" href="#">
            POLITICS & GOVERNANCE
          </a>
        </li>
        <li className="contact nav-items">
          <a className="nav-links contacts" href="#">
            BUSINESS
          </a>
        </li>
        <li className="contact nav-items">
          <a className="nav-links contacts" href="#">
            ENTERTAINMENT
          </a>
        </li>
        <li className="contact nav-items" id="last">
          <a className="nav-links contacts" id="last" href="#">
            LIFESTYLE
          </a>
        </li>
      </ul>
    </nav>
    <div className="hero">
      <div className="africa-auth">
        <a href="#">SIGN IN</a>
        <a id="subscribe" href="#">
          SUBSCRIBE
        </a>
      </div>
      <h1>CONTACT US</h1>
    </div>
  </header>
);

export default Header;
