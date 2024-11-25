import { React, useState } from 'react';
import logo from '../assets/icons8-circled-p-80.png';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';
import { LuGlobe, LuHeart, LuMenu, LuSearch, LuShoppingCart, LuX } from 'react-icons/lu';



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };


  return (
    <header  className='py-[10px] px-[20px] w-full sticky top-0 z-50 bg-[#f5f5f5] flex justify-between items-center drop-shadow-lg'>

        {/* ---------------------------------------- Logo -----------------------------------------------------------------------> */}
        
        <div className=' flex gap-1 justify-center items-center transition-all cursor-pointer'>
            <img src={logo} className="App-logo left-0" alt="logo" />
            <Link to='/' className='list-none no-underline text-[#9CA3AF] uppercase font-extrabold text-lg italic inline-block'>
                pecuihe
            </Link>
        </div>

        {/* ----------------------------------------- Nav ----------------------------------------------> */}

        <nav className='flex flex-1 items-center justify-evenly overflow-hidden'>
            {/* ------------------------------ Desktop View Menu ------------------------------------------------------------> */}

            <ul className='hidden lg:flex lg:justify-center lg:items-center p-4 gap-6 capitalize text-gray-400 font-bold no-underline list-none'>

                <li className='p-2'>
                    <NavLink to="/">home</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/shop">shop</NavLink>
                </li>

                <li className='p-2'>
                    <NavLink to="/blog">blog</NavLink>
                </li>

                <li className='p-2'>
                    <NavLink to="/about">about</NavLink>
                </li>

                <li className='p-2'>
                    <NavLink to="/contact">contact</NavLink>
                </li>
            </ul>

            <ul className='hidden lg:flex lg:justify-center lg:items-center p-4 gap-6 capitalize text-gray-400 font-bold no-underline list-none'>
                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/signin">Login</NavLink>
                </li>
                
                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/signup">Register</NavLink>
                </li> 
            </ul>

            {/* ---------------------------------- Theme Toggle ---------------------------------------------------------> */}
            <div className='flex justify-center items-center'>
                <div className='flex gap-8'>
                    <LuSearch />
                    <LuHeart />
                    <LuGlobe />
                    <LuShoppingCart />
                </div>
            </div>

            
            {/* -------------------------------------------------- Hamburger Menu -----------------------------> */}

            <div className='flex w-[75px] justify-end lg:hidden'>
                <button onClick={toggleMenu} className='text-4xl text-gray-400'>
                    {isMenuOpen ? <LuX /> : <LuMenu />}
                </button>
            </div>

            {/* ------------------------------ Mobile View Menu ------------------------------------------------------------> */}

            <ul className={`absolute z-50 lg:hidden basis-full top-20 right-0 w-full bg-[#f1e9e9] rounded-lg flex flex-col text-center gap-4 px-48 py-6 capitalize font-bold text-gray-400 list-none no-underline
                ${isMenuOpen ? "block" : "hidden"}`}
            >

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/">home</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/shop">shop</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/collection">collection</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/pages">pages</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/blog">blog</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/about">about</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/contact">contact</NavLink>
                </li>

                <li className='p-1 border ' onClick = {toggleMenu}>
                    <NavLink to="/signup">Register</NavLink>
                </li>

                <li className='p-1' onClick = {toggleMenu}>
                    <NavLink to="/signin">Login</NavLink>
                </li>
                
            </ul>

        </nav>
    </header>

  );
}

export default Navbar; 


