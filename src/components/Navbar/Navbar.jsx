import React from 'react';
import HambugerMenu from "../../assets/nav.svg";
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='w-[60%] container mx-auto md:flex items-center justify-between pt-4 text-white'>

        <ul className='md:flex items-center justify-between hidden'>
          <li className='pl-5'>Blog</li>
          <li className='pl-5'>
            <Link to="/about">
              About Us
            </Link>
          </li>
        </ul>

        <Link to="/">
          <img src={Logo} alt="" className='hidden md:block w-[70px] object-cover' />
        </Link>

        <ul className='md:flex items-center justify-between hidden'>
          <li>Community</li>
          <li className='pl-5'>
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className='pl-5'>NFTs</li>
        </ul>

      </div>

      <div className='flex items-center justify-between container mx-auto px-7 md:hidden'>
        <div>
          <img src={Logo} alt="" className='w-[70px] object-cover' />
        </div>

        <div>
          <img src={HambugerMenu} alt="" />
        </div>
      </div>


    </>
  )
}

export default Navbar