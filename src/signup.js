import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

function LoginPage() {
  return (
    <div className="container">
      <div className="logo-area">
        <h1>Connect X</h1>
      </div>
      <div className="login-form">
        <h2>Login!</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <button type="submit" className="login-button">
          Log In
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up!</Link>
        </p>
      </div>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="container">
      <div className="logo-area">
        <h1>Connect X</h1>
      </div>
      <div className="signup-form">
        <h2>Signup</h2>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="contact">Contact number</label>
          <input type="tel" id="contact" name="contact" />
        </div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <p className="password-note">
          <small>NOTE: Password must contain alphanumeric characters.</small>
        </p>
        <button type="submit" className="signup-button">
          Signup
        </button>
        <p className="login-link">
          Already have an account? <Link to="/">Log In!</Link>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;