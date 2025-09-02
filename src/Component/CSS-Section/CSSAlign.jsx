import React from "react";

const CssAlign = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CSS Align</h1>
      <p className="mb-4">
        Alignment in CSS refers to positioning content horizontally or vertically within its container. 
        Different properties are used for aligning text, inline elements, and block elements.
      </p>

      {/* Horizontal Text Alignment */}
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Text Alignment</h2>
      <p className="mb-4">Use <code>text-align</code> to align text inside a block element.</p>
      <div className="border p-4 mb-4">
        <p className="text-left">This text is Left aligned</p>
        <p className="text-center">This text is Center aligned</p>
        <p className="text-right">This text is Right aligned</p>
      </div>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`p { text-align: left; }
p { text-align: center; }
p { text-align: right; }`}
      </pre>

      {/* Vertical Alignment */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Vertical Alignment (inline elements)</h2>
      <p className="mb-4">The <code>vertical-align</code> property aligns inline or inline-block elements relative to each other.</p>
      <div className="border p-4 mb-4">
        <span className="align-top bg-yellow-200 px-2">Top</span>
        <span className="align-middle bg-green-200 px-2">Middle</span>
        <span className="align-bottom bg-blue-200 px-2">Bottom</span>
      </div>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`span { vertical-align: top; }
span { vertical-align: middle; }
span { vertical-align: bottom; }`}
      </pre>

      {/* Flexbox Alignment */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Flexbox Alignment</h2>
      <p className="mb-4">
        Flexbox provides powerful alignment options using 
        <code> justify-content </code> (horizontal) and <code> align-items </code> (vertical).
      </p>
      <div className="border p-4 flex justify-center items-center h-32 bg-gray-100 mb-4">
        <div className="bg-purple-500 text-white px-4 py-2 rounded">Centered Box</div>
      </div>
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`.container {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center;     /* vertical */
}`}
      </pre>

      <h2 className="text-xl font-semibold mt-6 mb-2">Summary</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><code>text-align</code> → Aligns text inside block elements.</li>
        <li><code>vertical-align</code> → Aligns inline/inline-block elements.</li>
        <li><code>flexbox</code> → Best way to align items horizontally & vertically.</li>
      </ul>
    </div>
  );
};

export default CssAlign;