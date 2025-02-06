import React from 'react'
import Buttons from '../ui/buttons'

const University = () => {
  return (
    <div className='flex flex-col items-center mt-4 py-5 gap-y-4'>
      <p className='text-center mx-auto w-full md:w-[80%]'>Explore your options and make informed decisions with our comprehensive guide to universities around the world. Discover top-ranked institutions, explore diverse programs, and connect with like-minded individuals to build your academic future. With easy-to-use search tools, in-depth profiles, and trusted ratings and reviews, we provide everything you need to make the right choice for your academic journey. Start your search today and find your perfect fit!</p>

      <div className='w-full max-w-[150px] mt-3'>
      <Buttons text={'Get Started'} v1={true}/>
      </div>
    </div>
  )
}

export default University
