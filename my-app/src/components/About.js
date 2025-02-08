import React from "react";
import "../styles/styles.css";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="about hero d-flex align-items-center justify-content-between p-5 bg-light flex-wrap"
      >
        <div className="hero-content col-lg-6 col-md-12 col-sm-12">
          <h1 className="display-4 text-dark">
            Affordable & Sustainable <span>Industrial Solutions.</span>
          </h1>
          <p className="hero-para text-muted mb-4">
          <span>ALKA INDUSTRIES</span> is packaging company mainly focusing on manufacturing & supply of export quality <span>pine-wooden boxes, jungle-wooden boxes, ply-wooden boxes</span> and providing complete packaging solutions to various industries. Our company is committed to supply sustainable products & services understanding customer needs.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img
            className="hero-image"
            src="/industry.jpg"
            alt="Industrial Solutions"
          />
        </div>
      </section>

      <section className="info-section d-flex align-items-center justify-content-between p-5 bg-white flex-wrap">
        <div className="col-lg-6 col-md-12">
        <img
            className="info-image"
            src="/mission.jpg"
            alt="Industrial Solutions"
          />
        </div>
        <div className="info-text col-lg-6 col-md-12">
          <h2 className="display-5 text-dark">
          <span>Our Mission </span>
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
