import React from "react";

const MathFunctions = () => {
  return (
    <div className="p-6 space-y-6 font-sans">
      <h1 className="text-2xl font-bold">CSS Math Functions</h1>

      <div className="bg-blue-200 p-4 w-[calc(100%-100px)]">
        <p><b>calc()</b>: Width = 100% - 100px</p>
      </div>

      <div className="bg-green-200 p-4 text-[min(5vw,20px)]">
        <p><b>min()</b>: Font size = smaller of 5vw or 20px</p>
      </div>

      <div className="bg-yellow-200 p-4 w-[max(300px,50%)]">
        <p><b>max()</b>: Width = larger of 300px or 50%</p>
      </div>

      <div className="bg-pink-200 p-4 text-[clamp(16px,2vw,32px)]">
        <p><b>clamp()</b>: Font size scales between 16px → 32px</p>
      </div>
    </div>
  );
};

export default MathFunctions;