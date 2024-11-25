import React, { useState } from 'react';
// import { MdEmail, MdMail } from 'react-icons/md';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



function SignIn() {
    
    const [show, setShow] = useState(false)

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignIn = async (e) => {
        e.preventDefault();
    
        const formSignin = {
            email, password
        }
    
        // submit form
        try {
            const url = 'http://localhost:5000/api/auth/login'
            await axios.get(url, formSignin);
            toast.success('Form submitted successfully');
            console.log(formSignin);
      
      
            // navigate user to Login page
            navigate('/')
      
            
          } catch (error) {
            console.error('Error Submitting Form');
            toast.error('Failed to submit form');
          }
      
        }


    return (
 
    <div className='h-[100vh] flex flex-col items-center justify-center text-white bg-background bg-cover'>
        {/*------------------------Login--Page------------------------------*/}

        <div className='h-[400px] w-80 bg-blue-600/20 backdrop-blur-lg border border-blue-600 p-6 rounded-xl overflow-hidden'>

            <h2 className='text-3xl font-bold pb-4 text-center'>Login</h2>

            <form onSubmit={handleSignIn} className='flex flex-col items-center' action="">

                <div className='w-full relative'>
                    <input 
                        type="email"
                        value={email}
                        placeholder='Email'
                        className='border border-gray-200 w-full rounded-full py-2 px-4 my-3 bg-transparent outline-none caret-blue-600'
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <FaEnvelope className='absolute top-[35%] right-3' />
                </div>

                <div className='w-full relative'>
                    <input 
                        type={!show ? "password" : "text"}
                        value={password} 
                        placeholder='Password'
                        className='border border-gray-200 w-full rounded-full py-2 px-4 my-3 bg-transparent outline-none caret-blue-600'
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {show && <FaEye onClick={() => setShow(!show)} className='absolute top-[35%] right-3' />} 
                    {!show && <FaEyeSlash onClick={() => setShow(!show)} className='absolute top-[35%] right-3' />} 
                </div>

                <div className='flex justify-between w-full mt-2'>
                    <div className='text-[14px] flex gap-2'>
                        <input type="checkbox" name='' id='' />
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <span className='text-[14px] text-blue-600 font-semibold'>Forget Password?</span>
                </div>

                <button 
                    type='submit' 
                    className='my-8 py-2 w-full rounded-full bg-blue-600 font-semibold'
                >
                    Login
                </button>

                <div className='flex gap-2 items-center justify-center w-full'>
                    <span className='text-[14px]'>
                        Don&apos;t have an account?
                    </span>
                    <span className='text-[14px]'>   
                        <Link to='/signup' className='font-semibold text-blue-600 cursor-pointer'>
                            Register
                        </Link>
                    </span>
                </div>
            </form>
        </div>

    </div>

    );
}

export default SignIn;



