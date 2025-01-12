import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <h1 className="navbar-brand" >Alka Industries</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#blog">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#pricing">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
