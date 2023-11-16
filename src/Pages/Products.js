import React from 'react';
import Electric from "../Assets/Electricity Transmission.png";
import Datarecharge from "../Assets/pressing phone.png";
import Cable from "../Assets/Watching Tv.png";
import Payment from "../Assets/Payment Image.png";
import "../Styles/Products.css"


const Products = () => {
  return (
    <div className="Products">
        <div className="products-wrapper">

          <span className="first">
          <img src= {Electric} className='first' alt=""/>
          </span>
        


          <span className="second">
          <h1>ELECTRICITY PAYMENT</h1>
          <p>It doesn't matter what time you run out of meter credit,<br/> 
just click BUY on dunadpay.com and you are back</p> 
          </span>

</div>


          <div className="wrapper-two">

          <span className="fourth">
<h1>AIRTIME / DATA  RECHARGE</h1>
<p>Never Run Out of Airtime/Data – Anytime, Anywhere! Say Goodbye to Worries About Airtime/ Data  Exhaustion!"</p> 
</span>

<span className="third">
<img src= {Datarecharge} className='third' alt=""/>
</span>
        </div>




        <div className="products-wrapper-three">

<span className="fifth">
<img src= {Cable} className='fifth' alt=""/>
</span>



<span className="six">
<h1>CABLE / TV<br/> PAYMENT SIMPLIFIED</h1>
<p>"Experience Lightning-Fast Cable/TV Payment Solutions,
   Ensuring You Stay Seamlessly Connected, So You'll Never Have to Worry About Being Cut Off Again!"</p> 
</span>
</div>



<div className="products-wrapper-four">

<span className="seven">
<h1>PAYMENT</h1>
<p><b>Effortless Payments, Infinite Currencies</b><br/> 
Seamlessly Send and Receive Payments in Multiple Currencies. Break Free from Borders, Embrace a World of Financial Fluidity!"</p> 
</span>

<span className="eight">
<img src= {Payment} className='eight' alt=""/>
</span>
</div>




      
    </div>
  )
}

export default Products
