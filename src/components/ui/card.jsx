import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/university_1.png"

const Card = ({image,title,link}) => {
  return (
    <div className='flex flex-col gap-y-2'>
        <img src={image} className='w-full' alt="university image" title='university image' />
        <h2 className='text-[18px] md:text-[20px] lg:text-[24px] font-[500]'>{title}</h2>
        <button className='flex items-center gap-x-2 uppercase text-[14px] text-[#E5B300]'>see university <span><FaArrowRight/></span></button>
    </div>
  )
}


const CardV2 = ({data}) =>{
  return(
    <div className='flex justify-center items-start gap-x-4 bg-[white] px-2 py-8'>
      <div><img src={data?.image} alt="community image" /></div>
      <div>
        <h2 className='text-[18px] md:text-[20px] lg:text-[22px] font-[500]'>{data?.title}</h2>
        <p className='my-1'>{data.description}</p>
        <button  className='flex items-center gap-x-2 uppercase text-[14px] text-[#E5B300]'>see university <span><FaArrowRight/></span></button>
      </div>
    </div>
  )
}

export  {Card,CardV2}