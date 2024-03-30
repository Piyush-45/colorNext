import AnalogousColors from '@/components/AnalogousColor'
import Complimentary from '@/components/ComplimentaryColor'
import React from 'react'

const CompAnalog = () => {
  return (
    <div className='flex flex-row gap-16 p-16 w-full items-center justify-center'>
      <Complimentary/>
      <AnalogousColors/>
    </div>
  )
}

export default CompAnalog
