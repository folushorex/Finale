import React from 'react';
import "../Styles/Choose.css"
import Flexible from "../Assets/Flexible Image.png";
import Secure from "../Assets/Secure Image.png";
import Round from "../Assets/Round the Clock Image.png";
import Customer from "../Assets/Customer.png";
import Happy from "../Assets/Happy Image.png";
import Thousand from "../Assets/Growth Image.png";
import Line from "../Assets/Line 1.png";

const Choose = () => {
  return (

 
        <div className="choose-container">
          <h1 className="title">Why You Should Choose Dunadpay?</h1>

          <div className="row">
            <div className="image-A">
              <img src={Flexible} alt="1" />
            </div>

            <div className="image-B">
              <img src={Secure} alt="2" />
            </div>

            <div className="image-C">
              <img src={Round} alt="3" />
            </div>

          </div>

        

          <div className="row">
            <div className="descriptiona">
              <p>Flexible Payment <br/>Options</p>
            </div>

            <div className="descriptionb">
              <p>Secure<br/> Transactions</p>
            </div>

            <div className="descriptionc">
              <p>Round-the Clock <br/>Availability<br/> of Electric Unit</p>
            </div>

          </div>

          <div className="line">
            <img src={Line} alt="line"/>
          </div>

          <div className="row">

            <div className="image-D">
              <img src={Customer} alt="4" />
            </div>

            <div className="image-E">
              <img src={Happy} alt="5" />
            </div>

            <div className="image-F">
              <img src={Thousand} alt="6" />
            </div>

          </div>
        

          <div className="row">
            <div className="descriptiond">
              <p>24/7 <br/>Customer Support</p>
            </div>

            <div className="descriptione">
              <p>Thousands Of Customers <br/>Served</p>
              </div>
              
              <div className="descriptionf">
              <p>Over 100 million <br/>Electricity Units Sold</p>
            </div>

          </div>
        </div>
   


      );
    };
    
   



export default Choose
