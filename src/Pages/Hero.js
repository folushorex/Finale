import React from 'react';
import Typed from "react-typed";
import AtmImage from "../Assets/ATM image.png";
import { Link } from 'react-router-dom';
import "../Styles/Hero.css"


const Hero = () => {
  return (
        <div className="Hero">
          
        <div className="Hero-Wrapper">

        <div className="typed-text-container">
  
        <h1 className="title">
          <Typed
            strings={[
              "Your Trusted Destination",
              " for Secure & Reliable",
            ]}
        

            typeSpeed={30} // Faster typing speed for a smoother animation
            backSpeed={100} // Faster backspacing speed
            backDelay={500} // Delay before starting to backspace
            startDelay={1000} // Delay before starting to type
            loop
          />
        </h1>
</div>

            <h1 className="another-title">
     
           <span className="process">Processing Solutions <br /><br /></span></h1>
       
           <p className="subtitle">
           No Stress, Convenient way to make  <br />all your  Bill Payment.
      </p>

     
           
       



                    <div className="image-container">
        <img src={AtmImage} className="atm-image" alt="AtmImage" />
      </div>
      <Link to="/signup">
        <button className="Open">Open a Free Account</button>
      </Link>
   


        </div>





      </div>
      

  )
}


export default Hero
