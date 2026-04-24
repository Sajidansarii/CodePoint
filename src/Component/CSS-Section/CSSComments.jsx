import React from "react";

const CSSComments = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">CSS Comments</h1>

      <p className=" mb-4">
        <strong>CSS Comments</strong> are used to explain the code and make it
        more readable. Comments are ignored by the browser and do not affect the
        output of the code.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Syntax</h2>
      <p className="mb-2">
        A CSS comment starts with{" "}
        <code className="bg-gray-200 px-1 rounded">/*</code> and ends with{" "}
        <code className="bg-gray-200 px-1 rounded">*/</code>.
      </p>
     <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-gray-500">/* This is a CSS comment */</span><br />

    <span className="text-blue-500">p</span> <span>{'{'}</span><br />

    &nbsp;&nbsp;<span className="text-red-500">color</span>
    <span>: </span>
    <span className="text-green-700">blue</span>
    <span>;</span>
    <span className="text-gray-500"> /* This is an inline comment */</span><br />

    <span>{'}'}</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example</h2>
      <p className="text-gray-700 mb-2">CSS file (<code>styles.css</code>):</p>
      <pre className="bg-gray-200 p-4 rounded-lg overflow-x-auto max-w-full whitespace-pre-wrap mb-5">
  <code>
    <span className="text-gray-500">/* Style for heading */</span><br />

    <span className="text-blue-500">h1</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">red</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">text-align</span>: <span className="text-green-700">center</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-gray-500">/* Style for paragraph */</span><br />

    <span className="text-blue-500">p</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">18px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">green</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

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