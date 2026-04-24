import React from "react";

const ExternalCSS = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">External CSS</h1>

      <p className="mb-4">
        <strong>External CSS</strong> is used to apply styles to multiple HTML
        pages by linking an external stylesheet file. This makes the code more
        organized, reusable, and easier to maintain.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <p className="mb-2">
        You need to use the{" "}
        <code className="bg-gray-200 px-1 rounded">&lt;link&gt;</code> tag inside
        the <code>&lt;head&gt;</code> section of your HTML file:
      </p>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-600">&lt;head&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;link</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span> <span className="text-red-500">href</span>=<span className="text-green-700">"styles.css"</span><span className="text-blue-600">&gt;</span><br />
    <span className="text-blue-600">&lt;/head&gt;</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example</h2>
      <p className="mb-2">HTML file:</p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span><br />
    <span className="text-blue-600">&lt;html&gt;</span><br /><br />

    <span className="text-blue-600">&lt;head&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;title&gt;</span>External CSS Example<span className="text-blue-600">&lt;/title&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;link</span> <span className="text-red-500">rel</span>=<span className="text-green-700">"stylesheet"</span> <span className="text-red-500">href</span>=<span className="text-green-700">"styles.css"</span><span className="text-blue-600">&gt;</span><br />
    <span className="text-blue-600">&lt;/head&gt;</span><br /><br />

    <span className="text-blue-600">&lt;body&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>This is a Heading<span className="text-blue-600">&lt;/h1&gt;</span><br />
    &nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>This is a paragraph styled with External CSS.<span className="text-blue-600">&lt;/p&gt;</span><br />
    <span className="text-blue-600">&lt;/body&gt;</span><br />

    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

      <p className="text-gray-700 mb-2">CSS file (<code>styles.css</code>):</p>
    <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-blue-600">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">p</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">18px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">green</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

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
         <strong>Best Practice:</strong> Use External CSS for medium and large
        projects since it improves reusability and maintainability of code.
      </p>
    </div>
  );
};

export default ExternalCSS;