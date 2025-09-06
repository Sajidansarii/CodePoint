import React, { useState } from "react";

const JSDOMExample = () => {
  const [output, setOutput] = useState("");

  const handleExample = () => {
    // ✅ Accessing DOM element
    const div = document.getElementById("demo");
    div.style.color = "white";
    div.style.backgroundColor = "blue";
    div.textContent = "✅ DOM Updated Successfully!";

    setOutput("DOM manipulation done using JavaScript.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        DOM in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>DOM (Document Object Model)</strong> represents the structure
        of an HTML document as a tree of objects. JavaScript can interact with
        the DOM to manipulate content, attributes, styles, and handle events.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update DOM Example
      </button>

      <div
        id="demo"
        className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800"
      >
        Click the button to update this DOM element.
      </div>

      <div className="p-4 bg-gray-200 rounded-md font-semibold text-gray-700">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Accessing DOM element by ID
const div = document.getElementById("demo");

// Modifying styles
div.style.color = "white";
div.style.backgroundColor = "blue";

// Changing content
div.textContent = "✅ DOM Updated Successfully!";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          The <code>document.getElementById()</code> method retrieves a DOM
          element by its ID.
        </li>
        <li>
          We can modify the element’s <code>style</code> properties dynamically.
        </li>
        <li>
          <code>textContent</code> allows us to change the visible text of the element.
        </li>
        <li>
          This demonstrates how JavaScript can *manipulate the DOM* in real-time.
        </li>
      </ul>
    </div>
  );
};

export default JSDOMExample;