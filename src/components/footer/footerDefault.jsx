import React from 'react'
import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterDefault = () => {

  const getData = ()=> {
    const date = new Date()
    
    return date.getFullYear()
  }

  return (
    <div className='flex flex-col justify-center items-center gap-y-8'>

      <h1 className='text-[22px] md:text-[30px] font-[600]'>Subscribe to my channel</h1>
      <p className='w-[full] md:w-[50%] text-center'>Get expert advice for your journey to university delivered to your inbox each month. It's short, and worthwhile – we promise!</p>
      <input type="email"  className='h-[40px] md:h-[50px] w-full max-w-[500px] md:max-w-[600px] px-2' placeholder='Email address'/>
      <div className='flex justify-center items-center gap-x-2'>
        <input type="checkbox"  className=' bg-transparent border border-white'/>
        <span>I Agree To Buy You Lavash For You Everyday </span>
      </div>
      <button className='w-200px h-[40px] border-[1px] transition-all border-solid border-[#E5B300] text-[white]  bg-[#E5B300] hover:text-[#E5B300] hover:bg-[white]'>SUBSCRIBE NOW</button>

      <span className='w-full bg-[#6c6b69] h-[2px] my-4'></span>

      <div className='flex gap-x-8 text-[40px]'>
        <span className='cursor-pointer hover:text-[#999894]'><FaFacebook/></span>
        <span className='cursor-pointer hover:text-[#999894]'><LuInstagram/></span>
        <span className='cursor-pointer hover:text-[#999894]'><FaSquareXTwitter/></span>
        <span className='cursor-pointer hover:text-[#999894]'><FaLinkedin/></span>
      </div>


      <div className='flex flex-wrap justify-center gap-x-10 gap-y-5 w-full my-5'>
        <a href='#' className='hover:text-[#999894]'>Universities</a>
        <a href='#' className='hover:text-[#999894]'>Courses</a>
        <a href='#' className='hover:text-[#999894]'>Community</a>
        <a href='#' className='hover:text-[#999894]'>News</a>
        <a href='#' className='hover:text-[#999894]'>About</a>
      </div>

      <div>Created By - Mr | Abduraxmatov {getData()}</div>
    </div>
  )
}

export default FooterDefault