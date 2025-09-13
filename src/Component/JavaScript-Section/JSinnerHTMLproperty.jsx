import React, { useState } from "react";

const JSInnerHTML = () => {
  const [output, setOutput] = useState("Click the button to change content...");

  const handleExample = () => {
    // ✅ Select the element by ID
    const element = document.getElementById("demo");

    // Update innerHTML
    element.innerHTML = "<strong>✅ Content updated using innerHTML!</strong>";

    setOutput("The innerHTML property updated the element content.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        innerHTML Property in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>innerHTML</strong> property allows you to get or set the
        HTML content of an element. You can insert HTML tags and text dynamically.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Content
      </button>

      <div
        id="demo"
        className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800"
      >
        This is the original content of the element.
      </div>

      <div className="p-4 bg-gray-200 rounded-md font-semibold text-gray-700">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Select element by ID
const element = document.getElementById("demo");

// Set HTML content
element.innerHTML = "<strong>✅ Content updated using innerHTML!</strong>";`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>innerHTML</code> can be used to read or modify the HTML content of an element.
        </li>
        <li>
          Supports both *text* and *HTML tags*, allowing rich content insertion.
        </li>
        <li>
          Be careful when inserting content from user input to avoid *XSS (cross-site scripting)* attacks.
        </li>
        <li>
          Example usage includes dynamically updating sections, paragraphs, or divs on the page.
        </li>
      </ul>
    </div>
  );
};

export default JSInnerHTML;