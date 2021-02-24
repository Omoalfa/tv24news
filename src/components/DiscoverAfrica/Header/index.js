import "./index.css";
import React from "react";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className="discover">
      <div className="discover-logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="header">
        <nav className="discover">
          <ul>
            <li className="nav-items">
              <a className="nav-links discover" href="#">
                HOME
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="#">
                VOB
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="#">
                DISCOVER AFRICA
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="#">
                POLITICS & GOVERNANCE
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="#">
                BUSINESS
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="#">
                ENTERTAINMENT
              </a>
            </li>
            <li className="nav-items" id="last">
              <a className="nav-links discover" href="#">
                LIFESTYLE
              </a>
            </li>
          </ul>
        </nav>
        <h1>DISCOVER AFRICA</h1>
        <div className="africa-auth">
          <a href="#">SIGN IN</a>
          <a id="subscribe" href="#">
            SUBSCRIBE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
