import React from "react";
import "../styles/styles.css";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="about hero d-flex align-items-center justify-content-between p-5 bg-light flex-wrap"
      >
        <div className="hero-content col-lg-6 col-md-12">
          <h1 className="display-4 text-dark">
            Affordable & Sustainable <span className="">Industrial Solutions.</span>
          </h1>
          <p className="text-muted mb-4">
          Provides complete packaging solutions to various industries.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary me-3">Order Now</a>
          </div>
        </div>
        <div className="hero-image col-lg-6 col-md-12">
          <img
            src="/industry.jpg"
            alt="Industrial Solutions"
          />
        </div>
      </section>

      <section className="info-section d-flex align-items-center justify-content-between p-5 bg-white flex-wrap">
        <div className="info-image col-lg-6 col-md-12">
        <img
            src="/industry.jpg"
            alt="Industrial Solutions"
          />
        </div>
        <div className="info-text col-lg-6 col-md-12">
          <h2 className="display-5 fw-bold text-dark">
          Our Mission
          </h2>
          <p className="text-muted">
          Provide innovative, affordable & high-quality packaging to protect our customer’s
            products right from their factory premises till consumer end. Our strong focus on
            innovation allows us to provide innovative products that enhance the consumer
            experience. 
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
