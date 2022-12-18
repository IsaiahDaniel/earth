import React from 'react';
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className='w-[60%] mx-auto flex items-center justify-between pt-4 text-white'>

      <ul className='flex items-center justify-between'>
        <li className='pl-5'>Blog</li>
        <li className='pl-5'>About Us</li>
      </ul>

      <img src={logo} alt="" className='' />

      <ul className='flex items-center justify-between'>
        <li>Community</li>
        <li className='pl-5'>Contact</li>
        <li className='pl-5'>NFTs</li>
      </ul>

    </div>
  )
}

export default Navbar