import React from "react";

const RadialGradientDemo = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Radial Gradient with Animation
      </h1>

      <p className="text-gray-700">
        Radial gradients create a *circular or elliptical color transition* that
        radiates from a central point. Hover to see animated effects!
      </p>

      {/* Example 1: Simple Radial Gradient with hover scale */}
      <div className="h-40 w-full rounded-lg bg-[radial-gradient(circle,#facc15,#f97316)] flex items-center justify-center text-white font-bold transform transition-transform duration-500 hover:scale-105">
        Simple Radial Gradient
      </div>

      {/* Example 2: Multi-color Radial Gradient with hover brightness */}
      <div className="h-40 w-full rounded-lg bg-[radial-gradient(circle,#3b82f6,#10b981,_#f43f5e)] flex items-center justify-center text-white font-bold transform transition duration-500 hover:brightness-125">
        Multi-color Radial Gradient
      </div>

      {/* Example 3: Radial Gradient with transparency + pulse animation */}
      <div className="h-40 w-full rounded-lg bg-[radial-gradient(circle,_rgba(59,130,246,0.8),_rgba(59,130,246,0))] flex items-center justify-center text-gray-800 font-semibold animate-pulse">
        Gradient with Transparency
      </div>

      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use 2–3 colors for smooth blending.</li>
          <li>Combine with transparency to overlay on images.</li>
          <li>Add hover effects like <code>scale</code> or <code>brightness</code> for interactivity.</li>
          <li>Use <code>animate-pulse</code> or <code>animate-[custom]</code> for subtle gradient motion.</li>
        </ul>
      </p>
    </div>
  );
};

export default RadialGradientDemo;