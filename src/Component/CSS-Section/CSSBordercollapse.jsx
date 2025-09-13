import React from "react";

const CSSBorderCollapse = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        CSS Border Collapse
      </h1>

      <p className="text-gray-700 mb-4">
        The <strong>CSS border-collapse</strong> property is used to specify
        whether the borders of a table and its cells should be{" "}
        <em>separated</em> or <em>collapsed into a single border</em>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-200  p-4 rounded-lg text-sm mb-4">
        <pre>
{`table {
  border-collapse: separate | collapse;
}`}
        </pre>
      </div>

      <p className="text-gray-700 mb-4">
        - <code>separate</code> (default): Borders of table cells are separated
        with spacing. <br />
        - <code>collapse</code>: Borders of table cells are merged into a single
        border.
      </p>

      {/* Example 1: Separate (Default) */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 1: border-collapse: separate (default)
      </h2>
      <div className="bg-gray-200  p-4 rounded-lg text-sm mb-4">
        <pre>
{`table {
  border: 2px solid black;
  border-collapse: separate;
  border-spacing: 10px;
}`}
        </pre>
      </div>
      <table className="border-2 border-black border-separate border-spacing-4 mb-6">
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

      {/* Example 2: Collapse */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Example 2: border-collapse: collapse
      </h2>
      <div className="bg-gray-200  p-4 rounded-lg text-sm mb-4">
        <pre>
{`table {
  border: 2px solid black;
  border-collapse: collapse;
}`}
        </pre>
      </div>
      <table className="border-2 border-black border-collapse mb-6">
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

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <code>separate</code> is the default value, allowing{" "}
          <code>border-spacing</code>.
        </li>
        <li>
          <code>collapse</code> merges adjacent cell borders into one.
        </li>
        <li>
          When using <code>collapse</code>, the thicker border is displayed if
          two borders overlap.
        </li>
        <li>
          <code>border-spacing</code> only works when{" "}
          <code>border-collapse: separate;</code>.
        </li>
      </ul>
    </div>
  );
};

export default CSSBorderCollapse;
