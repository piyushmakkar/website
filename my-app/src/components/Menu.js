import React, { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const menuItems = [
    { id: 1, category: "starters", title: "Veg Mixer", price: "$5.99", rating: "5.0 (87)", img: "veg-mixer.jpg" },
    // Add more menu items here...
  ];

  return (
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
  );
};

export default Menu;
