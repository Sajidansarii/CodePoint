import React from "react";

const CssTooltipsAnimation = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Tooltips with Animation
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        Normal tooltip sirf hover par show hota hai, lekin CSS ke{" "}
        <strong>transitions</strong> aur <strong>@keyframes</strong> use karke
        hum tooltips ko aur attractive bana sakte hain. Example ke liye:{" "}
        <em>fade-in, slide-in, bounce</em> effects.
      </p>

      {/* Example 1: Fade In Tooltip */}
      <div className="bg-white p-6 rounded shadow space-y-4 text-center">
        <h2 className="text-xl font-semibold">1. Fade-in Tooltip</h2>
        <pre className="bg-gray-20 p-4 rounded text-sm overflow-x-auto text-left">
{`.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltip-text {
  visibility: hidden;
  opacity: 0;
  background: black;
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-in-out; /* smooth animation */
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}`}
        </pre>

        {/* Live Demo */}
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              w-36 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 transition-opacity duration-500">
              Fade-in Tooltip
            </span>
          </div>
        </div>
      </div>

      {/* Example 2: Slide-in Tooltip */}
      <div className="bg-white p-6 rounded shadow space-y-4 text-center">
        <h2 className="text-xl font-semibold">2. Slide-in Tooltip</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`.tooltip .tooltip-text {
  visibility: hidden;
  opacity: 0;
  transform: translate(-50%, 10px); /* start position */
  transition: all 0.4s ease;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0); /* slide into place */
}`}
        </pre>

        {/* Live Demo */}
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 
              w-36 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-500">
              Slide-in Tooltip
            </span>
          </div>
        </div>
      </div>

      {/* Example 3: Bounce Animation Tooltip */}
      <div className="bg-white p-6 rounded shadow space-y-4 text-center">
        <h2 className="text-xl font-semibold">3. Bounce Tooltip</h2>
        <pre className="bg-gray-200 p-4 rounded text-sm overflow-x-auto text-left">
{`@keyframes bounceIn {
  0%   { transform: translateY(10px); opacity: 0; }
  50%  { transform: translateY(-5px); opacity: 1; }
  100% { transform: translateY(0); }
}

.tooltip .tooltip-text {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip:hover .tooltip-text {
  visibility: visible;
  animation: bounceIn 0.5s ease forwards;
}`}
        </pre>

        {/* Live Demo */}
        <div className="flex justify-center">
          <div className="relative group inline-block">
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Hover me
            </button>
            <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 
              w-36 bg-black text-white text-sm rounded px-2 py-1 opacity-0 
              group-hover:opacity-100 animate-[bounceIn_0.5s_ease_forwards]">
              Bounce Tooltip
            </span>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-left">
          <li>
            <strong>Fade-in Tooltip</strong> → <code>opacity + transition</code>{" "}
            se smooth visibility change.
          </li>
          <li>
            <strong>Slide-in Tooltip</strong> → start position me{" "}
            <code>translateY</code> use hota hai aur hover par wapas jata hai.
          </li>
          <li>
            <strong>Bounce Tooltip</strong> → <code>@keyframes</code> se custom
            animation banaya gaya jo pehle slide hota hai fir bounce effect deta
            hai.
          </li>
          <li>
            Sabhi tooltips me <code>position: relative</code> parent aur{" "}
            <code>absolute</code> tooltip text ke liye use hota hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssTooltipsAnimation;