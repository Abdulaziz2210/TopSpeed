import React from 'react'
import Buttons from '../ui/buttons'
import { FaCircleArrowRight } from "react-icons/fa6"


const NavbarDefault = () => {
  return (
    <div className='hidden lg:flex w-full h-[80px] justify-between items-center'>
      <div className='text-[20px] font-[600]'><a href="/">TopSpeed シ︎</a></div>


      <div className='flex gap-x-5'>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > Universities </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > Courses </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > Community </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > News </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > About </a>
      </div>





      <div className='flex gap-x-2'>
              <Buttons text={'Login'}/>
              <Buttons text={'Sign Up'} v1={true}/>
      </div>


    </div>
  )
}

export default NavbarDefault



{/* <Buttons text={'Login'} v2={true}/>
<Buttons text={'Sign Up'} v1={true}/>
<Buttons text={'See All'} v2={true} icon={<FaCircleArrowRight />}/> */}