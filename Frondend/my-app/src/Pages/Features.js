import React from "react";
import "../Styles/Features.css";
import bed from "../media/bed.png";
import chair from '../media/chair.png'
import bath from '../media/bath.png'

function Features() {
  return (
    <div className="features">
      <div className="card">
        <img src={bed} alt='img' />
        <h1>Bedroom</h1>  
      </div>
      <div className="card">
        <img src={chair}alt='img' />
        <h1>Office chair</h1>

      </div>
      <div className="card">
        <img src={bath} alt='img'/>
        <h1>Dining</h1>

      </div>
      <div className="card">
        <img src={chair}alt='img' />
        <h1>Living</h1>

      </div>
      <div className="card">
        <img src={bed} alt='img'/>
        <h1>Living</h1>

      </div>
    </div>
  );
}

export default Features;
