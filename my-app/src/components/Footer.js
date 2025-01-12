import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6 className="fw-bold">SUBSCRIBE TO OUR NEWSLETTER</h6>
            <p className="text-muted mt-3">
              We deliver high quality blog posts written by professionals weekly. And we promise no spam.
            </p>
            <form className="newsletter-form mt-3">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your Email Address" required />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
