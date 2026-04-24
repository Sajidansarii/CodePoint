import React from "react";

const CSSBorderSpacing = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">
        CSS Border Spacing
      </h1>

      <p className="mb-4">
        The <strong>CSS border-spacing</strong> property is used to set the
        space <em>between cells</em> in a table when{" "}
        <code>border-collapse: separate</code> is applied.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-500">table</span> <span>{'{'}</span><br />

    <span className="text-red-500">border-spacing</span>
    <span>: </span>
    <span className="text-green-700">length | length length</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

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
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">table</span> <span>{'{'}</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">2px solid black</span>
    <span>;</span><br />

    <span className="text-red-500">border-collapse</span>
    <span>: </span>
    <span className="text-green-700">separate</span>
    <span>;</span><br />

    <span className="text-red-500">border-spacing</span>
    <span>: </span>
    <span className="text-green-700">20px</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

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
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">table</span> <span>{'{'}</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">2px solid black</span>
    <span>;</span><br />

    <span className="text-red-500">border-collapse</span>
    <span>: </span>
    <span className="text-green-700">separate</span>
    <span>;</span><br />

    <span className="text-red-500">border-spacing</span>
    <span>: </span>
    <span className="text-green-700">30px 10px</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

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