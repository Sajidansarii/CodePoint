import React, { useState } from "react";

const JSGetElementsByTagName = () => {
  const [output, setOutput] = useState("Click the button to update elements...");

  const handleExample = () => {
    // ✅ Select all <p> elements
    const paragraphs = document.getElementsByTagName("p");

    // Loop through HTMLCollection and update each element
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.backgroundColor = "#f97316"; // Tailwind orange-500 equivalent
      paragraphs[i].style.color = "white";
      paragraphs[i].textContent = `Paragraph ${i + 1} updated!`;
    }

    setOutput(Updated` ${paragraphs.length} paragraph(s) using getElementsByTagName.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        getElementsByTagName in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>document.getElementsByTagName()</strong> method selects all
        HTML elements with the specified <strong>tag name</strong>. It returns an
        <strong> HTMLCollection</strong>, which can be looped over to manipulate
        multiple elements.
      </p>

      <button
        onClick={handleExample}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Paragraphs
      </button>

      <div className="space-y-2 mt-4">
        <p className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          Paragraph 1
        </p>
        <p className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          Paragraph 2
        </p>
        <p className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
          Paragraph 3
        </p>
      </div>

      <div className="p-4 bg-gray-200 rounded-md font-semibold text-gray-700">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Select all <p> elements
const paragraphs = document.getElementsByTagName("p");

// Loop through each paragraph and update
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "orange";
  paragraphs[i].style.color = "white";
  paragraphs[i].textContent = \✅ Paragraph \${i + 1} updated!\;
}`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>document.getElementsByTagName("tagName")</code> selects all elements of the specified tag (e.g., "p", "div", "li").
        </li>
        <li>
          Returns an <strong>HTMLCollection</strong>, which is an array-like object.
        </li>
        <li>
          Loop through the collection using <code>for</code> or <code>for...of</code> to manipulate each element.
        </li>
        <li>
          Useful for updating *all elements of a certain type* at once.
        </li>
      </ul>
    </div>
  );
};

export default JSGetElementsByTagName;