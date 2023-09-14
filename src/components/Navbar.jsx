import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from '../assets/logo1.png';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav((prevNav) => !prevNav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center 
                px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='' style={{width: '50px'}}/>
        </div>

        {/* menu */}
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer text-2xl'>
            {nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul className={nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] 
                            hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='w-full flex justify-between items-center text-gray-300' href="/">
                        Linkedin 
                        <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] 
                            hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='w-full flex justify-between items-center text-gray-300' href="/">
                        Github 
                        <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] 
                            hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='w-full flex justify-between items-center text-gray-300' href="/">
                        Email 
                        <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] 
                            hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='w-full flex justify-between items-center text-gray-300' href="/">
                        Resume 
                        <BsFillPersonFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;