import React from 'react';
import {

  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-indigo-600'>Techno Gadgets</h1>
        <p className='py-4 text-black'>Our Items are quality yet Affordable.</p>
        <div className='flex justify-between md:w-[75%] my-6 text-green-400'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-[#000000] '>Promotions</h6>
        <ul className='text-black font-medium'>
            <li className='py-2 text-sm'>Promos</li>
            <li className='py-2 text-sm'>Discount</li>
            <li className='py-2 text-sm'>Gift Cards</li>
            
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-[#000000]'>About Us</h6>
        <ul className='text-black font-medium'>
            <li className='py-2 text-sm'>About Techno Gadgets</li>
            <li className='py-2 text-sm'>Rate Our Store</li>
            <li className='py-2 text-sm'>Investor</li>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Contact Us</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-[#000000]'>About our website</h6>
        <ul className='text-black font-medium'>
            <li className='py-2 text-sm'>Privacy Policy</li>
            <li className='py-2 text-sm'>Terms and Condition</li>
            <li className='py-2 text-sm'>Accessibility</li>
            <li className='py-2 text-sm'>SiteMap</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-[#000000]'>Social Media</h6>
        <ul className='text-black font-medium'>
            <li className='py-2 text-sm'>Twitter</li>
            <li className='py-2 text-sm'>Facebooks</li>
            <li className='py-2 text-sm'>Instagram</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;


