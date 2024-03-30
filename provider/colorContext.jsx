"use client"
import React, { createContext, useState, useEffect, useContext } from 'react';
import { tint, shade } from 'polished';
import chroma from 'chroma-js';
import toast, {Toaster} from 'react-hot-toast';


export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const [baseColor, setBaseColor] = useState('#1b3ea7');
  const [levels, setLevels] = useState(20);
  const [tints, setTints] = useState([]);
  const [shades, setShades] = useState([]);
  const [analogousColors, setAnalogousColors] = useState([]);
  const [copiedColor, setCopiedColor] = useState('');
  const [complementaryColor, setComplementaryColor] = useState('');


  useEffect(() => {
    setIsClient(true)

    // Check if the entered color is in the correct format
    const isValidColor = /^#[0-9A-F]{6}$/i.test(baseColor);


    if ( isValidColor) {
      setTints(generateTints(baseColor, levels));
      setShades(generateShades(baseColor, levels));
      setAnalogousColors(generateAnalogousColors(baseColor));
      setComplementaryColor(generateComplementaryColor(baseColor));
    }
    
  }, [baseColor, levels]);

  const generateTints = (color, levels) => {
    const tintsArray = [];
    for (let i = 1; i <= levels; i++) {
      tintsArray.push(tint((i / levels), color));

    }
    return tintsArray;
  };

  const generateShades = (color, levels) => {
    const shadesArray = [];
    for (let i = 1; i <= levels; i++) {
      shadesArray.push(shade((i / levels), color));
    }
    return shadesArray;
  };

  const generateAnalogousColors = (color) => {
    if (!color || !chroma.valid(color)) return [];
    const baseHue = chroma(color).get('hsl.h');
    const shiftAngles = [-30, -15, 15, 30]; // Adjust these angles as needed
    return shiftAngles.map(angle => chroma(color).set('hsl.h', (baseHue + angle + 360) % 360).hex());
  };

  const generateComplementaryColor = (color) => {
    if (!color || !chroma.valid(color)) return '';
    const baseHue = chroma(color).get('hsl.h');
    const complementaryHue = (baseHue + 180) % 360;
    return chroma(color).set('hsl.h', complementaryHue).hex();
  };

  const handleColorChange = (color) => {
    setBaseColor(color);
  };

  const handleInputChange = (value) => {
    setBaseColor(value);
  };

  // const notify = (tint,shade)=>toast( `${toast || shade}copied successfully`)

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(''), 2000); // Reset copied color message after 2 seconds
    // notify()
  };


  return (
    <ColorContext.Provider
      value={{ baseColor,setBaseColor, tints, shades, complementaryColor, handleColorChange, handleInputChange, analogousColors,copyToClipboard }}
    >
      {children}
    </ColorContext.Provider>
  );
};

const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export { ColorProvider, useColor };
