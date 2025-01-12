import React, { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const menuItems = [
    { id: 1, category: "starters", title: "Veg Mixer", price: "$5.99", rating: "5.0 (87)", img: "veg-mixer.jpg" },
    { id: 2, category: "starters", title: "Veg Mixer", price: "$5.99", rating: "5.0 (87)", img: "veg-mixer.jpg" },
    { id: 3, category: "starters", title: "Veg Mixer", price: "$5.99", rating: "5.0 (87)", img: "veg-mixer.jpg" },
    { id: 4, category: "starters", title: "Veg Mixer", price: "$5.99", rating: "5.0 (87)", img: "veg-mixer.jpg" },
    { id: 5, category: "starters", title: "Veg Mixer", price: "$5.99", rating: "5.0 (87)", img: "veg-mixer.jpg" },
    { id: 6, category: "starters", title: "Veg Mixer", price: "$5.99", rating: "5.0 (87)", img: "veg-mixer.jpg" },
  ];

  return (
    <>
      <section id="menu" className="menu-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">
            Checkout our <span className="highlight">menu.</span>
          </h2>
          <div className="text-center mb-4">
            {["starters", "main", "soup", "desserts"].map((category) => (
              <button
                key={category}
                className={`btn btn-category ${activeCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
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
                      <p className="text-muted small">Tomato Salad & Carrot</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-warning">{item.rating}</span>
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
            Amazing <span className="highlight">Services.</span>
          </h2>
          <div className="row text-center">
            {/* Service Card 1 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <div className="icon mb-3">
                  <img src="path-to-location-icon.svg" alt="Location Icon" className="img-fluid" />
                </div>
                <h5 className="fw-bold">230+ Locations</h5>
                <p className="text-muted">Lorem ipsum donor amet siti ceali placeholder text</p>
                <a href="#" className="text-decoration-none learn-more">
                  Learn More →
                </a>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <div className="icon mb-3">
                  <img src="path-to-chef-icon.svg" alt="Chef Icon" className="img-fluid" />
                </div>
                <h5 className="fw-bold">Professional Chefs</h5>
                <p className="text-muted">Lorem ipsum donor amet siti ceali placeholder text</p>
                <a href="#" className="text-decoration-none learn-more">
                  Learn More →
                </a>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="col-md-4">
              <div className="service-card p-4">
                <div className="icon mb-3">
                  <img src="path-to-catering-icon.svg" alt="Catering Icon" className="img-fluid" />
                </div>
                <h5 className="fw-bold">Birthday Catering</h5>
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

export default Menu;
