import React from "react";

const CssPseudoClassesDemo = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-medium text-blue-500">CSS Pseudo-Classes Demo</h1>

      {/* Hover & Focus */}
      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Hover / Focus Me
        </button>
        <input
          type="text"
          placeholder="Focus Me"
          className="px-4 py-2 border border-gray-400 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-400"
        />
      </div>

      {/* Active */}
      <button className="px-4 py-2 bg-green-500 text-white rounded active:bg-green-700">
        Active Button
      </button>

      {/* First-child / Last-child / Odd / Even */}
      <ul className="space-y-2">
        <li className="first:text-red-500 last:text-purple-500 odd:bg-gray-200 even:bg-gray-300 px-4 py-2 rounded">
          Item 1
        </li>
        <li className="first:text-red-500 last:text-purple-500 odd:bg-gray-200 even:bg-gray-300 px-4 py-2 rounded">
          Item 2
        </li>
        <li className="first:text-red-500 last:text-purple-500 odd:bg-gray-200 even:bg-gray-300 px-4 py-2 rounded">
          Item 3
        </li>
        <li className="first:text-red-500 last:text-purple-500 odd:bg-gray-200 even:bg-gray-300 px-4 py-2 rounded">
          Item 4
        </li>
      </ul>

      {/* Checked & Disabled */}
      <div className="space-x-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500 checked:accent-green-500" />
          Checked changes color
        </label>
        <input
          type="text"
          placeholder="Disabled input"
          disabled
          className="px-4 py-2 border border-gray-400 rounded disabled:bg-gray-200"
        />
      </div>

      {/* Before / After (Tailwind content plugin needed) */}
      <p className="relative before:content-['🔥'] before:absolute before:-left-6">
        Pseudo-element example
      </p>
    </div>
  );
};

export default CssPseudoClassesDemo;