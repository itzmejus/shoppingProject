import React from "react";
import "../Styles/Products.css";
import sofa from "../media/sofa.png";
import redchair from "../media/redchair.png";
import pillow from "../media/pillow.png";
import chair from "../media/2chair.png";
import chair3 from "../media/chair3.png";
import chair4 from "../media/chair4.png";
import chair5 from "../media/chair5.png";
import chair6 from "../media/chair6.png";

function Products() {
  return (
    <div className="products">
      <div className="top">
        <h1>Products</h1>
        <h2>
          Curate your dream Bedroom Your bedroom setup needs to be glamorous but
          not glitzy. Create a serene and restful space for you to smoothly
          slide into the slumberland. Explore The Bedroom Store
        </h2>
      </div>
      <div className="category">
        <h1> New Arrival</h1>
        <h1>Featured </h1>
        <h1>On Sale </h1>
        <h1>Trending</h1>
      </div>
      <div className="cards">
        <div className="singlecard">
          <img src={sofa} alt='img' />
        </div>
        <div className="singlecard">
          <img src={redchair} alt='img' />
        </div>
        <div className="singlecard">
          <img src={pillow} alt='img'/>
        </div>
        <div className="singlecard">
          <img src={chair} alt='img'/>
        </div>
      </div>
      <div className="cards">
        <div className="singlecard">
          <img src={chair3} alt='img' />
        </div>
        <div className="singlecard">
          <img src={chair4}alt='img' />
        </div>
        <div className="singlecard">
          <img src={chair5} alt='img'/>
        </div>
        <div className="singlecard">
          <img src={chair6} alt='img'/>
        </div>
      </div>
    </div>
  );
}

export default Products;
/* 
        
       */
