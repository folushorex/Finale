import React from 'react';

import logo1 from "../Assets/Eko-Electricity-Distribution-Company-EKEDC-logo-450x213 1.png";
import logo2 from "../Assets/jos (1).png";
import logo3 from "../Assets/ikeja (1).png";
import logo4 from "../Assets/kaduna.png";
import logo5 from "../Assets/ibedc (1).png";
import logo6 from "../Assets/ph (1).png";

import "../Styles/Partners.css"

function Partners() {
  return (
    <div className="partners">
      <div className="partners-wrapper">
        <h1>OUR SERVICE PARTNERS</h1>
        
        <div className="Logo-container">
        <div class="slider2">
          <img src={logo1} className="img" alt="" />
          <img src={logo2} className="img" alt="" />
          <img src={logo3} className="img" alt="" />
          <img src={logo4} className="img" alt="" />
          <img src={logo5} className="img" alt="" />
          <img src={logo6} className="img" alt="" />
        </div>


        <div class="slider2">
          <img src={logo1} className="img" alt="" />
          <img src={logo2} className="img" alt="" />
          <img src={logo3} className="img" alt="" />
          <img src={logo4} className="img" alt="" />
          <img src={logo5} className="img" alt="" />
          <img src={logo6} className="img" alt="" />
        </div>

      </div>
    </div>
    </div>
    
  );
}

export default Partners;
