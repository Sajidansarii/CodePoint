import React from "react";

const CSSFloat = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">CSS Float</h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        The <code className="bg-gray-200 px-1 rounded">float</code> property in
        CSS is used for positioning and formatting content. It specifies whether
        an element should float to the left, right, or not at all. Floating is
        often used to wrap text around images or create layouts.
      </p>

      {/* Syntax */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-6">
        <pre>
{`selector {
  float: none | left | right | inline-start | inline-end;
}`}
        </pre>
      </div>

      {/* Values */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Float Values</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li><code>none</code> – Default value, no floating.</li>
        <li><code>left</code> – Floats the element to the left.</li>
        <li><code>right</code> – Floats the element to the right.</li>
        <li><code>inline-start</code> – Floats element to the start (depends on writing mode).</li>
        <li><code>inline-end</code> – Floats element to the end (depends on writing mode).</li>
      </ul>

      {/* Example 1 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example: Float an Image</h2>
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Example"
          className="float-left mr-4 mb-2 border border-gray-300"
        />
        <p className="text-gray-700">
          This paragraph wraps around the image using the{" "}
          <code>float: left;</code> property. Floating is useful for placing
          images beside text, creating magazine-style layouts, or aligning
          small elements without flexbox or grid.
        </p>
      </div>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-6">
        <pre>
{`img {
  float: left;
  margin-right: 15px;
}`}
        </pre>
      </div>

      {/* Example 2 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example: Float Boxes</h2>
      
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-6">
        <pre>
{`.box {
  float: left;
  width: 120px;
  height: 80px;
  margin-right: 10px;
}`}
        </pre>
      </div>

      <div className="clearfix mb-6">
        <div className="float-left w-32 h-20 bg-blue-500 text-white flex items-center justify-center mr-2">
          Box 1
        </div>
        <div className="float-left w-32 h-20 bg-green-500 text-white flex items-center justify-center mr-2">
          Box 2
        </div>
        <div className="float-left w-32 h-20 bg-red-500 text-white flex items-center justify-center">
          Box 3
        </div>
      </div>


      {/* Clearing Floats */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-40">Clearing Floats</h2>
      <p className="text-gray-700 mb-2">
        When elements are floated, they are removed from the normal document
        flow, which can cause parent elements to collapse. To fix this, use the{" "}
        <code>clear</code> property or a <code>.clearfix</code> hack.
      </p>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-6">
        <pre>
{`.clearfix::after {
  content: "";
  display: block;
  clear: both;
}`}
        </pre>
      </div>

      {/* Notes */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Floats are mainly used for wrapping text around images.</li>
        <li>For modern layouts, use <code>flexbox</code> or <code>grid</code> instead of floats.</li>
        <li>Always clear floats to avoid layout issues.</li>
      </ul>
    </div>
  );
};

export default CSSFloat;