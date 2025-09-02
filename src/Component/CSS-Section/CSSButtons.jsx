import React from "react";

const CSSButton = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">CSS Buttons</h1>

      {/* Intro */}
      <p className="text-gray-700 mb-4">
        Buttons are an essential part of web design, allowing users to perform
        actions like submitting forms, navigating, or triggering JavaScript
        functions. With CSS, you can style buttons to improve usability and
        create visually appealing designs.
      </p>

      {/* Syntax */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-4">
        <pre>
{`button {
  background-color: value;
  color: value;
  border: value;
  padding: value;
  cursor: pointer;
}`}
        </pre>
      </div>

      {/* Basic Example */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Basic Button Example
      </h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition mb-4">
        Click Me
      </button>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mb-6">
        <pre>
{`button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}`}
        </pre>
      </div>

      {/* Types of Buttons */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Different Button Styles
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Primary
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
          Secondary
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Success
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          Danger
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
          Warning
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full shadow hover:bg-purple-700 transition">
          Rounded
        </button>
        <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
          Outline
        </button>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded shadow-lg hover:opacity-90 transition">
          Gradient
        </button>
      </div>

      {/* Disabled Example */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Disabled Button
      </h2>
      <button
        className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
        disabled
      >
        Disabled
      </button>

      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm mt-4 mb-6">
        <pre>
{`button:disabled {
  background-color: gray;
  cursor: not-allowed;
  opacity: 0.6;
}`}
        </pre>
      </div>

      {/* Notes */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Use <code>:hover</code> and <code>:active</code> pseudo-classes for
          interactive effects.
        </li>
        <li>
          Rounded corners can be achieved with{" "}
          <code>border-radius</code>.
        </li>
        <li>
          Buttons can be styled with gradients, shadows, and animations for
          better design.
        </li>
        <li>
          Always ensure good contrast for accessibility.
        </li>
      </ul>
    </div>
  );
};

export default CSSButton;