"use client"
import { useColor } from '../provider/colorContext';

export default function ColorPicker() {
  const { baseColor, handleColorChange, handleInputChange } = useColor();

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(baseColor);
    // console.log("ee")
    
    // // swal("Good job!", "color copied", "success");
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-4   ">

      <div className=' p-2 flex items-center justify-center borderInput'>
        <input
          type="color"
          value={baseColor}
          onChange={(e) => handleColorChange(e.target.value)}
          className="w-10 h-10 hover:cursor-pointer" 
        />

        <input
          type="text"
          value={baseColor}
          onChange={(e) => handleInputChange(e.target.value)}
          className="border-none rounded px-2 outline-none w-24 "
          placeholder="Enter color value"
        />
        {/* Display color name based on its code */}

      </div>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
}
