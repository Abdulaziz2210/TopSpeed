import React from 'react';
import header from '../../assets/topspeed.jpg';

const Header = () => {
  return (
    <div className='w-full h-[90vh] relative flex items-center justify-center'>
      <span className='w-full h-full bg-[rgba(0,0,0,0.4)] absolute z-[2] top-0 left-0'></span>
      <img className='absolute z-[1] top-0 left-0 w-full h-full ' src={header} alt="..." title='TopSpeed' />
      <div className='text-center text-[white] relative z-[3]'>
        <h1 className='capitalize text-[20px] sm:text-[60px] font-bold'>
          Find your <span className='bg-[#E5B300] text-white'>Future</span> here !!!
        </h1>
        <h2 className='text-[14px] sm:text-[30px]'>The ultimate guide to university worldwide</h2>
      </div>
    </div>
  );
}

export default Header;