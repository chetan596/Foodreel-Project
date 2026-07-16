import React from 'react'
import "../styles/UserRegister.css"
import '../styles/variables.css';
import '../styles/FoodRegister.css';
import { User, Mail,Eye} from "lucide-react"
import { Link } from 'react-router-dom';

import axios from 'axios';


const UserRegister = () => {
    


  return (
    <main className='flex justify-between items-center imageDiv'>
        <div className='h-screen md:block hidden w-[77%] food-loginImage'>

        </div>
        <div className='h-screen w-full md:w-[45%] flex items-center justify-center'>

        <div className='h-full w-full flex flex-col justify-between p-10 items-center  main-login-divUser'>
            <div className='FoodParLogo'>
             <picture>
                <source srcSet='../src\assets\foodPartnerLogo.png' media='(prefers-color-scheme : dark)'></source>
                   <img src="../src\assets\foodPartnerLogoDark.png" alt="" />
             </picture>
            </div>
            <div className=' text-center'>
                <h1 className='text-4xl '>Create Partner Account 🎉</h1>
                <div className='mt-3'>
                <p className='text-[1rem] text-secondary'>Jion FoodPatner and grow your</p>
                <p className='text-[1rem] text-secondary'> food budiness.</p>
                </div>
            </div>

            <div className=' h-125 '>
                <form action="" className='flex flex-col justify-between h-full'>
                   <div >
                    <div className='py-2'><label className=' text-secondary text-sm ' htmlFor="fullName">Full Name</label></div>
                    <div className='flex items-center user-input-div'>
                        <input className='userLoginInput' type="text" placeholder='Enter your full name' id='fullName'/>
                        <span className='user-login-from-icon'><User size={20} color="#9CA3AF" strokeWidth={1.75}/></span>
                    </div>
                   </div>



                    <div >
                    <div className='py-2'><label className=' text-secondary text-sm ' htmlFor="email">Email</label></div>
                    <div className='flex items-center user-input-div'>
                        <input className='userLoginInput' type="text" placeholder='Enter your full email' id='email'/>
                        <span className='user-login-from-icon'><Mail size={20} color="#9CA3AF" strokeWidth={1.75 }/></span>
                    </div>
                   </div>



                        
                    <div >
                    <div className='py-2'><label className=' text-secondary text-sm ' htmlFor="Password">Password</label></div>
                    <div className='flex items-center user-input-div'>
                        <input className='userLoginInput' type="password" placeholder='Enter your Password' id='Password'/>
                        <span className='user-login-from-icon'><Eye size={20} color="#9CA3AF" strokeWidth={1.75} /></span>
                    </div>
                   </div>



                   <div className='flex items-start mt-0.5'>
                    <div className='py-1'> <input type="checkbox" id='checkbox' className='user-from-login-checkbox pt'/></div>
                    <div><label className=' text-secondary tem-cnd' htmlFor="checkbox">I agree to the <span>Trems & Condition</span> <div> and <span>Privacy Policy</span></div></label></div>
                   </div>


                    <div className='mt-6'>
                        <button className='user-login-buttom' onSubmit={(e)=>{
                            e.preventDefault()
                            console.log("from");
                            
                        }}>Register</button>

                        <p className='text-center py-6 text-sm'>Already have an accound? <span className='text-[#FF4D4F]'> <Link to='/foodpartner/login'>Login</Link>  </span></p>
                    </div>
                </form>
            </div>
        </div>

        </div>
    </main>
  )
}

export default UserRegister
