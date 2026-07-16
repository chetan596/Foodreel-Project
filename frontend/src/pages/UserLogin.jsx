import React from "react";
import "../styles/UserRegister.css";
import "../styles/variables.css";
import { User, Mail, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  return (
    <main className="flex justify-between items-center imageDiv">
      <div className="h-screen w-[77%] user-loginImage"></div>
      <div className="h-screen w-[45%] ">
        <div className="h-full w-full flex flex-col justify-between p-10 items-center">
          <div className=" text-center">
            <h1 className="text-4xl ">Welcome Back 👋</h1>
            <div className="mt-3">
              <p className=" text-secondary text-sm">
                Login to continue exploring amazing food reels.
              </p>
            </div>
          </div>

          <div className=" h-130 ">
            <form action="" className="flex flex-col justify-between h-full">
              <div className="w-full h-27">
                <div className="google_auth h-full">
                  <div>
                    {" "}
                    <button> <img src="https://imgs.search.brave.com/MIGGUxXvA8eZP5fR9x6pAwOOVi846wgiFXYQTCH5kqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy0y/NDc2NDc5LnBuZz9m/PXdlYnAmdz0xMjg" alt="" />Continue with Google</button>
                  </div>
                  <div>
                    <button> <img src="https://imgs.search.brave.com/JAW6XBcVqM2HtYjCg7BSlB62E6MxJeqcYvI-Phx4B60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2ZpbGUtYXBw/bGUtbG9nby1kYXJr/LWdyZXktc3ZnLXdp/a2ltZWRpYS1jb21t/b25zLTIxLnBuZw" alt="" />Continue with Apple</button>
                  </div>
                </div>

               
              </div>

               <div className="flex items-center justify-between user-login-from-gap">
                  <div></div>
                  <p className="text-secondary">or</p>
                  <div></div>
                </div>
                <div>
                    
              <div>
                <div className="py-2">
                  <label className=" text-secondary text-sm " htmlFor="email">
                    Email
                  </label>
                </div>
                <div className="flex items-center user-input-div">
                  <input
                    className="userLoginInput"
                    type="text"
                    placeholder="Enter your full email"
                    id="email"
                  />
                  <span className="user-login-from-icon">
                    <Mail size={20} color="#9CA3AF" strokeWidth={1.75} />
                  </span>
                </div>
              </div>

              <div>
                <div className="py-2">
                  <label
                    className=" text-secondary text-sm "
                    htmlFor="Password"
                  >
                    Password
                  </label>
                </div>
                <div className="flex items-center user-input-div">
                  <input
                    className="userLoginInput"
                    type="password"
                    placeholder="Enter your Password"
                    id="Password"
                  />
                  <span className="user-login-from-icon">
                    <Eye size={20} color="#9CA3AF" strokeWidth={1.75} />
                  </span>
                </div>
              </div>

              <div className="flex items-start mt-0.5 justify-end">
                <div>
                  <label className=" tem-cnd text-[#FF4D4F]" htmlFor="checkbox">
                    Forget Password?{" "}
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button className="user-login-buttom">Login</button>

                <p className="text-center py-6 text-sm">
                  Don't have an accound?{" "}
                  <span className="text-[#FF4D4F]">
                    {" "}
                    <Link to="/user/register">Register</Link>{" "}
                  </span>
                </p>
              </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserRegister;
