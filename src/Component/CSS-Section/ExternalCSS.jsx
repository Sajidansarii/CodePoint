import React from "react";

const ExternalCSS = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">External CSS</h1>

      <p className="text-gray-700 mb-4">
        <strong>External CSS</strong> is used to apply styles to multiple HTML
        pages by linking an external stylesheet file. This makes the code more
        organized, reusable, and easier to maintain.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <p className="text-gray-700 mb-2">
        You need to use the{" "}
        <code className="bg-gray-200 px-1 rounded">&lt;link&gt;</code> tag inside
        the <code>&lt;head&gt;</code> section of your HTML file:
      </p>
      <div className="bg-gray-200  p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <pre>
{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example</h2>
      <p className="text-gray-700 mb-2">HTML file:</p>
      <div className="bg-gray-200  p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <pre>
{`<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph styled with External CSS.</p>
</body>
</html>`}
        </pre>
      </div>

      <p className="text-gray-700 mb-2">CSS file (<code>styles.css</code>):</p>
      <div className="bg-gray-200  p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <pre>
{`h1 {
  color: blue;
  text-align: center;
}

p {
  font-size: 18px;
  color: green;
}`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Output</h2>
      <div className="border p-4 bg-white rounded-lg mb-6">
        <h1 style={{ color: "blue", textAlign: "center" }}>This is a Heading</h1>
        <p style={{ fontSize: "18px", color: "green" }}>
          This is a paragraph styled with External CSS.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Advantages</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Can be reused across multiple HTML pages.</li>
        <li>Keeps HTML files clean and separate from styles.</li>
        <li>Easier to maintain and update styles in large projects.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Disadvantages</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Requires an extra HTTP request to fetch the CSS file.</li>
        <li>If the CSS file is missing, the page will look unstyled.</li>
      </ul>

      <p className="text-gray-700">
        👉 <strong>Best Practice:</strong> Use External CSS for medium and large
        projects since it improves reusability and maintainability of code.
      </p>
    </div>
  );
};

export default ExternalCSS;