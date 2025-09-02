import React from "react";

const CSSBorderRadius = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        CSS Border Radius
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>CSS border-radius</strong> property is used to create{" "}
        <em>rounded corners</em> for elements. You can control how much corner
        rounding is applied by specifying values in <code>px</code>,{" "}
        <code>%</code>, or other CSS units.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Syntax
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`selector {
  border-radius: value;
}`}
        </pre>
      </div>

      <p className="text-gray-700 mb-4">
        - <code>border-radius: 10px;</code> → Applies a 10px radius to all
        corners. <br />
        - <code>border-radius: 50%;</code> → Makes the element perfectly round
        (used for circles).
      </p>

      {/* Example 1: Simple Rounded Corners */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 1: Rounded Corners
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`div {
  border: 2px solid blue;
  border-radius: 15px;
}`}
        </pre>
      </div>
      <div className="border-2 border-blue-500 rounded-lg p-6 text-center mb-6">
        Rounded Corners (15px)
      </div>

      {/* Example 2: Circle */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 2: Circle
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`div {
  border: 2px solid red;
  border-radius: 50%;
}`}
        </pre>
      </div>
      <div className="w-28 h-28 border-2 border-red-500 rounded-full flex items-center justify-center mb-6">
        Circle
      </div>

      {/* Example 3: Different Radius per Corner */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 3: Different Corner Radius
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`div {
  border: 2px solid green;
  border-radius: 20px 40px 60px 80px;
}`}
        </pre>
      </div>
      <div className="border-2 border-green-600 p-6 text-center mb-6 rounded-[20px_40px_60px_80px]">
        Different Radius per Corner
      </div>

      {/* Example 4: Elliptical Radius */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 4: Elliptical Radius
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`div {
  border: 2px solid purple;
  border-radius: 50px / 20px;
}`}
        </pre>
      </div>
      <div className="border-2 border-purple-600 p-6 text-center mb-6 rounded-[50px/20px]">
        Elliptical Radius
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <code>border-radius</code> works with all elements, including images,
          divs, buttons, etc.
        </li>
        <li>
          You can define 1–4 values:{" "}
          <code>border-radius: top-left top-right bottom-right bottom-left;</code>
        </li>
        <li>
          Using <code>50%</code> on a square creates a circle.
        </li>
        <li>
          Elliptical corners can be created using the syntax{" "}
          <code>border-radius: horizontal / vertical;</code>
        </li>
      </ul>
    </div>
  );
};

export default CSSBorderRadius;