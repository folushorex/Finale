import React, { useState } from 'react';
import Padlock from "../Assets/Security__illustration.png";
import '../Styles/Signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log(
      `Signing up with First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}, Business Name: ${businessName}, Phone Number: ${phoneNumber}`
    );
  };

  return (
    <div className="signup-container">
      <div className="overlay"></div>
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Create a Free Account</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Create My Account</button>
        </div>
        <div className="privacy-message">
          <img
            src={Padlock} // Replace with the path to your padlock image
            alt="Padlock"
          />
          <p>Your personal info is safe with us</p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
