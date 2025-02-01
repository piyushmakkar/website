import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional for Bootstrap JS features
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
