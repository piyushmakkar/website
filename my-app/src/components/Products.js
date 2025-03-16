import React, { useState } from "react";
import "../styles/products.css";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Pallets");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const menuItems = [
    { id: "1-p", category: "Pallets", title: "Two Way Pinewood Pallet", img: "/Pallets/pallet1.png" },
    { id: "2-p", category: "Pallets", title: "Four Way Pinewood Pallet", img: "/Pallets/pallet2.png" },
    { id: "3-p", category: "Pallets", title: "Two Way Junglewood Pallet", img: "/Pallets/pallet3.png" },
    { id: "4-p", category: "Pallets", title: "Four Way Junglewood Pallet", img: "/Pallets/pallet4.png" },
    { id: "5-p", category: "Pallets", title: "Steel Pallets for Industrial use", img: "/Pallets/pallet5.png" },
    { id: "1-b", category: "Wooden Boxes", title: "Pine Wooden Boxes", img: "/Boxes/box1.png" },
    { id: "2-b", category: "Wooden Boxes", title: "Heavy Duty Export Quality Corrugated Boxes", img: "/Boxes/box2.png" },
    { id: "3-b", category: "Wooden Boxes", title: "Corrugated (3 to 11 ply) Boxes", img: "/Boxes/box3.png" },
    { id: "4-b", category: "Wooden Boxes", title: "Plywood Boxes", img: "/Boxes/box4.png" },
    { id: "5-b", category: "Wooden Boxes", title: "Nail-less instant plywood boxes", img: "/Boxes/box5.png" },
    { id: "6-b", category: "Wooden Boxes", title: "Wooden Pallets", img: "/Boxes/box6.png" },
    { id: "1-t", category: "Tapes", title: "BOPP Adhesive-tapes (Regular)", img: "/Tape/tape1.png" },
    { id: "2-t", category: "Tapes", title: "Customized BOPP Adhesive-tapes with Company Logo", img: "/Tape/tape2.png" },
    { id: "3-t", category: "Tapes", title: "Brown Adhesive Tapes", img: "/Tape/tape3.png" },
    { id: "1-s", category: "Sheets", title: "EPE Foam Sheets", img: "/Sheet/sheet1.png" },
    { id: "2-s", category: "Sheets", title: "Air Bubble Sheets", img: "/Sheet/sheet2.png" },
    { id: "1-f", category: "Stretch Film", title: "LDPE Stretch Film", img: "/Film/film1.png" },
    { id: "2-f", category: "Stretch Film", title: "Polymer bonded masking Film", img: "/Film/film2.png" },
    { id: "3-f", category: "Stretch Film", title: "Machine Grade Stretch Film", img: "/Film/film3.png" },
    { id: "4-f", category: "Stretch Film", title: "Manual Stretch Wrapping", img: "/Film/film4.png" },
    { id: "1-o-r", category: "Other", title: "Box Strapping Roll", img: "/Other/other-roll1.jpg" },
    { id: "2-o-r", category: "Other", title: "Pet Strapping Roll", img: "/Other/other-roll2.png" },
    { id: "3-o-r", category: "Other", title: "Strapping Roll Dispenser", img: "/Other/other-roll3.png" },
    { id: "4-o-r", category: "Other", title: "Corrugated Paper Roll for Packaging", img: "/Other/other-roll4.png" },
    { id: "1-o-b", category: "Other", title: "Air Cushion Bags", img: "/Other/other-bag1.png" },
    { id: "2-o-b", category: "Other", title: "Export Quality VCI Bags (Blue)", img: "/Other/other-bag2.png" },
    
  ];

  return (
    <>
      <section id="menu" className="menu-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Checkout our <span className="highlight">Products.</span>
          </h2>
          <br/>
          <div className="text-center mb-4">
            {["Pallets","Wooden Boxes","Tapes","Sheets","Stretch Film","Other"].map((category) => (
              <button
                key={category}
                className={`btn btn-category ${activeCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
            <br/>
          </div>
          <div className="row g-4 menu-items">
            {menuItems
              .filter((item) => item.category === activeCategory)
              .map((item) => (
                <div className="col-md-6 col-lg-4 menu-card" key={item.id}>
                  <div className="card h-100 shadow-sm">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            <span className="highlight">What we offer</span>
          </h2>
          <p className="service-text text-center">We at ALKA INDUSTRIES, offer enhanced innovative packaging solution which 
            can improve product protection, extend shelf-life and provide a better user experience. 
            We develop and supply wide range of standard packaging as well as customized packaging according 
            to customer needs for all sectors both in house & on-site packaging. Our core in-house business is 
            to supply export quality of Pine Wooden Boxes, Jungle Wood Boxes, Plywood Boxes & Corrugated Boxes.
          </p>
          <div className="row text-center">
            {/* Service Card 1 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <h5 className="fw-bold">Product Protection</h5>
                <img src="/protection.jpg"/>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <h5 className="fw-bold">Extend Shelf-Life</h5>
                <img src="/shelfLife.jpg"/>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <h5 className="fw-bold">A Better User Experience</h5>
                <img src="/ux.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
