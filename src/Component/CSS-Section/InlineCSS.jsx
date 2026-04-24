import React from "react";

const InlineCSS = () => {
  return (
    <div className="p-4 sm:p-6  max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">Inline CSS</h1>

      <p className=" mb-4">
        <strong>Inline CSS</strong> is used to apply styles directly to a single
        HTML element using the <code>style</code> attribute. It is written
        inside the opening tag of the element.
      </p>

      <h2 className="text-xl font-semibold mb-2">Syntax</h2>
   <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;tagname</span>{" "}
    <span className="text-red-500">style</span>=
    <span className="text-green-700">"property:value;"</span>
    <span className="text-blue-600">&gt;</span>
    <br />
    &nbsp;&nbsp;Content<br />
    <span className="text-blue-600">&lt;/tagname&gt;</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example</h2>
      <p className="text-gray-700 mb-2">The following example uses inline CSS:</p>
     <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;h1</span>{" "}
    <span className="text-red-500">style</span>=
    <span className="text-green-700">"color:blue; text-align:center;"</span>
    <span className="text-blue-600">&gt;</span>
    <br />
    &nbsp;&nbsp;This is an Inline CSS Example<br />
    <span className="text-blue-600">&lt;/h1&gt;</span>

    <br /><br />

    <span className="text-blue-600">&lt;p</span>{" "}
    <span className="text-red-500">style</span>=
    <span className="text-green-700">"font-size:18px; color:green;"</span>
    <span className="text-blue-600">&gt;</span>
    <br />
    &nbsp;&nbsp;Inline CSS applies styles directly on this paragraph.<br />
    <span className="text-blue-600">&lt;/p&gt;</span>
  </code>
</pre>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Output</h2>
      <div className="border p-4 bg-white rounded-lg mb-6">
        <h1 style={{ color: "blue", textAlign: "center" }}>
          This is an Inline CSS Example
        </h1>
        <p style={{ fontSize: "18px", color: "green" }}>
          Inline CSS applies styles directly on this paragraph.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Advantages</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Quick and easy to use.</li>
        <li>Useful for testing or applying a unique style to one element.</li>
        <li>No need to create a separate CSS file.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Disadvantages</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Not reusable — you need to repeat styles for every element.</li>
        <li>Makes code harder to read and maintain.</li>
        <li>Not recommended for large projects.</li>
      </ul>

      <p className="text-gray-700">
         <strong>Best Practice:</strong> Use Inline CSS only for quick tests or
        when you want to style a single element. For larger projects, use{" "}
        <strong>External CSS</strong>.
      </p>
    </div>
  );
};

export default InlineCSS;