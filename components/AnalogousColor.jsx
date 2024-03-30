"use client"
import { useColor } from '@/provider/colorContext'
import React, { useContext } from 'react'



const AnalogousColors = () => {
    
    const { analogousColors } =useColor()
    const copyToClipboard = (color, type) => {
      if (typeof window !== 'undefined') {
        navigator.clipboard.writeText(color);
        const message = type === 'Analogous' ? 'Analogous Color is copied successfully' : 'Color Shade is copied successfully';
        swal({
          title: 'Success',
          text: message,
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      }
    };
  

    return (
        <div className='mt-10'>
            <h2 className='font-semibold text-2xl'>Analogous Colors:</h2>
            <div className="flex flex-row mt-4">
                {analogousColors?.map((color, index) => (
                    <div key={index} className='hover cursor-pointer text-white text-center pt-9' style={{ backgroundColor: color, width: '100px', minHeight: '100px', color: 'white' }} onClick={() => copyToClipboard(color,'Analogous')}>
                        {color}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnalogousColors
