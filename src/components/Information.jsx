import React from 'react';


const Information = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-max mx-auto my-4 pr-20' src='./assets/hero.svg' alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-stone-500 font-bold '>Choose Your Best Choice Here</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Grab Your Order Now</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-[#483D8B] hover:bg-green-600 text-white w-[200px] rounded-full p-2 font-sm my-6 mx-auto md:mx-0 py-3'>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Information;