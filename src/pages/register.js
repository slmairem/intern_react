import React, { useState, useEffect } from 'react';
import '../styles/register.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1));
    const [years, setYears] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

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

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const validateForm = () => {
        // Form validasyonu burada yapılabilir
        return true; // veya false
    };

    return (
        <div>
            <div className="container">
                <div className="form-box register">
                    <h2>Register</h2>
                    <form id="registerForm" action="/register" method="POST" onSubmit={validateForm}>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <input type="email" className="form-control" id="email" name="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                            <input type="text" className="form-control" id="username" name="username" required maxLength="10" />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" required />
                            <label htmlFor="password">Password</label>
                            <button type="button" className="btn btn-secondary" onClick={togglePassword}>Show Password</button>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input type="password" className="form-control" id="conpassword" name="conpassword" required />
                            <label htmlFor="conpassword">Confirm Password</label>
                        </div>
                        <div className="input-box dob-container">
                            <label htmlFor="dob">Birthday</label>
                            <select id="dob-month" name="dob-month" required onChange={handleMonthChange}>
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
                            <select id="dob-day" name="dob-day" required>
                                <option value="" disabled selected>Day</option>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                            <select id="dob-year" name="dob-year" required onChange={handleYearChange}>
                                <option value="" disabled selected>Year</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="terms" required />
                            <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions.</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </form>
                    <div className="login-register">
                        <p>Already have an account? <a href="/login" className="login-link">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
