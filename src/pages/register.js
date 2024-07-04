import React, { useState } from 'react';
import '../styles/register.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                            <select id="dob-month" name="dob-month" required>
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
                                
                            </select>
                            <select id="dob-year" name="dob-year" required>
                                
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
