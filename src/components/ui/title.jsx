import React from 'react'

const Title = ({title}) => {
  return (
    <div className='flex flex-col gap-y-5 justify-center items-center my-4'>
        <h1 className='text-[22px] md:text-[32px] font-[600] text-[#36384E]'>{title ? title : 'write a title'}</h1>
        <span className='w-full max-w-[133px] h-[8px] md:h-[12px] rounded-[18px] bg-[#E5B300]'></span>
    </div>
  )
}

export default Title