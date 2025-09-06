import React, { useState } from "react";

const JSGetElementById = () => {
  const [output, setOutput] = useState("Click the button to see the result...");

  const handleExample = () => {
    // ✅ Access DOM element by ID
    const element = document.getElementById("demo");
    element.style.backgroundColor = "#4f46e5"; // Tailwind indigo-700 equivalent
    element.style.color = "white";
    element.textContent = "✅ Element updated using getElementById!";

    setOutput("DOM element updated successfully.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        getElementById in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>document.getElementById()</strong> method is used to select
        an HTML element by its <strong>id</strong>. Once selected, you can
        manipulate its content, styles, or attributes using JavaScript.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Element
      </button>

      <div
        id="demo"
        className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800"
      >
        This is the element with ID "demo".
      </div>

      <div className="p-4 bg-gray-200 rounded-md font-semibold text-gray-700">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Select element by ID
const element = document.getElementById("demo");

// Change background color and text
element.style.backgroundColor = "indigo";
element.style.color = "white";
element.textContent = "✅ Element updated using getElementById!";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>document.getElementById("id")</code> returns the element with
          the specified ID.
        </li>
        <li>
          Once selected, you can manipulate the element’s <code>style</code>,
          <code>textContent</code>, or other attributes.
        </li>
        <li>
          This is one of the most common ways to interact with specific elements
          in the DOM.
        </li>
        <li>
          Only one element can have a given ID, so this method returns a single
          element (or <code>null</code> if not found).
        </li>
      </ul>
    </div>
  );
};

export default JSGetElementById;