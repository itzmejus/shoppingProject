import React from "react";
import "../Styles/ProductCard.css";
import sofa from "../media/sofa.png";
import redchair from "../media/redchair.png";
import pillow from "../media/pillow.png";
import chair from "../media/2chair.png";
import chair3 from "../media/chair3.png";
import chair4 from "../media/chair4.png";
import chair5 from "../media/chair5.png";
import chair6 from "../media/chair6.png";

function ProductsCard() {
  return (
    <div className="list">
      <div className="singleCard">
        <h1>Name</h1>
        <img src={sofa} alt="img" />
        <h2>Price:10000</h2>
        <button  >Add to cart</button>
      </div>
      <div className="singleCard">
        <h1>Name</h1>
        <img src={redchair} alt="img" />
        <h2>Price:10000</h2>
        <button >Add to cart</button>
      </div>
      <div className="singleCard">
        <h1>Name</h1>
        <img src={pillow} alt="img" />
        <h2>Price:10000</h2>
        <button >Add to cart</button>
      </div>
      <div className="singleCard">
        <h1>Name</h1>
        <img src={chair} alt="img" />
        <h2>Price:10000</h2>
        <button >Add to cart</button>
      </div>
      <div className="singleCard">
        <h1>Name</h1>
        <img src={chair3} alt="img" />
        <h2>Price:10000</h2>
        <button >Add to cart</button>
      </div>
      <div className="singleCard">
        <h1>Name</h1>
        <img src={chair4} alt="img" />
        <h2>Price:10000</h2>
        <button >Add to cart</button>
      </div>
      <div className="singleCard">
        <h1>Name</h1>
        <img src={chair5} alt="img" />
        <h2>Price:10000</h2>
        <button >Add to cart</button>
      </div>
      <div className="singleCard">
        <h1>Name</h1>
        <img src={chair6} alt="img" />
        <h2>Price:10000</h2>
        <button >Add to cart</button>
      </div>
    </div>
  );
}

export default ProductsCard;
