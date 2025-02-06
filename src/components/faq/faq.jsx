import React from 'react'
import Buttons from '../ui/buttons'
import faqImg from "../../assets/sunset.png"
import { MdEmail } from "react-icons/md";

const Faq = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 lg:gap-16 my-10'>
        <div className='w-full sm:w-[50%]'><img className='w-full' src={faqImg} alt="..." /></div>
        <div className='w-full sm:w-[50%] flex flex-col gap-y-4'>
            <h1 className='text-[18px] md:text-[20px] lg:text-[24px] font-[500]'>We're here to help</h1>
            <p>Read through our FAQs and, if you can't find what you're looking for, our experts will be happy to answer your questions.</p>
            <div className='flex gap-x-4'>
                <Buttons v1={true} text={'READ FAQS'}/>
                <button className='flex justify-center items-center text-[#e5b300] hover:text-[#ab9b61] gap-x-2'>
                    <span><MdEmail /></span>
                    <span>ASK A QUESTION</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Faq