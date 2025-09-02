import React from "react";

const CssCounter = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CSS Counters</h1>
      <p className="mb-4">
        CSS Counters are used to automatically number elements with CSS only.
      </p>

      {/* Example Counter with Tailwind */}
      <div className="space-y-3 bg-gray-50 p-4 rounded-lg shadow relative counter-reset-section">
        <h2 className="text-lg font-semibold before:content-[counter(section)'. '] before:font-bold before:text-blue-600 counter-increment-section">
          Introduction
        </h2>
        <h2 className="text-lg font-semibold before:content-[counter(section)'. '] before:font-bold before:text-blue-600 counter-increment-section">
          CSS Basics
        </h2>
        <h2 className="text-lg font-semibold before:content-[counter(section)'. '] before:font-bold before:text-blue-600 counter-increment-section">
          Selectors
        </h2>
      </div>
    </div>
  );
};

export default CssCounter;