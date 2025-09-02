import React from "react";

const CSSBorder = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">CSS Borders</h1>

      <p className="text-gray-700 mb-4">
        The <strong>CSS border</strong> properties allow you to define the style, 
        width, and color of an element's border. Borders help to visually separate 
        elements on a page.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Common Border Properties
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <code className="bg-gray-200 px-1 rounded">border-style</code> – sets
          the type of border (solid, dotted, dashed, etc.).
        </li>
        <li>
          <code className="bg-gray-200 px-1 rounded">border-width</code> – sets
          the thickness of the border.
        </li>
        <li>
          <code className="bg-gray-200 px-1 rounded">border-color</code> – sets
          the border color.
        </li>
        <li>
          <code className="bg-gray-200 px-1 rounded">border</code> – shorthand
          to set width, style, and color in one line.
        </li>
        <li>
          <code className="bg-gray-200 px-1 rounded">border-radius</code> – used
          to make rounded corners.
        </li>
      </ul>

      {/* Example 1: Border Styles */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 1: Border Styles
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`p {
  border-style: solid;
}
p {
  border-style: dotted;
}
p {
  border-style: dashed;
}`}
        </pre>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="border border-solid border-gray-600 p-4 text-center">
          Solid Border
        </div>
        <div className="border border-dotted border-gray-600 p-4 text-center">
          Dotted Border
        </div>
        <div className="border border-dashed border-gray-600 p-4 text-center">
          Dashed Border
        </div>
      </div>

      {/* Example 2: Border Width & Color */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 2: Border Width & Color
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`div {
  border: 5px solid red;
}
div {
  border: 10px solid blue;
}`}
        </pre>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="border-4 border-red-500 p-4 text-center">
          4px Red Border
        </div>
        <div className="border-8 border-blue-500 p-4 text-center">
          8px Blue Border
        </div>
      </div>

      {/* Example 3: Rounded Borders */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 3: Rounded Borders
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`div {
  border: 2px solid green;
  border-radius: 10px;
}
div {
  border: 2px solid purple;
  border-radius: 50%;
}`}
        </pre>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="border-2 border-green-600 rounded-lg p-4 text-center">
          Rounded Corners
        </div>
        <div className="w-24 h-24 border-2 border-purple-600 rounded-full flex items-center justify-center">
          Circle
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Always set a <code>border-style</code>, otherwise the border will not
          be visible.
        </li>
        <li>
          Use <code>border</code> shorthand to save time (e.g.,{" "}
          <code>border: 2px solid black;</code>).
        </li>
        <li>
          <code>border-radius</code> helps in creating rounded corners and even
          circles.
        </li>
      </ul>
    </div>
  );
};

export default CSSBorder;
