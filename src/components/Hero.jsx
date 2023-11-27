import React from 'react'


const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full max-h-[500px] flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-500'>High Quality Yet</h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-500'>Affordable Product</h1>
            </div>
            <img className='w-full max-h-[700px] object-cover' src='./assets/loptop.jpeg' alt="/" />
        </div>
    </div>
  )
}

export default Hero;