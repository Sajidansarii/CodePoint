import React from "react";

const CSSButton = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Buttons</h1>

      {/* Intro */}
      <p className="mb-4">
        Buttons are an essential part of web design, allowing users to perform
        actions like submitting forms, navigating, or triggering JavaScript
        functions. With CSS, you can style buttons to improve usability and
        create visually appealing designs.
      </p>

      {/* Syntax */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">button</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">value</span>
    <span>;</span><br />

    <span className="text-red-500">color</span>
    <span>: </span>
    <span className="text-green-700">value</span>
    <span>;</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">value</span>
    <span>;</span><br />

    <span className="text-red-500">padding</span>
    <span>: </span>
    <span className="text-green-700">value</span>
    <span>;</span><br />

    <span className="text-red-500">cursor</span>
    <span>: </span>
    <span className="text-green-700">pointer</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      {/* Basic Example */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Basic Button Example
      </h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition mb-4">
        Click Me
      </button>

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-500">button</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">blue</span>
    <span>;</span><br />

    <span className="text-red-500">color</span>
    <span>: </span>
    <span className="text-green-700">white</span>
    <span>;</span><br />

    <span className="text-red-500">padding</span>
    <span>: </span>
    <span className="text-green-700">10px 20px</span>
    <span>;</span><br />

    <span className="text-red-500">border</span>
    <span>: </span>
    <span className="text-green-700">none</span>
    <span>;</span><br />

    <span className="text-red-500">border-radius</span>
    <span>: </span>
    <span className="text-green-700">5px</span>
    <span>;</span><br />

    <span className="text-red-500">cursor</span>
    <span>: </span>
    <span className="text-green-700">pointer</span>
    <span>;</span><br />

    <span>{'}'}</span><br /><br />

    <span className="text-blue-500">button:hover</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">darkblue</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

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

     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mt-5 mb-5">
  <code>
    <span className="text-blue-500">button:disabled</span> <span>{'{'}</span><br />

    <span className="text-red-500">background-color</span>
    <span>: </span>
    <span className="text-green-700">gray</span>
    <span>;</span><br />

    <span className="text-red-500">cursor</span>
    <span>: </span>
    <span className="text-green-700">not-allowed</span>
    <span>;</span><br />

    <span className="text-red-500">opacity</span>
    <span>: </span>
    <span className="text-green-700">0.6</span>
    <span>;</span><br />

    <span>{'}'}</span>
  </code>
</pre>

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