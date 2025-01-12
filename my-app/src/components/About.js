import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="about hero d-flex align-items-center justify-content-between p-5 bg-light flex-wrap"
      >
        <div className="hero-content col-lg-6 col-md-12">
          <h1 className="display-4 fw-bold text-dark">
            Delicious & Affordable <span className="text-primary">Meals Near You.</span>
          </h1>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero-buttons">
            <a href="#order" className="btn btn-primary me-3">Order Now</a>
            <a href="#chefs" className="btn btn-outline-primary">Meet The Chefs</a>
          </div>
        </div>
        <div className="hero-image col-lg-6 col-md-12">
          <img
            src="https://via.placeholder.com/600x400"
            className="img-fluid rounded"
            alt="Delicious Meals"
          />
        </div>
      </section>

      <section className="info-section d-flex align-items-center justify-content-between p-5 bg-white flex-wrap">
        <div className="info-image col-lg-6 col-md-12">
          <img
            src="https://via.placeholder.com/600x400"
            className="img-fluid rounded"
            alt="Serving Food"
          />
        </div>
        <div className="info-text col-lg-6 col-md-12">
          <p className="text-muted">Established Since 2014</p>
          <h2 className="display-5 fw-bold text-dark">
            We've been serving for <span className="text-primary">over 5 years.</span>
          </h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-muted">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="#offers" className="btn btn-primary">Latest Offers</a>
        </div>
      </section>
    </>
  );
};

export default About;
