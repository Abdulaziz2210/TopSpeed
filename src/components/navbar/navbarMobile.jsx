import React, { useState } from 'react'
import { HiOutlineBarsArrowUp } from "react-icons/hi2";
import { HiMiniBarsArrowDown } from "react-icons/hi2"; 
import Buttons from '../ui/buttons';

const NavbarMobile = () => {

    const [toggle,setToggle] = useState(false)


  return (
    <div className='lg:hidden block relative'> 
     <div className='flex items-center justify-between h-[60px]'> 
       <div className='text-[20px] font-[600]'><a href="/">TopSpeed シ︎</a></div>

          <div className='text-[30px] cursor-pointer' onClick={()=>setToggle(!toggle)}>
            {toggle ?  <HiMiniBarsArrowDown /> :<HiOutlineBarsArrowUp /> }
          </div>
      </div>


      <div className={`${toggle ? 'block' : 'hidden'} absolute z-[100] w-full h-[100vh] bg-[white] transition-all`}>

      <div className='flex flex-col gap-y-3'>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > Universities </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > Courses </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > Community </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > News </a>
        <a href=""  className='hover:text-[#E5B300]  transition-all' > About </a>
      </div>



      
            <div className='flex gap-x-2 mt-3'>
                    <Buttons text={'Login'}/>
                    <Buttons text={'Sign Up'} v1={true}/>
            </div> 

      
      </div>
    </div>





  )
}

export default NavbarMobile
