import React from "react";

const CssGradientDemo = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Gradients
      </h1>

      <p className="text-gray-700">
        CSS Gradients allow you to create *smooth transitions between two or more colors*. 
        They can be used as *backgrounds* without using images.
      </p>

      {/* Example 1: Linear Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[linear-gradient(to_right,#4f46e5,#3b82f6)] text-white font-bold p-4">
        Linear Gradient (Left to Right)
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
        {`background: linear-gradient(to right, #4f46e5, #3b82f6);`}
        </code>
      </div>

      {/* Example 2: Radial Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[radial-gradient(circle,#facc15,#f97316)] text-white font-bold p-4">
        Radial Gradient (Circle)
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
           {`background: radial-gradient(circle, #facc15, #f97316);`}
        </code>
      </div>

      {/* Example 3: Conic Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[conic-gradient(from_0deg,#3b82f6,#10b981,_#f43f5e)] text-white font-bold p-4">
        Conic Gradient
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
         {`background: conic-gradient(from 0deg, #3b82f6, #10b981, #f43f5e);`}
        </code>
      </div>

      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use <code>linear-gradient</code> for directional color blending.</li>
          <li>Use <code>radial-gradient</code> for circular or elliptical transitions.</li>
          <li>Use <code>conic-gradient</code> for color rotations around a center point.</li>
          <li>Tailwind supports gradients via <code>bg-gradient-to-r</code>, <code>from-</code>, <code>via-</code>, and <code>to-*</code> classes.</li>
        </ul>
      </p>
    </div>
  );
};

export default CssGradientDemo;