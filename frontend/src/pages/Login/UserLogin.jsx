import React, { useState } from "react";
import { User, Mail, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../styles/UserRegister.css";
import "../../styles/variables.css";

const UserRegister = () => {
  // 1. Initialize state for the login fields
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

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting User Login:", formData);
   

    try {
      // Map 'fullName' from frontend to 'name' expected by your backend
      const response = await axios.post('http://localhost:3000/api/auth/user/login', {
        email: formData.email,
        password: formData.password
      });

      console.log(response)

      if (response.status === 200) {
        alert("Registration successful!");
        navigate("/"); // Redirect user to home or login page
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Registration failed");
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <main className="flex justify-between items-center imageDiv">
      {/* Left side background image */}
      <div className="h-screen w-[77%] user-loginImage hidden md:block"></div>
      
      {/* Right side form */}
      <div className="h-screen w-full md:w-[45%]">
        <div className="h-full w-full flex flex-col justify-between p-10 items-center">
          
          <div className="text-center">
            <h1 className="text-4xl">Welcome Back 👋</h1>
            <div className="mt-3">
              <p className="text-secondary text-sm">
                Login to continue exploring amazing food reels.
              </p>
            </div>
          </div>

          <div className="h-130 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full w-full">
              
              <div className="w-full h-27">
                <div className="google_auth h-full flex flex-col gap-3">
                  <div>
                    {/* Added type="button" to prevent form submission */}
                    <button type="button" className="w-full flex items-center justify-center gap-2 border p-2 rounded">
                      <img
                        className="w-5 h-5"
                        src="https://imgs.search.brave.com/MIGGUxXvA8eZP5fR9x6pAwOOVi846wgiFXYQTCH5kqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/NDc2NDc5LnBuZz9m/PXdlYnAmdz0xMjg"
                        alt="Google Logo"
                      />
                      Continue with Google
                    </button>
                  </div>
                  <div>
                    <button type="button" className="w-full flex items-center justify-center gap-2 border p-2 rounded">
                      <img
                        className="w-5 h-5"
                        src="https://imgs.search.brave.com/JAW6XBcVqM2HtYjCg7BSlB62E6MxJeqcYvI-Phx4B60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2ZpbGUtYXBw/bGUtbG9nby1kYXJr/LWdyZXktc3ZnLXdp/a2ltZWRpYS1jb21t/b25zLTIxLnBuZw"
                        alt="Apple Logo"
                      />
                      Continue with Apple
                    </button>
                  </div>
                </div>
              </div>

              {/* Improved 'OR' separator layout */}
              <div className="flex items-center justify-between user-login-from-gap py-4">
                <div className="h-px bg-gray-300 w-full"></div>
                <p className="text-secondary px-3">or</p>
                <div className="h-px bg-gray-300 w-full"></div>
              </div>

              <div className="flex flex-col gap-4">
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
                    <Link to="/forgot-password" className="tem-cnd text-[#FF4D4F] hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="mt-6">
                <button type="submit" className="user-login-buttom w-full">
                  Login
                </button>

                <p className="text-center py-6 text-sm">
                  Don't have an account?{" "}
                  <span className="text-[#FF4D4F] font-semibold">
                    <Link to="/user/register">Register</Link>
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