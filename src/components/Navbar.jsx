import React, {useState} from 'react';
import { ImMenu3 } from "react-icons/im";
import { MdScreenSearchDesktop } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import { LiaLuggageCartSolid } from "react-icons/lia";
import {MdHelp} from 'react-icons/md'
import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
     
      <div className='flex items-center'>
        {/*Left*/}
        <div onClick={()=> setNav(!nav)} className='cursor-pointer text-[#483D8B]'>
          <ImMenu3 className='hover:text-green-600' size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold text-green-600'>
          Techno Gadgets
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-[#483D8B] text-white rounded-full p-2 hover:bg-green-600 cursor-pointer'>Delivery</p>
          <div></div>
          <p className='p-2 text-gray-950 font-bold cursor-pointer'>Pickup</p>
        </div>
      </div>

      {/*Search Box*/}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <MdScreenSearchDesktop size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Find Gadgets'
        />
      </div>
      
      {/*Cart*/}
      <button className='bg-[#483D8B] text-white hidden md:flex items-center py-2 rounded-full hover:bg-green-600'>
        <LiaLuggageCartSolid size={20} className='mr-2' /> Cart
      </button>

       {/* Menu */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <SlClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer hover:text-[#483D8B]'
        />
        <h2 className='text-2xl p-4 font-bold text-green-600'>
        Techno Gadgets
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex cursor-pointer hover:text-green-600'><FaHome size={25} className='mr-4 text-[#483D8B] cursor-pointer' /> Home</li>
                <li className='text-xl py-4 flex cursor-pointer hover:text-green-600'><MdMiscellaneousServices size={25} className='mr-4 text-[#483D8B] cursor-pointer' /> Services</li>
                <li className='text-xl py-4 flex cursor-pointer hover:text-green-600'><FaBook size={25} className='mr-4 text-[#483D8B] cursor-pointer' /> About</li>
                <li className='text-xl py-4 flex cursor-pointer hover:text-green-600'><MdHelp size={25} className='mr-4 text-[#483D8B] cursor-pointer' /> Feedback</li>
                <li className='text-xl py-4 flex cursor-pointer hover:text-green-600'><FaStar  size={25} className='mr-4 text-[#483D8B] cursor-pointer' /> Promo</li>
                <li className='text-xl py-4 flex cursor-pointer hover:text-green-600'><GiLaptop size={25} className='mr-4 text-[#483D8B] cursor-pointer' /> Product</li>
                <li className='text-xl py-4 flex cursor-pointer hover:text-green-600'><FaPhone size={25} className='mr-4 text-[#483D8B] cursor-pointer' /> Contact</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;