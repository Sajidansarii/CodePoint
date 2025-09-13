import React from "react";

const CssZIndex = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS z-index</h1>
      <p className="mb-4">
        The <code>z-index</code> property in CSS controls the <strong>stacking order</strong> of
        elements.  
        Higher values are displayed in front of elements with lower values.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Points</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          The default value is <code>auto</code>.
        </li>
        <li>
          Elements must have a positioning value other than <code>static</code> (like{" "}
          <code>relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>) 
          for <code>z-index</code> to work.
        </li>
        <li>
          Higher <code>z-index</code> values appear above lower ones.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>
      <div className="relative w-full h-64 bg-gray-100 border flex items-center justify-center">
        {/* Box with lower z-index */}
        <div className="absolute w-40 h-40 bg-blue-400 text-white flex items-center justify-center z-10">
          z-index: 10
        </div>
        {/* Box with higher z-index */}
        <div className="absolute w-40 h-40 bg-red-500 text-white flex items-center justify-center z-20 left-10 top-10">
          z-index: 20
        </div>
        {/* Box with even higher z-index */}
        <div className="absolute w-40 h-40 bg-green-500 text-white flex items-center justify-center z-30 left-20 top-20">
          z-index: 30
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto">
        {`selector {
  position: relative; /* required */
  z-index: 2; /* stacking order */
}`}
      </pre>
    </div>
  );
};

export default CssZIndex;