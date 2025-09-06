import React, { useState } from "react";

const JSInnerText = () => {
  const [output, setOutput] = useState("Click the button to change text...");

  const handleExample = () => {
    // ✅ Select the element by ID
    const element = document.getElementById("demo");

    // Update innerText
    element.innerText = "✅ Text updated using innerText!";

    setOutput("The innerText property updated the element content.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        innerText Property in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>innerText</strong> property allows you to get or set the
        visible text content of an element. Unlike <code>innerHTML</code>, it
        only works with text and ignores HTML tags.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Text
      </button>

      <div
        id="demo"
        className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800"
      >
        This is the original text of the element.
      </div>

      <div className="p-4 bg-gray-200 rounded-md font-semibold text-gray-700">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Select element by ID
const element = document.getElementById("demo");

// Set text content
element.innerText = "✅ Text updated using innerText!";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>innerText</code> updates or retrieves only the visible text of an element.
        </li>
        <li>
          Ignores HTML tags inside the element — everything is treated as plain text.
        </li>
        <li>
          Useful when you want to update *text content without affecting HTML structure*.
        </li>
        <li>
          Safer than <code>innerHTML</code> if you don’t want to risk inserting HTML or scripts.
        </li>
      </ul>
    </div>
  );
};

export default JSInnerText;