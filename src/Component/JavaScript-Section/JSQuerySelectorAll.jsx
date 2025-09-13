import React, { useState } from "react";

const JSQuerySelectorAll = () => {
  const [output, setOutput] = useState("Click the button to update elements...");

  const handleExample = () => {
    // ✅ Select all elements matching the CSS selector
    const elements = document.querySelectorAll(".demo");

    elements.forEach((el, index) => {
      el.style.backgroundColor = "#f59e0b"; // Tailwind amber-500 equivalent
      el.style.color = "white";
      el.textContent = Element `${index + 1} updated!`;
    });

    setOutput(Updated `${elements.length} element(s) using querySelectorAll.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        querySelectorAll in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>document.querySelectorAll()</strong> method returns a
        <strong> NodeList</strong> of all elements that match a specified
        <strong> CSS selector</strong>. It allows you to manipulate multiple
        elements at once.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Elements
      </button>

      <div className="space-y-2 mt-4">
        <div className="demo p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          Element 1
        </div>
        <div className="demo p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          Element 2
        </div>
        <div className="demo p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          Element 3
        </div>
      </div>

      <div className="p-4 bg-gray-200 rounded-md font-semibold text-gray-700">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Select all elements with class "demo"
const elements = document.querySelectorAll(".demo");

// Loop through NodeList and update
elements.forEach((el, index) => {
  el.style.backgroundColor = "amber";
  el.style.color = "white";
  el.textContent = \✅ Element \${index + 1} updated!\;
});`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>document.querySelectorAll("selector")</code> selects all elements that match the CSS selector.
        </li>
        <li>
          Returns a <strong>NodeList</strong>, which can be looped with <code>forEach</code>.
        </li>
        <li>
          Supports *IDs (#id), **classes (.class), **tags (tag)*, and complex selectors.
        </li>
        <li>
          Allows updating multiple elements simultaneously in the DOM.
        </li>
      </ul>
    </div>
  );
};

export default JSQuerySelectorAll;