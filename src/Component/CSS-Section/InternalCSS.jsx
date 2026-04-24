import React from "react";

const InternalCSS = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">Internal CSS</h1>

      <p className="mb-4">
        <strong>Internal CSS</strong> is used to define styles within a single
        HTML document. It is placed inside the <code>&lt;style&gt;</code> tag,
        which is written inside the <code>&lt;head&gt;</code> section of the
        HTML file.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Syntax</h2>
      <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;head&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">selector</span> {'{'}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">property</span>:{" "}
    <span className="text-green-700">value</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span>
    <br />

    <span className="text-blue-600">&lt;/head&gt;</span>
  </code>
</pre>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Example</h2>
      <p className="mb-2">Here is an example of internal CSS:</p>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span>
    <br />

    <span className="text-blue-600">&lt;html&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;head&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;title&gt;</span>
    Internal CSS Example
    <span className="text-blue-600">&lt;/title&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">h1</span> {'{'}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">blue</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">text-align</span>:{" "}
    <span className="text-green-700">center</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">p</span> {'{'}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">font-size</span>:{" "}
    <span className="text-green-700">18px</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">green</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/head&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;body&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;h1&gt;</span>
    This is a Heading
    <span className="text-blue-600">&lt;/h1&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;p&gt;</span>
    This is a paragraph styled with Internal CSS.
    <span className="text-blue-600">&lt;/p&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/body&gt;</span>
    <br />

    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>

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
         <strong>Best Practice:</strong> Use Internal CSS for small projects or
        when you need styles for a single page. For larger websites, it’s better
        to use <strong>External CSS</strong>.
      </p>
    </div>
  );
};

export default InternalCSS;