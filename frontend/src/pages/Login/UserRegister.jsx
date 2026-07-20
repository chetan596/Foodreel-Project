import React, { useState } from 'react';
import { User, Mail, Eye } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you will use axios for your API call

import "../../styles/UserRegister.css";
import '../../styles/variables.css';

const UserRegister = () => {
  const navigate = useNavigate();

  // 1. Initialize state for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    console.log("Submitting User Registration:", formData);

    
    // Example of how to connect this to the backend controller you wrote:
    try {
      // Map 'fullName' from frontend to 'name' expected by your backend
      const response = await axios.post('http://localhost:3000/api/auth/user/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });

      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/"); // Redirect user to home or login page
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Registration failed");
      alert(error.response?.data?.message || "Registration failed");
    }
    
  };

  return (
    <main className='flex justify-between items-center imageDiv'>
      {/* Background Image Side */}
      <div className='h-screen md:block hidden w-[77%] user-loginImage'></div>
      
      {/* Form Side */}
      <div className='h-screen w-full md:w-[45%] flex items-center justify-center'>
        <div className='h-full w-full flex flex-col justify-between p-10 items-center main-login-divUser'>
          
          <div className='text-center'>
            <h1 className='text-4xl'>Create Account 👋</h1>
            <div className='mt-3'>
              <p className='text-[1rem] text-secondary'>Join FoodReel and explore the</p>
              <p className='text-[1rem] text-secondary'>best food around you.</p>
            </div>
          </div>

          <div className='h-125 w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-between h-full'>
              
              {/* Full Name Input */}
              <div>
                <div className='py-2'>
                  <label className='text-secondary text-sm' htmlFor="fullName">Full Name</label>
                </div>
                <div className='flex items-center user-input-div'>
                  <input 
                    className='userLoginInput w-full' 
                    type="text" 
                    name="fullName"
                    id='fullName'
                    placeholder='Enter your full name' 
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <span className='user-login-from-icon'>
                    <User size={20} color="#9CA3AF" strokeWidth={1.75}/>
                  </span>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <div className='py-2'>
                  <label className='text-secondary text-sm' htmlFor="email">Email</label>
                </div>
                <div className='flex items-center user-input-div'>
                  <input 
                    className='userLoginInput w-full' 
                    type="email" 
                    name="email"
                    id='email'
                    placeholder='Enter your full email' 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className='user-login-from-icon'>
                    <Mail size={20} color="#9CA3AF" strokeWidth={1.75}/>
                  </span>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className='py-2'>
                  <label className='text-secondary text-sm' htmlFor="password">Password</label>
                </div>
                <div className='flex items-center user-input-div'>
                  <input 
                    className='userLoginInput w-full' 
                    type="password" 
                    name="password"
                    id='password'
                    placeholder='Enter your Password' 
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span className='user-login-from-icon'>
                    <Eye size={20} color="#9CA3AF" strokeWidth={1.75}/>
                  </span>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className='flex items-start mt-4'>
                <div className='py-1 pr-2'> 
                  <input 
                    type="checkbox" 
                    name="agreeToTerms"
                    id='checkbox' 
                    className='user-from-login-checkbox cursor-pointer'
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className='text-secondary tem-cnd text-sm cursor-pointer' htmlFor="checkbox">
                    I agree to the <span>Terms & Conditions</span> 
                    <div>and <span>Privacy Policy</span></div>
                  </label>
                </div>
              </div>

              {/* Submit / Login Link */}
              <div className='mt-6'>
                <button type="submit" className='user-login-buttom w-full'>Register</button>
                <p className='text-center py-6 text-sm'>
                  Already have an account? <span className='text-[#FF4D4F] font-semibold'><Link to='/user/login'>Login</Link></span>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserRegister;