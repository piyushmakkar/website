import React from "react";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
      <h1 className="company-name">Alka Industries</h1>
      <nav>
        <a href="#about" className="text-dark mx-2 fw-bold text-decoration-none">About</a>
        <a href="#blog" className="text-dark mx-2 fw-bold text-decoration-none">Blog</a>
        <a href="#pricing" className="text-dark mx-2 fw-bold text-decoration-none">Pricing</a>
        <a href="#contact" className="text-dark mx-2 fw-bold text-decoration-none">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
