import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
    setFormError((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = (event) => {
    event.preventDefault();

    let inputError = {};

    if (!formInput.email) {
      inputError.email = "Enter a valid email address";
    }
    if (!formInput.password) {
      inputError.password = "Password should not be empty";
    }

    setFormError(inputError);

    if (Object.values(inputError).every(error => error === "")) {
      document.getElementById("loginForm").submit();
    }
  };

  return (
    <div className="flex items-center justify-center h-max p-4 font-IndieFlower">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className='text-2xl font-semibold text-center'>Login</h2>
        <form id="loginForm" action="/login" method="POST" onSubmit={validateForm}>
          <div className="mb-4">
            <label htmlFor="email" className='block text-sm font-medium leading-5 text-gray-700'>Email</label>
            <input type="email"
              className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm" 
              id="email" 
              name="email" 
              value={formInput.email}
              onChange={handleInputChange}
              />
            {formError.email && <p className="text-red-600 text-sm">{formError.email}</p>}
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className='block text-sm font-medium leading-5 text-gray-700'>Password</label>
              <button type="button" className="text-sm hover:underline" 
                onClick={togglePassword}>
                Show Password
              </button>
            </div>
            <input type={showPassword ? "text" : "password"} 
              className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm" 
              id="password" 
              name="password" 
              value={formInput.password}
              onChange={handleInputChange}
              />
            {formError.password && <p className="text-red-600 text-sm">{formError.password}</p>}
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
