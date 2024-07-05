import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };


  return (
    <div className="container">
      <div className="form-box login">
        <h2>Login</h2>
        <form id="loginForm" action="/login">
          <div className="input-box">
            <input type="email" className="form-control" id="email" name="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
              <input type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" required />
              <label htmlFor="password">Password</label>
              <button type="button" className="btn btn-secondary" onClick={togglePassword}>Show Password</button>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
          <div className="mt-3">
            <a href="/auth/google" className="btn btn-danger">
              Login with Google
            </a>
          </div>
        </form>
        
        <div className="login-register">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="register-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
