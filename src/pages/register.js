import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1));
  const [years, setYears] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [formInput, setFormInput] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState({});

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let i = currentYear; i >= currentYear - 100; i--) {
      yearOptions.push(i);
    }
    setYears(yearOptions);
  }, []);

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    } else if (selectedMonth) {
      const daysInMonth = new Date(new Date().getFullYear(), selectedMonth, 0).getDate();
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    } else {
      setDays(Array.from({ length: 31 }, (_, i) => i + 1));
    }
  }, [selectedMonth, selectedYear]);

  const handleMonthChange = (e) => {
    const monthNames = {
      'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
      'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
    };
    setSelectedMonth(monthNames[e.target.value]);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const validateForm = (event) => {
    event.preventDefault();

    let inputError = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    }

    if (!formInput.email) {
      inputError.email = "Enter a valid email address";
    }
    if (!formInput.username) {
      inputError.username = "Username should not be empty";
    }
    if (!formInput.password) {
      inputError.password = "Password should not be empty";
    }
    if (formInput.password !== formInput.confirmPassword) {
      inputError.confirmPassword = "Passwords do not match";
    }

    setFormError(inputError);

    if (Object.values(inputError).every(error => error === "")) {
      document.getElementById("registerForm").submit();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className='text-2xl font-semibold text-center'>Register</h2>
        <form id="registerForm" action="/register" method="POST" onSubmit={validateForm}>

          {/* Email */}
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

          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className='block text-sm font-medium leading-5 text-gray-700'>Username</label>
            <input type="text"
              className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm"
              id="username"
              name="username"
              value={formInput.username}
              onChange={handleInputChange}
              maxLength="10" />
            {formError.username && <p className="text-red-600 text-sm">{formError.username}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className='block text-sm font-medium leading-5 text-gray-700'>Password</label>
            <input type="password"
              className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm"
              id="password"
              name="password"
              value={formInput.password}
              onChange={handleInputChange}
              />
            {formError.password && <p className="text-red-600 text-sm">{formError.password}</p>}
          </div>

          {/* ConfirmPassword */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className='block text-sm font-medium leading-5 text-gray-700'>Confirm Password</label>
            <input type="password"
              className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm"
              id="confirmPassword"
              name="confirmPassword"
              value={formInput.confirmPassword}
              onChange={handleInputChange} />
            {formError.confirmPassword && <p className="text-red-600 text-sm">{formError.confirmPassword}</p>}
          </div>

          {/* Dates */}
          <div className="mb-4">
            <label htmlFor="dob" className='block text-sm font-medium leading-5 text-gray-700'>Birthday</label>
            <div className="flex space-x-2 mt-1">
              <select id="dob-month" name="dob-month" className="form-select mt-1 pl-2 w-1/3 rounded-md border-gray-300 shadow-sm" required onChange={handleMonthChange}>
                <option value="" disabled selected>Month</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
              <select id="dob-day" name="dob-day" className="form-select mt-1 pl-2 w-1/3 rounded-md border-gray-300 shadow-sm" required>
                <option value="" disabled selected>Day</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select id="dob-year" name="dob-year" className="form-select mt-1 pl-2 w-1/3 rounded-md border-gray-300 shadow-sm" required onChange={handleYearChange}>
                <option value="" disabled selected>Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-4">
            <div className="flex items-center">
              <input type="checkbox" 
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" 
                id="terms" 
                required />
              <label className="ml-2 block text-sm leading-5 text-gray-700" htmlFor="terms">I agree to the terms and conditions.</label>
            </div>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none">
            Register
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
