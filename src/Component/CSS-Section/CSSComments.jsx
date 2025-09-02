import React from "react";

const CSSComments = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">CSS Comments</h1>

      <p className="text-gray-700 mb-4">
        <strong>CSS Comments</strong> are used to explain the code and make it
        more readable. Comments are ignored by the browser and do not affect the
        output of the code.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <p className="text-gray-700 mb-2">
        A CSS comment starts with{" "}
        <code className="bg-gray-200 px-1 rounded">/*</code> and ends with{" "}
        <code className="bg-gray-200 px-1 rounded">*/</code>.
      </p>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <pre>
{`/* This is a CSS comment */
p {
  color: blue;  /* This is an inline comment */
}`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example</h2>
      <p className="text-gray-700 mb-2">CSS file (<code>styles.css</code>):</p>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <pre>
{`/* Style for heading */
h1 {
  color: red;
  text-align: center;
}

/* Style for paragraph */
p {
  font-size: 18px;
  color: green;
}`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Output</h2>
      <div className="border p-4 bg-white rounded-lg mb-6">
        <h1 style={{ color: "red", textAlign: "center" }}>This is a Heading</h1>
        <p style={{ fontSize: "18px", color: "green" }}>
          This is a paragraph styled with CSS comments in the stylesheet.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Why Use Comments?
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>To explain sections of code for better understanding.</li>
        <li>To temporarily disable parts of CSS while debugging.</li>
        <li>To make collaboration easier in team projects.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Important Notes</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          CSS comments <strong>cannot be nested</strong> (you cannot put one
          comment inside another).
        </li>
        <li>Always use comments for large projects to maintain clean code.</li>
      </ul>
    </div>
  );
};

export default CSSComments;