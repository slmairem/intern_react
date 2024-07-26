import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const [selectedDay, setSelectedDay] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: 101 }, (_, i) => currentYear - i));
  }, []);

  useEffect(() => {
    const daysInMonth = new Date(selectedYear || new Date().getFullYear(), selectedMonth, 0).getDate();
    setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  }, [selectedMonth, selectedYear]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
    setFormError((prev) => ({ ...prev, [name]: '' }));

    if (name === 'dob-month') {
      const monthNames = {
        'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
        'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
      };
      setSelectedMonth(monthNames[value]);
    } else if (name === 'dob-year') {
      setSelectedYear(value);
    } else if (name === 'dob-day') {
      setSelectedDay(value);
    } else if (name === 'terms') {
      setTermsAccepted(e.target.checked);
    }
  };

  const validateForm = async (event) => {
    event.preventDefault();
    let inputError = {};
  
    if (!formInput.email) inputError.email = "Enter a valid email address";
    if (!formInput.username) inputError.username = "Username should not be empty";
    if (!formInput.password) inputError.password = "Password should not be empty";
    if (formInput.password !== formInput.confirmPassword) inputError.confirmPassword = "Passwords do not match";
    if (!selectedMonth || !selectedDay || !selectedYear) inputError.date = "Select a valid date";
    if (!termsAccepted) inputError.terms = "You must accept the terms and conditions";
  
    setFormError(inputError);
  
    if (Object.values(inputError).every(error => error === "")) {
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formInput.email,
            username: formInput.username,
            password: formInput.password,
            birthday: `${selectedYear}-${selectedMonth}-${selectedDay}`,
          }),
        });
  
        if (response.ok) {
          navigate('/login');
        } else {
          const errorData = await response.json();
          setFormError((prev) => ({ ...prev, form: errorData.error || 'An error occurred' }));
          console.error('Server Response Error:', errorData);
        }
      } catch (err) {
        console.error('Register Error:', err);
        setFormError((prev) => ({ ...prev, form: 'An error occurred' }));
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center h-max p-4 font-IndieFlower">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Register</h2>
        <form id="registerForm" onSubmit={validateForm}>
          {['email', 'username', 'password', 'confirmPassword'].map((field) => (
            <div key={field} className="mb-4">
              <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                id={field}
                name={field}
                className="mt-1 pl-2 w-full rounded-md border-gray-300 shadow-sm"
                value={formInput[field]}
                onChange={handleChange}
              />
              {formError[field] && <p className="text-red-600 text-sm">{formError[field]}</p>}
            </div>
          ))}
          
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Birthday</label>
            <div className="flex space-x-2 mt-1">
              {['Month', 'Day', 'Year'].map((type, index) => (
                <select
                  key={type}
                  name={`dob-${type.toLowerCase()}`}
                  className="form-select mt-1 pl-2 w-1/3 rounded-md border-gray-300 shadow-sm"
                  onChange={handleChange}
                >
                  <option value="" disabled selected>{type}</option>
                  {(type === 'Month' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] : (type === 'Day' ? days : years)).map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              ))}
            </div>
            {formError.date && <p className="text-red-600 text-sm">{formError.date}</p>}
          </div>

          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                id="terms"
                name="terms"
                onChange={handleChange}
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the terms and conditions.
              </label>
            </div>
            {formError.terms && <p className="text-red-600 text-sm">{formError.terms}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none"
          >
            Register
          </button>

          {formError.form && <p className="text-red-600 text-sm text-center">{formError.form}</p>}
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
