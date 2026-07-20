import React, { useState } from 'react';
import { User, Mail, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Styles
import '../../styles/UserRegister.css';
import '../../styles/variables.css';
import '../../styles/FoodRegister.css';

// It is best practice to import images so your bundler can process them correctly.
// Adjust the path to match your actual file structure if needed:
// import logoLight from '../assets/foodPartnerLogo.png';
// import logoDark from '../assets/foodPartnerLogoDark.png';

const UserRegister = () => {
  // Using React state to manage form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  // Handle changes for all inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log the data to verify it works
    console.log('Submitting Form Data:', formData);

    // Example of how you will eventually use axios:
    
    try {
      const response = await axios.post('http://localhost:3000/api/auth/foodpartner/register', formData);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <main className="flex justify-between items-center imageDiv">
      {/* Left side background image */}
      <div className="h-screen md:block hidden w-[77%] food-loginImage"></div>

      {/* Right side form */}
      <div className="h-screen w-full md:w-[45%] flex items-center justify-center">
        <div className="h-full w-full flex flex-col justify-between p-10 items-center main-login-divUser">
          
          <div className="FoodParLogo">
            <picture>
              {/* Replace string paths with imported variables if possible: srcSet={logoLight} */}
              <source
                srcSet="../assets/foodPartnerLogo.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src="../assets/foodPartnerLogoDark.png" alt="Food Partner Logo" />
            </picture>
          </div>

          <div className="text-center">
            <h1 className="text-4xl">Create Partner Account 🎉</h1>
            <div className="mt-3">
              <p className="text-[1rem] text-secondary">Join FoodPartner and grow your</p>
              <p className="text-[1rem] text-secondary">food business.</p>
            </div>
          </div>

          <div className="h-125">
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
              
              {/* Full Name Input */}
              <div>
                <div className="py-2">
                  <label className="text-secondary text-sm" htmlFor="fullName">Full Name</label>
                </div>
                <div className="flex items-center user-input-div">
                  <input
                    className="userLoginInput w-full"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <span className="user-login-from-icon">
                    <User size={20} color="#9CA3AF" strokeWidth={1.75} />
                  </span>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <div className="py-2">
                  <label className="text-secondary text-sm" htmlFor="email">Email</label>
                </div>
                <div className="flex items-center user-input-div">
                  <input
                    className="userLoginInput w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="user-login-from-icon">
                    <Mail size={20} color="#9CA3AF" strokeWidth={1.75} />
                  </span>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="py-2">
                  <label className="text-secondary text-sm" htmlFor="password">Password</label>
                </div>
                <div className="flex items-center user-input-div">
                  <input
                    className="userLoginInput w-full"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span className="user-login-from-icon">
                    <Eye size={20} color="#9CA3AF" strokeWidth={1.75} />
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start mt-4">
                <div className="py-1 pr-2">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    id="checkbox"
                    className="user-from-login-checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-secondary fd-text text-sm cursor-pointer" htmlFor="checkbox">
                    I agree to the <span>Terms & Conditions</span>
                    <div>and <span>Privacy Policy</span></div>
                  </label>
                </div>
              </div>

              {/* Submit Button & Login Link */}
              <div className="mt-6">
                <button type="submit" className="fd-login-buttom w-full">
                  Register
                </button>
                <p className="text-center py-6 text-sm">
                  Already have an account?{' '}
                  <span className="fd-text font-semibold">
                    <Link to="/foodpartner/login">Login</Link>
                  </span>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserRegister;