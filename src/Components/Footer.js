// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/dunadpay-removebg-preview 1.png";
import Instagram from "../Assets/instagram_o-removebg-preview.png";
import Twitter from "../Assets/twitter-removebg-preview.png";
import Facebook from "../Assets/facebook-removebg-preview.png";
import '../Styles/Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="columns">
      <div className="column">
      <Link to="/">
            <img src={Logo} alt="" />
          </Link>
       
        <div className="socials">
          <a href="https://instagram.com"><img src={Instagram} alt="Instagram" /></a>
          <a href="https://twitter.com"><img src={Twitter} alt="Twitter" /></a>
          <a className="fb" href="https://facebook.com"><img src={Facebook} alt="Facebook" /></a>
        </div>
      </div>
      <div className="column">
        <h2>Address</h2>
        <p>Plot 1480, Kings Landing Building, </p>
        <p>Zone B, Apo, Abuja.</p>
      </div>
      <div className="column">
        <h2>Contact</h2>
        <p>support@dunadpay.com
</p>
        <p>Phone: +234 8182848273</p>
      </div>
      <div className="column">
        <h2>Our Blog</h2>
        <p>
        <a className="just"href="/">Click Here To Visit Our Blog</a></p>
      </div>
      </div>
      <div className="trademark">
      Dunadpay © <br/>
       Dunad Solutions LTD. All rights reserved.
 
   </div>

      
    </footer>
 
  );
};

export default Footer;
