import React, { useState } from 'react'
import { FaEnvelope, FaLock, FaUnlock, FaUser } from 'react-icons/fa';
// import { MdEmail, MdMail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


function SignUp() {

    const [showP, setShowP] = useState(false)
    const [showCP, setShowCP] = useState(false)

    // navigate
    const navigate = useNavigate();


    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


 // handle submit

    const handleSignUp = async (e) => {
        e.preventDefault();

        // submit form
        try {
            if (password !== confirmPassword) {
                console.log('Password does not match');
                toast.error('Password does not match');
        
                return;
            }
            
            const formSignup = { fullName, email, password }

            const url = 'http://localhost:5000/api/auth/register';

            const response = await axios.post(url, formSignup);
            toast.success('You have succesfuly signed up.');
            console.log(response);
    
            // navigate user to Login page
            navigate('/signin');

        } catch (error) {
            console.error('Error Submitting Form');
            toast.error('Failed to submit form');
        }
  
    }


    return (
        <div className='h-[100vh] flex flex-col items-center justify-center text-white bg-background bg-cover'>
            
            <div className='h-[450px] w-80 bg-blue-600/20 backdrop-blur-lg border border-blue-600 p-6 rounded-xl overflow-hidden'>

                {/*------------------------Signup--Page------------------------------*/}

                <h2 className='text-3xl font-bold pb-4 text-center'>Create Account</h2>

                <form onSubmit={handleSignUp} className='flex flex-col items-center'>
                    <div className='w-full relative'>
                        <input 
                            type='text'
                            name='fullName'
                            value={fullName}
                            placeholder='Full Name'
                            className='border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent outline-none caret-blue-600' 
                            onChange={(e) => setFullName(e.target.value)} 
                        />
                        <FaUser className='absolute top-[35%] right-3' />
                    </div>

                    <div className='w-full relative'>
                        <input
                            type='email'
                            value={email}
                            placeholder='Email'
                            className='border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent outline-none caret-blue-600' 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <FaEnvelope className='absolute top-[35%] right-3' />
                    </div>

                    <div className='w-full relative'>
                        <input 
                            type={!showP ? "password" : "text"}
                            value={password}
                            placeholder='Password'
                            className='border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent outline-none caret-blue-600'
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {showP && <FaUnlock onClick={() => setShowP(!showP)} className='absolute top-[35%] right-3' /> }
                        {!showP && <FaLock  onClick={() => setShowP(!showP)} className='absolute top-[35%] right-3' /> }
                    </div>

                    <div className='w-full relative'>
                        <input 
                            type={!showCP ? "password" : "text"}
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            className='border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent outline-none caret-blue-600'
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required
                        />
                        {showCP && <FaUnlock onClick={() => setShowCP(!showCP)} className='absolute top-[35%] right-3' /> }
                        {!showCP && <FaLock  onClick={() => setShowCP(!showCP)} className='absolute top-[35%] right-3' /> }
                    </div>

                    <div className='w-full mt-2 flex items-center justify-center'>
                        <div className='text-[14px] flex gap-2'>
                            <input type="checkbox" name='' id='' />
                            <label htmlFor="">I agree to the terms & conditions.</label>
                        </div>
                    </div>

                    <button 
                        type='submit' 
                        className='my-3 py-2 w-full text-center rounded-full bg-blue-600 font-semibold'
                    >
                        Register
                    </button>

                    <div className='flex gap-2 items-center justify-center w-full'>
                        <span className='text-[14px]'>
                            Already have an account? 
                        </span>
                        <span className='text-[14px]'>
                            <Link to='/signin' className='font-semibold text-blue-600 cursor-pointer'>
                                Login
                            </Link>
                        </span>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default SignUp;




