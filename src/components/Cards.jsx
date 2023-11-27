import React from 'react';

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      
      <div className='rounded-xl relative'>
       
        <div className='absolute w-full h-full  rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Realease Mobile Devices</p>
          <p className='px-2'>Version XXX</p>
          <button className=' bg-[#483D8B] hover:bg-green-600 text-white mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='./assets/cp.jpg'
          alt='/'
        />
      </div>
      
      <div className='rounded-xl relative'>
        
        <div className='absolute w-full h-full  rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Release Graphical Processing Unit</p>
          <p className='px-2'>Improve Gaming Experience</p>
          <button className=' bg-[#483D8B] hover:bg-green-600 text-white mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='./assets/gpu.jpeg'
          alt='/'
        />
      </div>
      
      <div className='rounded-xl relative'>
        
        <div className='absolute w-full h-full rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Release HeadSet</p>
          <p className='px-2'>100% No Background Noise</p>
          <button className=' bg-[#483D8B] hover:bg-green-600 text-white mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='./assets/headset.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Cards;