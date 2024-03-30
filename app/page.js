import Home from '@/pages/Home'

import React from 'react'
import TintandShade from './tintandshade/page'
import Contrast from './contrastchecker/page'
import CompAnalog from '@/pages/CompAnalog'


const page = () => {
  return (
    // <div>
    <div className='p-16 '>
      <Home />
      <TintandShade/>
      <CompAnalog/>
      <Contrast/>
      
    </div>

  )
}

export default page
