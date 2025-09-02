import React from "react";

const CSSBorderSpacing = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        CSS Border Spacing
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>CSS border-spacing</strong> property is used to set the
        space <em>between cells</em> in a table when{" "}
        <code>border-collapse: separate</code> is applied.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`table {
  border-spacing: length | length length;
}`}
        </pre>
      </div>

      <p className="text-gray-700 mb-4">
        - If one value is given → applies to both horizontal and vertical
        spacing. <br />
        - If two values are given → first sets <strong>horizontal</strong>{" "}
        spacing, second sets <strong>vertical</strong> spacing.
      </p>

      {/* Example 1 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 1: Equal Spacing
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`table {
  border: 2px solid black;
  border-collapse: separate;
  border-spacing: 20px;
}`}
        </pre>
      </div>
      <table className="border-2 border-black border-separate border-spacing-5 mb-6">
        <thead>
          <tr>
            <th className="border-2 border-black px-4 py-2">Name</th>
            <th className="border-2 border-black px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-black px-4 py-2">Alice</td>
            <td className="border-2 border-black px-4 py-2">25</td>
          </tr>
          <tr>
            <td className="border-2 border-black px-4 py-2">Bob</td>
            <td className="border-2 border-black px-4 py-2">30</td>
          </tr>
        </tbody>
      </table>

      {/* Example 2 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 2: Different Horizontal & Vertical Spacing
      </h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`table {
  border: 2px solid black;
  border-collapse: separate;
  border-spacing: 30px 10px;
}`}
        </pre>
      </div>
      <table className="border-2 border-black border-separate border-spacing-x-8 border-spacing-y-2 mb-6">
        <thead>
          <tr>
            <th className="border-2 border-black px-4 py-2">Name</th>
            <th className="border-2 border-black px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-black px-4 py-2">Charlie</td>
            <td className="border-2 border-black px-4 py-2">22</td>
          </tr>
          <tr>
            <td className="border-2 border-black px-4 py-2">Diana</td>
            <td className="border-2 border-black px-4 py-2">27</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <code>border-spacing</code> only works with{" "}
          <code>border-collapse: separate</code>.
        </li>
        <li>
          You can set one value (same spacing both directions) or two values
          (horizontal, vertical).
        </li>
        <li>
          This property does not work with <code>border-collapse: collapse</code>
          .
        </li>
      </ul>
    </div>
  );
};

export default CSSBorderSpacing;