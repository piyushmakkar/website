import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
