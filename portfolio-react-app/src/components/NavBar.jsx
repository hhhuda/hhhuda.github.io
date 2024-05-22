import React, {useState, useEffect} from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
  } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/hellohello.png';

import {Link} from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='font-navbar fixed w-full h-[100px] flex justify-between items-center px-4 md:px-12 bg-[#233342] text-gray-300'>
            <div>
                <img q
                src={Logo} alt='Logo Image' style={{width: '200px'}}/>
                
            </div>

            {/* menu */}
            {/*shows nav menu only when screen is bigger than half*/}
            <ul className='text-3xl hidden md:flex'> 
                <li>
                    <Link to="home" smooth={true} duration={500} className='hover:italic'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} className='hover:italic'>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} className='hover:italic'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className='hover:italic'>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger */ }
            {/* only shows when window is less than half - hamburger when small, menu when big */}
            <div onClick={handleClick} className='md:hidden z-10'> 
                {!nav ? <FaBars className='pr-2' size={30} margin /> : <FaTimes />}
            </div>

            { /* mobile menu */ }
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#233342] flex flex-col justify-center items-center'}>
                
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            { /* social icons on the left side */ }
            { /* only appear when screen width is large enough */ }
            <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/hhhuda">
                            GitHub <FaGithub size={25} />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="www.linkedin.com/in/huda-m">
                            LinkedIn <FaLinkedin size={25} />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#568203]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:m19.huda@gmail.com">
                            Email <HiOutlineMail size={25} />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Resume <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};


export default NavBar