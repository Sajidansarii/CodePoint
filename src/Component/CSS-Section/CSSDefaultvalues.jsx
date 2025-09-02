import React from "react";

const CssDefaultValues = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">📘 CSS Default Values</h2>

      {/* Description */}
      <p className="text-gray-700 mb-6">
        Har CSS property ka ek <b>default (initial)</b> value hota hai. Agar aap 
        koi property set nahi karte, to browser uska default value apply karta hai. 
        Yeh ensure karta hai ki bina CSS ke bhi page readable ho.
      </p>

      {/* Example Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">💻 Example:</h3>
        <pre className="bg-black text-green-400 p-3 rounded-lg text-sm overflow-x-auto">
{`/* Example: Default vs Custom Styles */
p {
  /* By default: font-size = 16px, margin = 1em 0 */
}

p.custom {
  font-size: 20px;
  margin: 0;
  color: blue;
}`}
        </pre>
      </div>

      {/* Live Demo */}
      <div className="bg-gray-100 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">🎨 Live Demo:</h3>
        <p className="mb-2">
          This is a normal paragraph. (Default <code>font-size: 16px</code>, 
          <code>margin-top/bottom: 1em</code>, <code>color: black</code>)
        </p>
        <p className="custom text-blue-600 text-lg m-0">
          This paragraph has custom styles applied.
        </p>
      </div>

      {/* Default Property Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-2">📋 Common Default Values:</h3>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Property</th>
              <th className="border p-2 text-left">Default Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">color</td>
              <td className="border p-2">black</td>
            </tr>
            <tr>
              <td className="border p-2">font-size</td>
              <td className="border p-2">medium (16px approx)</td>
            </tr>
            <tr>
              <td className="border p-2">margin</td>
              <td className="border p-2">0 (for most elements)</td>
            </tr>
            <tr>
              <td className="border p-2">display</td>
              <td className="border p-2">inline (span), block (div)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Explanation */}
      <p className="mt-6 text-gray-700">
        👉 CSS ke default values ko samajhna zaroori hai kyunki yeh 
        aapko batata hai ki ek element bina kisi custom style ke kaise 
        behave karega.
      </p>
    </div>
  );
};

export default CssDefaultValues;