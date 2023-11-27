import React, { useState } from 'react';
import { images } from '../imagesData/images.js';

const Devices = () => {
  
  const [device, setDevices] = useState(images);

  //   Filter Type gadgets
  const menu = (category) => {
    setDevices(
      images.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const priceList = (price) => {
    setDevices(
      images.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-green-600 font-bold text-4xl text-center'>
        Best Seller Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Menu</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setDevices(images)}
              className='m-1 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer'
            >
              All
            </button>
            <button
              onClick={() => menu('laptop')}
              className='m-1 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointe'
            >
              Laptop
            </button>
            <button
              onClick={() => menu('phone')}
              className='m-1 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer'
            >
              Phone
            </button>
            <button
              onClick={() => menu('gpu')}
              className='m-1 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer'
            >
              Gpu
            </button>
            <button
              onClick={() => menu('camera')}
              className='m-1 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer'
            >
              Camera
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Price List</p>
          <div className='flex justify-between  w-full'>
            <button
              onClick={() => priceList('₱35,000 - 50,000')}
              className='m-4 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer rounded-xl '
            >
              ₱35K - 50K
            </button>
            <button
              onClick={() => priceList('₱7,000 - 30,000')}
              className='m-4 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer'
            >
              ₱7K - 30K
            </button>
            <button
              onClick={() => priceList('₱3,000 - 6,000')}
              className='m-4 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer'
            >
              ₱3K - 6K
            </button>
            <button
              onClick={() => priceList('₱1,000 - 2,000')}
              className='m-4 bg-[#483D8B] text-white hover:bg-green-600 cursor-pointer'
            >
              ₱1K - 2K
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {device.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-[#483D8B] text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devices;