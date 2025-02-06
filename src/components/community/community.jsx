import React from 'react'

import communityImg from  "../../assets/sunset.png"
import { CardV2 } from '../ui/card'
import { CommunityData } from '../../data/mockData'

const Community = () => {


    const bgImage = {
        backgroundImage:`url(${communityImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"

    }

  return (
    <div className='w-[full] mx-auto md:h-[400px] p-4 flex justify-center items-center px-4' style={bgImage}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {CommunityData.map(item=> <CardV2 key={item.id} data={item}/>)}
        </div>
    </div>
  )
}

export default Community