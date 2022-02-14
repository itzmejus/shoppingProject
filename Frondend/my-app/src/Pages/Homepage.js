import React from "react";
import "../Styles/Homepage.css";
import slider1 from "../media/slider-1.png";
import Features from "./Features";
import Footer from "./Footer";
import ProductsCard from "./ProductsCard";
function Homepage() {
  return (
    <div>
      <div className="home">
        {/* left section start */}
        <div className="left">
          <p>New Products</p>
          <h1>Flexible Chair</h1>
          <h2>
            We are having the best furnitures in the marke
            <br></br>We supply Products over 30+ countries
          </h2>
          <button>Check Now</button>
        </div>
        {/* left section end */}
        {/* right section start */}
        <div className="right">
          <img src={slider1} alt="img" />
        </div>
        {/* right section end */}
      </div>
      <Features />
      <ProductsCard />
      <Footer />
    </div>
  );
}

export default Homepage;
