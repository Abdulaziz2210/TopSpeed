import React from 'react'
import Header from '../components/header/header'
import Universitet from '../components/university/university'
import Information from '../components/information/information'
import Faq from '../components/faq/faq'

import { Universities, Courses } from '../data/mockData'
import Community from '../components/community/community'

console.log(Universities);




const Page = () => {
  return (
    <div>
      <Header/>
      <Universitet/>
      <Community/>
      <Information data={Universities}/>
      <Information data={Courses}/>
      <Faq/>
    </div>
  )
}

export default Page