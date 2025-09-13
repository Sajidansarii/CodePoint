import React, { useState } from "react";

const JSQuerySelector = () => {
  const [output, setOutput] = useState("Click the button to update the element...");

  const handleExample = () => {
    // ✅ Select the first element matching the CSS selector
    const element = document.querySelector(".demo");

    element.style.backgroundColor = "#6366f1"; // Tailwind indigo-500 equivalent
    element.style.color = "white";
    element.textContent = "✅ Element updated using querySelector!";

    setOutput("querySelector successfully updated the element.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        querySelector in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>document.querySelector()</strong> method returns the first
        HTML element that matches a specified <strong>CSS selector</strong>. It is
        more flexible than methods like <code>getElementById</code> or
        <code>getElementsByClassName</code>.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Element
      </button>

      <div className="space-y-2 mt-4">
        <div className="demo p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          This element has the class "demo".
        </div>
        <div className="demo p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          Another element with class "demo".
        </div>
      </div>

      <div className="p-4 bg-gray-200 rounded-md font-semibold text-gray-700">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Select the first element with class "demo"
const element = document.querySelector(".demo");

// Modify style and content
element.style.backgroundColor = "indigo";
element.style.color = "white";
element.textContent = "✅ Element updated using querySelector!";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>document.querySelector("selector")</code> selects the first element that matches a CSS selector.
        </li>
        <li>
          Supports *IDs (#id), **classes (.class), **tags (tag)*, and more complex selectors.
        </li>
        <li>
          Returns a single element, unlike <code>querySelectorAll</code> which returns a NodeList of all matches.
        </li>
        <li>
          Allows direct manipulation of style, content, or attributes after selection.
        </li>
      </ul>
    </div>
  );
};

export default JSQuerySelector;