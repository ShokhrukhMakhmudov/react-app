import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="" className="site-logo">
          Logo
        </a>
        <nav>
          <ul className="nav-list">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
            <li className="list-item">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
