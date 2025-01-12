import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h6 className="fw-bold">MAIN</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">PRODUCT</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Log In</a></li>
              <li><a href="#">Personal</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">PRESS</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Logos</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Office</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">LEGAL</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">GDPR</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">SUBSCRIBE TO OUR NEWSLETTER</h6>
            <p className="text-muted mt-3">
              We deliver high-quality blog posts written by professionals weekly. And we promise no spam.
            </p>
            <form className="newsletter-form mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  required
                />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6">
            <div className="footer-brand">
              <span className="footer-logo bg-primary text-white fw-bold">T</span>
              <span className="ms-2">Treact Inc.</span>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">© 2018 Treact Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
