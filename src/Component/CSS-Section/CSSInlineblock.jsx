import React from "react";

const CssInlineBlock = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-4 text-blue-500">CSS inline-block</h1>
      <p className="mb-4">
        The <code>inline-block</code> value of the <code>display</code> property 
        allows an element to behave like an inline element while still respecting 
        block-level properties such as <code>width</code>, <code>height</code>, 
        <code>margin</code>, and <code>padding</code>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Points</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Placed next to each other like <code>inline</code> elements.</li>
        <li>Can have width and height set, unlike <code>inline</code>.</li>
        <li>Useful for creating navigation menus, buttons, or layouts.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>
      <p className="mb-4">In this example, three boxes are displayed using <code>inline-block</code>:</p>

      <div className="border p-4">
        <div className="inline-block w-24 h-16 bg-blue-500 text-white  items-center justify-center m-1">
          Box 1
        </div>
        <div className="inline-block w-24 h-16 bg-green-500 text-white  items-center justify-center m-1">
          Box 2
        </div>
        <div className="inline-block w-24 h-16 bg-red-500 text-white  items-center justify-center m-1">
          Box 3
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>
      <pre className="bg-gray-200  p-4 rounded-lg overflow-x-auto">
{`selector {
  display: inline-block;
}`}
      </pre>
    </div>
  );
};

export default CssInlineBlock;