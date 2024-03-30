"use client"
import { useEffect, useState } from 'react';
import ContrastColorPicker from '@/components/ContrastColorPicker';
import Preview from '@/components/Preview';
import { useColor } from '@/provider/colorContext';

const ContrastChecker = () => {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState('#000000');
  const [contrastRatio, setContrastRatio] = useState(0);
  const [rating, setRating] = useState('');
  const{baseColor,setBaseColor} = useColor()
  // Function to calculate contrast ratio
  
  const calculateContrastRatio = (color1, color2) => {
    const getLuminance = (color) => {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
      return luminance <= 0.03928 ? luminance / 12.92 : Math.pow((luminance + 0.055) / 1.055, 2.4);
    };

    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);

    const ratio = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    return ratio.toFixed(2);
  };

  // Function to update contrast ratio and rating
  const updateContrast = () => {
    const ratio = calculateContrastRatio(baseColor, bgColor);
    setContrastRatio(ratio);
    if (ratio >= 7) {
      setRating('AAA');
    } else if (ratio >= 4.5) {
      setRating('AA');
    } else if (ratio >= 3) {
      setRating('AA Large');
    } else {
      setRating('Fail');
    }
  };

  useEffect(() => {
    updateContrast();
  }, [textColor,bgColor]);

  // Update contrast ratio and rating on color change
  const handleColorChange = () => {
    updateContrast();
  };

  // Update contrast ratio and rating on text change
  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  //   updateContrast();
  // };

  return (
    <div className="mt-20 p-16 flex flex-col items-center ">
      <h1 className='text-4xl font-bold text-center mb-6'>Contrast Checker</h1>
      <p className='text-center text-xl mt-2 mb-4'>Measure the brilliance, find the balance – Contrast Checker at your service!</p>
      <div className="flex space-x-32">
        <div className="flex flex-row items-center text-center mb-4">
          <label htmlFor="textColor" className='text-xl '>Text Color:</label>
          <input type="text" value={baseColor} className='w-24 text-xl  text-center ' onChange={(e) => setBaseColor(e.target.value)}  />
          <ContrastColorPicker value={baseColor} onChange={(e) => { setBaseColor(e.target.value); handleColorChange(); }} />
        </div>
        <div className="flex flex-row items-center text-center mb-4 ">
          <label htmlFor="bgColor" className='text-xl '>Background Color:</label>
          <input type="text" value={bgColor}  className='flex flex-row items-center text-center ' onChange={(e) => setBgColor(e.target.value)} />
          <ContrastColorPicker value={bgColor} onChange={(e) => { setBgColor(e.target.value); handleColorChange(); }} />
        </div>
      </div>
      <div className='flex  flex-row gap-8 items-center mt-10 '>
      <div className="text-preview">
        <Preview text={text} textColor={baseColor} bgColor={bgColor} />
      </div>
      <div className="rating">
        <div className='text-xl font-mono font-bold'>Contrast Ratio: <span className='text-green-800'> {contrastRatio}</span></div>
        <div className='text-xl font-mono font-bold'>Rating: {rating}</div>
      </div>
      </div>
    </div>
  );
};

export default ContrastChecker;


