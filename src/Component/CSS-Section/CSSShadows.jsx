import React from "react";

const CSSShadows = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Shadows</h1>
      <p className="text-gray-700">In CSS, shadows are used to give elements and text depth and highlight them. We mostly use the <span className="text-red-400 bg-gray-50 px-1">text-shadow</span> and <span className="text-red-400  bg-gray-50 px-1">box-shadow</span> properties for this purpose.</p>

      {/* Example 1: Text Shadow */}
      <div>
        <h2 className="text-2xl mb-4">1. Text Shadow</h2>
        <p className="mb-4"> The <span className="text-red-400 bg-gray-50 px-1">text-shadow</span> property creates a shadow behind the text. text-shadow: x-offset y-offset blur-radius color;</p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`h1 {
  text-shadow: 2px 2px 5px gray;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center">
          <h1 className="text-2xl text-shadow-lg">
            Text Shadow Example
          </h1>
        </div>
      </div>

      {/* Example 2: Box Shadow */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">2. Box Shadow</h2>
        <p className="mt-4 mb-5">
          The <span className="text-red-400 bg-gray-50 px-1">box-shadow</span> property creates a shadow around the box of an element.
          box-shadow: x-offset y-offset blur-radius color; </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`div {
  width: 150px;
  height: 100px;
  box-shadow: 5px 5px 15px gray;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center flex justify-center">
          <div
            className="w-40 h-24 bg-white flex items-center shadow-xl drop-shadow-[5px_5px_15px_rgba(155,225,250,0.5)] justify-center"
          >
            Box Shadow
          </div>
        </div>
      </div>

      {/* Example 3: Multiple Shadows */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">3. Multiple Shadows</h2>
        <p className="mt-4 mb-4">
          We can add multiple <span className="text-red-400 bg-gray-50 px-1">shadows</span> to a single element by separating them with commas <span className="text-red-400 bg-gray-50 px-1">(,)</span>.
        </p>
        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2">
{`div {
  width: 150px;
  height: 100px;
  box-shadow: 2px 2px 5px red, -2px -2px 5px blue;
}`}
        </pre>
        <div className="border p-4 bg-gray-100 text-center flex justify-center">
          <div
            className="w-40 h-24 bg-white flex items-center justify-center 
            shadow-[2px_2px_5px_red,_-2px_-2px_5px_blue]"
          >
            Multiple Shadows
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSShadows;