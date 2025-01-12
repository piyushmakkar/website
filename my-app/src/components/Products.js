import React, { useState } from "react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Boxes");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const menuItems = [
    { id: 1, category: "Boxes", title: "Pine Wooden Boxes", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 2, category: "Boxes", title: "Plywood Boxes", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 3, category: "Boxes", title: "Heavy Duty Export Quality Corrugated Boxes", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 4, category: "Boxes", title: "Corrugated (3 to 11 ply) Boxes", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 5, category: "Tape", title: "BOPP Cello-tape (Regular)", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 6, category: "Tape", title: "Customized BOPP Cello-tape with Company Logo", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 7, category: "Tape", title: "Box Strapping Rolls", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 8, category: "Sheets", title: "Air Bubble Sheets", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 9, category: "Sheets", title: "EPE Foam Sheets", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 10, category: "Film", title: "LDPE Stretch Film", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 11, category: "Film", title: "Polymer bonded masking Film ", price: "₹5000", img: "/pine-boxes.jpg" },
    { id: 12, category: "Other", title: "Air Cushion Bags ", price: "₹5000", img: "/pine-boxes.jpg" },
    
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
            {["Boxes", "Sheets", "Tape","Film","Other"].map((category) => (
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
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">{item.price}</span>
                      </div>
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
            <span className="highlight">What we offer ?</span>
          </h2>
          <div className="row text-center">
            {/* Service Card 1 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <h5 className="fw-bold">Product Protection</h5>
                <p className="text-muted">Lorem ipsum donor amet siti ceali placeholder text</p>
                <a href="#" className="text-decoration-none learn-more">
                  Learn More →
                </a>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <h5 className="fw-bold">Extend Shelf-Life</h5>
                <p className="text-muted">Lorem ipsum donor amet siti ceali placeholder text</p>
                <a href="#" className="text-decoration-none learn-more">
                  Learn More →
                </a>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <h5 className="fw-bold">A Better User Experience</h5>
                <p className="text-muted">Lorem ipsum donor amet siti ceali placeholder text</p>
                <a href="#" className="text-decoration-none learn-more">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
