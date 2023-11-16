import React, { useState } from 'react';
import '../Styles/Login.css';

function Login() {
  const [email, setEmail] = useState(''); // Change 'username' to 'email'
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log(`Logging in with email: ${email}, password: ${password}, Remember Me: ${rememberMe}`);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="container">
      <div className="overlay"></div>
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Dunadpay</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email" // Change placeholder text to 'Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Change 'username' to 'email'
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
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <span>Remember Me</span>
          </label>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
