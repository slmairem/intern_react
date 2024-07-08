import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className='text-2xl font-semibold text-center'>Login</h2>
        <form id="loginForm" action="/login">
          <div className="mb-4">
            <label htmlFor="email" className='block text-sm font-medium leading-5 text-gray-700'>Email</label>
            <input type="email" className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className='block text-sm font-medium leading-5 text-gray-700'>Password</label>
              <button type="button" className="text-sm hover:underline" onClick={togglePassword}>Show Password</button>
            </div>
            <input type={showPassword ? "text" : "password"} className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm" id="password" name="password" required />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none">
            Login
          </button>
          
        </form>
        <div className="text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
