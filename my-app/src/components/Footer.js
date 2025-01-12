import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6 className="fw-bold">MAIN</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">PRODUCT</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Personal</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">LEGAL</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">GDPR</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Contact us</h6>
            <ul className="list-unstyled mt-3">
              <li><a href="#">Phone : +91 816092116</a></li>
              <li><a href="#">Email : alkaindustries83@gmail.com</a></li>
            </ul>
            <form className="newsletter-form mt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  required
                />
                <input
                  type="enquiry"
                  className="form-control"
                  placeholder="Your Enquiry"
                  required
                />
                <button className="btn btn-primary" type="submit">Send Enquiry</button>
            </form>
          </div>
        </div>
        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">© 2025 Piyush. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
