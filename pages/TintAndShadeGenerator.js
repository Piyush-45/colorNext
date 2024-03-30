"use client"
import ColorPicker from '@/components/ColorPicker'
import { ColorContext } from '@/provider/colorContext'
import React, { useContext } from 'react'
import swal from 'sweetalert'

const TintAndShadeGenerator = () => {
  const { baseColor, tints, shades, handleColorChange, analogousColors, complementaryColor, setBaseColor, } = useContext(ColorContext)

  const copyToClipboard = (color, type) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(color);
      const message = type === 'tint' ? 'Color Tint is copied successfully' : 'Color Shade is copied successfully';
      swal({
        title: 'Success',
        text: message,
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    }
  };

  return (
    <div className=' flex flex-col items-center justify-center '>
      <h1 className='text-4xl font-bold text-center'>Tint & ShadeSmith</h1>
      <p className='text-center mt-4 text-2xl'>Blend Shades, Tints, and Magic</p>
      {/* Color Picker */}
      <ColorPicker selectedColor={baseColor} handleColorChange={handleColorChange} />
      <div className={`bg-[${baseColor}] h-28 w-full`} ></div>


      {/* Display Tints */}
      <div className='mt-8'>
        <h2 className='font-semibold text-2xl'>Tints:</h2>
        <p className='text-xl font-semibold'>Tint refers to shades of a color as its mixed with white.</p>
        <div className="flex flex-row mt-4 gap-1/10">
          {tints.map((color, index) => (
            (index + 1) % 2 !== 0 ? (
              <div key={index} className='hover cursor-pointer flex flex-col text-neutral-950 text-center pt-9' style={{ backgroundColor: color, width: '100px', minHeight: '100px' }}>
                <div onClick={() => copyToClipboard(color, 'tint')}>{color}</div>
                {/* <p className='text-xl text-black z-10'>{counting[index]}</p> */}
              </div>
            ) : null
          ))}
        </div>
      </div>
      {/* Display Shades */}
      <div className='mt-8'>
        <h2 className='font-semibold text-2xl'>Shades:</h2>
        <p className='text-xl font-semibold'>Shades of the color as the color is mixed with black.</p>
        <div className="flex flex-row mt-4 ">
          {shades.map((color, index) => (
            (index + 1) % 2 !== 0 ? (<div key={index} className=' hover cursor-pointer text-white text-center pt-9' style={{ backgroundColor: color, width: '100px', minHeight: '100px', color: 'white ' }} onClick={() => copyToClipboard(color, 'shade')}>
              {color}
            </div>) : null
          ))}
        </div>
      </div>
      <p className='font-medium text-xl mt-4'>Simply click any of the color shades to have the hex value copied to your clipboard.</p>


    </div>
  )
}

export default TintAndShadeGenerator
