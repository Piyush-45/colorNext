"use client"
import { useColor } from '@/provider/colorContext'
import { complement } from 'polished'
import { useContext } from 'react'


const Complimentary = () => {
    const { complementaryColor} = useColor()

    const copyToClipboard = (color, type) => {
      if (typeof window !== 'undefined') {
        navigator.clipboard.writeText(color);
        const message = type === 'Complementary' ? 'Complementary Color is copied successfully' : 'Color Shade is copied successfully';
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
            <h2 className='font-semibold text-2xl'>Complementary Color:</h2>
            <div className="flex flex-row mt-4">
                <div className='hover cursor-pointer text-white text-center pt-9' style={{ backgroundColor: complementaryColor, width: '100px', minHeight: '100px', color: 'white' }} onClick={() => copyToClipboard(complementaryColor, 'Complementary')}>
                    {complementaryColor}
                </div>
            </div>
        </div>
    )
}

export default Complimentary
