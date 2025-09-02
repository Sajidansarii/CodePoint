import React from "react";

const TranslateDemo = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Translate
      </h1>

      <p className="text-gray-700">
        The <strong>CSS Translate</strong> property allows you to *move an element* 
        along the X and Y axes without affecting its surrounding elements. 
        It is part of the <strong>transform</strong> property.
      </p>

      {/* Example 1: Translate X on hover */}
      <div className="h-24 w-full bg-blue-500 text-white flex items-center justify-center rounded transform transition-transform duration-500 hover:translate-x-6">
        Translate X (Right) on Hover
      </div>

      {/* Example 2: Translate Y on hover */}
      <div className="h-24 w-full bg-green-500 text-white flex items-center justify-center rounded transform transition-transform duration-500 hover:translate-y-6">
        Translate Y (Down) on Hover
      </div>

      {/* Example 3: Translate both X and Y */}
      <div className="h-24 w-full bg-purple-500 text-white flex items-center justify-center rounded transform transition-transform duration-500 hover:translate-x-4 hover:translate-y-4">
        Translate X & Y on Hover
      </div>

      <p className="text-gray-700">
        ✅ Tips:
        <ul className="list-disc list-inside mt-2">
          <li>Use <code>translate-x-{'{value}'}</code> or <code>translate-y-{'{value}'}</code> in Tailwind for axis-specific movement.</li>
          <li>Combine with <code>transition-transform</code> and <code>duration-500</code> for smooth animation.</li>
          <li>Translate does not affect other elements’ layout, unlike margins.</li>
          <li>Can be combined with <code>rotate</code>, <code>scale</code>, and other transforms.</li>
        </ul>
      </p>
    </div>
  );
};

export default TranslateDemo;