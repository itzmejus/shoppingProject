import React from "react";
import chair from "../media/2chair.png";
import redchair from "../media/redchair.png";
import chair3 from "../media/chair3.png";

import "../Styles/Cart.css";

function Cart() {
  return (
    <div className="cartmain">
      <h1>Total items in your Cart</h1>
      <div className="Headsection">
        <div className="cart">
        <h1>Name</h1>
        <img src={chair} alt="img" />
        <h2>Price:10000</h2>
        <button>Buy Now</button>
      </div>
      <div className="cart">
        <h1>Name</h1>
        <img src={redchair} alt="img" />
        <h2>Price:10000</h2>
        <button>Buy Now</button>
      </div>
      <div className="cart">
        <h1>Name</h1>
        <img src={chair3} alt="img" />
        <h2>Price:10000</h2>
        <button>Buy Now</button>
      </div>
      </div>
      
    </div>
  );
}

export default Cart;
