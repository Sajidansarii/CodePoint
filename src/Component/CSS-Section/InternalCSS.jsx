import React from "react";

const InternalCSS = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Internal CSS</h1>

      <p className="text-gray-700 mb-4">
        <strong>Internal CSS</strong> is used to define styles within a single
        HTML document. It is placed inside the <code>&lt;style&gt;</code> tag,
        which is written inside the <code>&lt;head&gt;</code> section of the
        HTML file.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <pre>
{`<head>
  <style>
    selector {
      property: value;
    }
  </style>
</head>`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example</h2>
      <p className="text-gray-700 mb-2">Here is an example of internal CSS:</p>
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm mb-6">
        <pre>
{`<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <style>
    h1 {
      color: blue;
      text-align: center;
    }
    p {
      font-size: 18px;
      color: green;
    }
  </style>
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph styled with Internal CSS.</p>
</body>
</html>`}
        </pre>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Output</h2>
      <div className="border p-4 bg-white rounded-lg mb-6">
        <h1 style={{ color: "blue", textAlign: "center" }}>This is a Heading</h1>
        <p style={{ fontSize: "18px", color: "green" }}>
          This is a paragraph styled with Internal CSS.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Advantages</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Styles are applied to the entire document in one place.</li>
        <li>No need for an external CSS file.</li>
        <li>Easier to test and preview in a single file.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Disadvantages</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Not reusable across multiple HTML pages.</li>
        <li>Makes the HTML file larger and less clean.</li>
        <li>Harder to maintain for big projects.</li>
      </ul>

      <p className="text-gray-700">
        👉 <strong>Best Practice:</strong> Use Internal CSS for small projects or
        when you need styles for a single page. For larger websites, it’s better
        to use <strong>External CSS</strong>.
      </p>
    </div>
  );
};

export default InternalCSS;