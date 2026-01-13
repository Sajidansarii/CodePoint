import React from "react";

const HowToAddCSS = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">How to Add CSS</h1>

      <p className="mb-4">
        CSS can be added to HTML in <strong>three different ways</strong>. Each
        method has its own use case depending on the project size and structure.
      </p>

      {/* Inline CSS */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Inline CSS</h2>
      <p className="mb-2">
        Inline CSS is used to apply a unique style directly to a single element.
        It is written inside the <code>style</code> attribute of an HTML tag.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
{`<h1 style="color:blue; text-align:center;">
  This is an inline styled heading
</h1>`}
        </code>
      </pre>

      {/* Internal CSS */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Internal CSS</h2>
      <p className="mb-2">
        Internal CSS is used to style a single HTML page. It is written inside
        the <code>&lt;style&gt;</code> tag within the <code>&lt;head&gt;</code> section.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
{`<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightyellow;
    }
    h1 {
      color: green;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Internal CSS Example</h1>
</body>
</html>`}
        </code>
      </pre>

      {/* External CSS */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">3. External CSS</h2>
      <p className="text-gray-700 mb-2">
        External CSS is used to style multiple pages by linking an external
        <code>.css</code> file to your HTML document. This is the most common
        and recommended method for large projects.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
{`/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
h1 {
  color: navy;
  text-align: center;
}`}</code>
      </pre>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
        <code>
{`<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>External CSS Example</h1>
</body>
</html>`}
        </code>
      </pre>

      {/* Summary */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <strong>Inline CSS:</strong> Styles one element, quick but not reusable.
        </li>
        <li>
          <strong>Internal CSS:</strong> Styles a single page, written in{" "}
          <code>&lt;style&gt;</code>.
        </li>
        <li>
          <strong>External CSS:</strong> Best practice, reusable across multiple pages.
        </li>
      </ul>

      <p className="text-gray-700">
         For professional projects, always prefer{" "}
        <strong>External CSS</strong> to keep your code clean and maintainable.
      </p>
    </div>
  );
};

export default HowToAddCSS;