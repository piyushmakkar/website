import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6 className="fw-bold">Industries we cater to</h6>
            <ul className="mt-3">
              <li>
              Mechanical  
              </li>
              <li>
              Oil & Gas 
              </li>
              <li>
              Electronic 
              </li>
              <li>
              Electrical 
              </li>
              <li>
              Automotive
              </li>
              <li>
              Pharmaceuticals
              </li>
              <li>
              Chemical
              </li>
              <li>
              Paint
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">PRODUCT</h6>
            <ul className="mt-3">
            <li>Pallets</li>
            <li>Wooden Boxes</li>
            <li>Tapes</li>
            <li>Sheets</li>
            <li>Strech Films</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Address</h6>
            <ul className="list-unstyled mt-3">
            <li>
              1/21, Horizon Industrial Park,<br></br>
              At & Post Bamangam, Tal. Karjan, <br></br>
              Dist. Vadodara - 391243, Gujarat (India)
            </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Contact us</h6>
            <ul className="list-unstyled mt-3">
              <li>Phone : 8160921116, 9426972271</li>
              <li>Email : enquiry@alkaindustries.co.in</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
