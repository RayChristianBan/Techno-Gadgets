import React from 'react';

const Letter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-600'>
            Want to be updated on our latest Promo?
          </h1>
          <p className='text-black'>Order now and Get a Freebies!.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black bg-[#F0F8FF]'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#483D8B] hover:bg-green-600 text-white rounded-full p-2 font-sm w-[200px] ml-4 my-6 px-6 py-3'>
              Email
            </button>
          </div>
          <p className='text-black'>
            We care about our Costumers. Read our{' '}
            <span className='text-indigo-600 font-bold'>Costumers Feedback.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Letter;