import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Started.css";

const Started = () => {
  return (
    <div className='Started'>
      <h1>Get started with Dunadpay</h1>
      <h3>Open an account in just a few minutes and get access to a variety of Services</h3>
      <Link to="/signup">
        <button className="open">Open a Free Account</button>
      </Link>
    </div>
  )
}

export default Started;
