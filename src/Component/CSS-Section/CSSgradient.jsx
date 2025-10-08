import React from "react";

const CssGradientDemo = () => {
  return (
    <div className="p-8 min-h-screen space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        CSS Gradients
      </h1>

      <p>
        CSS Gradients allow you to create smooth transitions between two or more colors. 
        They can be used as backgrounds without using images.
      </p>
      <p>CSS allows designers to blend colors in three distinct ways.</p>
      <ul className="list-[square] list-inside">
        <li> <strong>Linear Gradients</strong> - The color transition goes down, up, left, right, or diagonally</li>
        <li> <strong>Radial Gradients</strong> - The color transition goes out from a central point</li>
        <li> <strong>Conic Gradients</strong> - The color transition is rotated around a center point</li>
      </ul>
      <p>In CSS, gradients are defined using functions within the <span className="text-red-400 bg-gray-50 px-2 rounded-sm">background-image</span> property.</p>

      {/* Example 1: Linear Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[linear-gradient(to_right,blue,red)] text-white font-bold p-4">
        Linear Gradient Background (Left to Right)
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
        {`background: linear-gradient(to right, blue, red);`}
        </code>
      </div>

      <h1 className="text-2xl">CSS linear-gradient() Function</h1>
      <p>The linear-gradient() function in CSS is used to create <span className="text-red-400 bg-gray-50 px-2 rounded-sm">linear gradients</span>.</p>
      <p>A linear gradient creates a smooth color transition along a straight line, which can be oriented vertically, horizontally, or diagonally.</p>
      <p>To create a linear gradient, at least two color stops are necessary. These stops determine the colors involved in the transition. You may also define the gradient’s direction or angle, as well as its starting position.</p>

      <h1 className="text-2xl">Syntax</h1>
      <p className="border pl-5 py-2">background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</p>
      <h1 className="text-2xl">Direction - Top to Bottom (this is default)</h1>
      <p>This linear gradient example flows vertically, starting with red at the top and blending into yellow at the bottom.</p>


      {/* Example 2: Radial Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[linear-gradient(to_top,yellow,red)] text-white font-bold p-4">
        Radial Gradient (Top-Bottom)
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
           {`background: radial-gradient(to_bottom, yellow, red);`}
        </code>
      </div>
      <h1 className="text-2xl">Direction - Bottom to Top</h1>
      <p>The following code illustrates a bottom-to-top linear gradient, with red at the base blending into yellow at the top.</p>

      {/* Example 3: Conic Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[linear-gradient(to_top,blue,lightgreen,orange)] text-white font-bold p-4">
        Bottom to Top with multiple colour
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
         {`background: conic-gradient(to top, blue, lightgreen, orange);`}
        </code>
      </div>
       <h1 className="text-2xl">CSS conic-gradient() Function</h1>
       <p>The <span className="bg-gray-50 px-2 rounded-md text-red-400">conic-gradient()</span>  function in CSS is used to create gradients that rotate around a central point.</p>
       <p>radial gradients, conic gradients transition colors based on angle, giving a circular or sweeping effect. This makes them particularly useful for data visualizations, decorative UI backgrounds, or dynamic loading animations where a circular progression is visually effective.</p>

       {/* Example 4: Conic Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[conic-gradient(from_0deg,#3b82f6,#10b981,_#f43f5e)] text-white font-bold p-4">
        Conic Gradient
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
         {`background: conic-gradient(from 0deg, #3b82f6, #10b981, #f43f5e);`}
        </code>
      </div>

      <h1 className="text-2xl">Linear Gradient - Transparency</h1>
      <p>CSS gradients support transparency, allowing developers to create smooth fading effects.</p>
      <p>Transparency in CSS gradients is achieved by using the rgba() function for color stops. The fourth parameter, ranging from 0 to 1, determines the color’s opacity—0 being fully transparent and 1 being fully opaque.</p>
      <p>The example below demonstrates a linear gradient that flows horizontally from left to right, beginning with full transparency and transitioning into solid red.</p>

      {/* Example 4: Conic Gradient */}
      <div className="h-40 w-full rounded-lg flex flex-col items-center justify-center bg-[linear-gradient(to_right,_rgba(255,0,0,0),_rgba(255,0,0,1))] text-white font-bold p-4">
        linear-gradient(Transparent)
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
         {`background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));`}
        </code>
      </div>

      <h1 className="text-2xl">CSS repeating-linear-gradient() Function</h1>
      <p>The <span className="text-red-400 bg-gray-50 px-2 rounded-md">repeating-linear-gradient()</span> function in CSS allows you to create repeating linear gradient patterns.</p>


      {/* Example 5: Conic Gradient */}
       <div className="h-40 w-full rounded-lg flex flex-col items-center justify-around bg-[repeating-linear-gradient(to_top,blue_0,_lightgreen_10%,_orange_20%)] text-white font-bold p-4">
        linear-gradient(Repeating)
        <code className="mt-2 bg-gray-900 text-white text-sm px-2 py-1 rounded">
         {`background: conic-gradient(to top, blue, lightgreen, orange);`}
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