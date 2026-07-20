import React, { useState } from "react";
import { User, Mail, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import axios from 'axios'; 

// Styles
import "../../styles/UserRegister.css";
import "../../styles/variables.css";

const UserRegister = () => {
  // 1. Setup state for your form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3. Handle form submission safely
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Login Data:", formData);
   
     try {
      const response = await axios.post('http://localhost:3000/api/auth/foodpartner/login', formData);
      console.log(response);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex justify-between items-center imageDiv">
      {/* Left side background image */}
      <div className="h-screen w-[77%] food-loginImage"></div>

      {/* Right side form */}
      <div className="h-screen w-[45%] ">
        <div className="h-full w-full flex flex-col justify-between px-10 pt-4 pb-4  items-center">
          
          <div className="FoodParLogo foodLg2">
            <picture>
              <source
                srcSet="../src/assets/foodPartnerLogo.png"
                media="(prefers-color-scheme: dark)"
              />
              <img src="../src/assets/foodPartnerLogoDark.png" alt="Food Partner Logo" />
            </picture>
          </div>

          <div className="text-center wl-textlg">
            <h1 className="text-4xl">Welcome Back 👋</h1>
            <div className="mt-3">
              <p className="text-secondary text-sm">
                Login to continue exploring amazing food reels.
              </p>
            </div>
          </div>

          <div className="h-130 w-full">
            {/* Added onSubmit handler to the form */}
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full w-full">
              
              <div className="w-full h-27">
                <div className="google_auth h-full flex flex-col gap-3">
                  <div>
                    <button type="button" className="w-full flex items-center justify-center gap-2 border p-2 rounded">
                      <img
                        className="w-5 h-5"
                        src="https://imgs.search.brave.com/MIGGUxXvA8eZP5fR9x6pAwOOVi846wgiFXYQTCH5kqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/NDc2NDc5LnBuZz9m/PXdlYnAmdz0xMjg"
                        alt="Google"
                      />
                      Continue with Google
                    </button>
                  </div>
                  <div>
                    <button type="button" className="w-full flex items-center justify-center gap-2 border p-2 rounded">
                      <img
                        className="w-5 h-5"
                        src="https://imgs.search.brave.com/JAW6XBcVqM2HtYjCg7BSlB62E6MxJeqcYvI-Phx4B60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2ZpbGUtYXBw/bGUtbG9nby1kYXJr/LWdyZXktc3ZnLXdp/a2ltZWRpYS1jb21t/b25zLTIxLnBuZw"
                        alt="Apple"
                      />
                      Continue with Apple
                    </button>
                  </div>
                </div>
              </div>

              {/* Improved the 'OR' separator layout */}
              <div className="flex items-center justify-between user-login-from-gap py-4">
                <div className="h-px bg-gray-300 w-full"></div>
                <p className="text-secondary px-3">or</p>
                <div className="h-px bg-gray-300 w-full"></div>
              </div>

              <div className="flex flex-col gap-4 h-[50%]:">
                {/* Email Input */}
                <div>
                  <div className="py-2">
                    <label className="text-secondary text-sm" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center user-input-div">
                    <input
                      className="userLoginInput w-full"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
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
                    <label className="text-secondary text-sm" htmlFor="password">
                      Password
                    </label>
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

                {/* Forgot Password */}
                <div className="flex items-start mt-0.5 justify-end">
                  <div>
                    <Link to="/forgot-password" className="fd-text text-sm hover:underline cursor-pointer">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="mt-6">
                <button type="submit" className="fd-login-buttom w-full">
                  Login
                </button>

                <p className="text-center pt-6 text-sm">
                  Don't have an account?{" "}
                  <span className="fd-text font-semibold">
                    <Link to="/foodpartner/register">Register</Link>
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