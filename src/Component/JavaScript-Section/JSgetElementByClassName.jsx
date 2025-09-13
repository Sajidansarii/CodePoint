import React, { useState } from "react";

const JSGetElementsByClassName = () => {
  const [output, setOutput] = useState("Click the button to update elements...");

  const handleExample = () => {
    // ✅ Select all elements with the class "demo"
    const elements = document.getElementsByClassName("demo");

    // Loop through HTMLCollection and update each element
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#16a34a"; // Tailwind green-600 equivalent
      elements[i].style.color = "white";
      elements[i].textContent = ` Element ${i + 1} updated!`;
    }

    setOutput(Updated `${elements.length} element(s) using getElementsByClassName.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        getElementsByClassName in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>document.getElementsByClassName()</strong> method selects
        all HTML elements that have the specified <strong>class</strong>. It
        returns an <strong>HTMLCollection</strong>, which can be looped over to
        manipulate multiple elements.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Elements
      </button>

      <div className="space-y-2">
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
{`// Select all elements with the class "demo"
const elements = document.getElementsByClassName("demo");

// Loop through each element and update
for (let i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor = "green";
  elements[i].style.color = "white";
  elements[i].textContent = \✅ Element \${i + 1} updated!\;
}`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>document.getElementsByClassName("className")</code> selects all elements with the given class.
        </li>
        <li>
          It returns an <strong>HTMLCollection</strong>, which is array-like but not an array.
        </li>
        <li>
          Loop through the collection using <code>for</code> or <code>for...of</code> to manipulate each element.
        </li>
        <li>
          Useful for updating *multiple elements at once* based on their class.
        </li>
      </ul>
    </div>
  );
};

export default JSGetElementsByClassName;