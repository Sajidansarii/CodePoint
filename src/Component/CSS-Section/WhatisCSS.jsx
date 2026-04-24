import React from "react";

const WhatIsCSS = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl space-y-6 mt-10">
      <h1 className="text-3xl font-medium text-blue-500 mb-4">What is CSS?</h1>

      <p className=" mb-4">
        <strong>CSS</strong> stands for{" "}
        <span className="font-semibold">Cascading Style Sheets</span>. It is a
        style sheet language used to describe the{" "}
        <span className="italic">presentation</span> (look and feel) of a web
        page written in <strong>HTML</strong>.
      </p>

      <h2 className="text-xl font-semibold mb-2">With CSS, you can:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Change text colors and fonts</li>
        <li>Add backgrounds and borders</li>
        <li>Adjust spacing, margins, and padding</li>
        <li>Arrange elements on the page</li>
        <li>Make web pages responsive for all devices</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Use CSS?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <strong>Separation of Content and Design</strong> – HTML is for structure,
          CSS is for styling.
        </li>
        <li>
          <strong>Reusability</strong> – One CSS file can style multiple pages.
        </li>
        <li>
          <strong>Consistency</strong> – Uniform design across your entire site.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">Example:</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">&lt;!DOCTYPE html&gt;</span>
    <br />

    <span className="text-blue-600">&lt;html&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;head&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;title&gt;</span>
    What is CSS
    <span className="text-blue-600">&lt;/title&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;style&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">body</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">background-color</span>:{" "}
    <span className="text-green-700">#f2f2f2</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">font-family</span>:{" "}
    <span className="text-green-700">Arial, sans-serif</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">h1</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">#2563eb</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">text-align</span>:{" "}
    <span className="text-green-700">center</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}

    <br /><br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">p</span> {"{"}
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">color</span>:{" "}
    <span className="text-green-700">#444</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">font-size</span>:{" "}
    <span className="text-green-700">16px</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">text-align</span>:{" "}
    <span className="text-green-700">center</span>;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;{"}"}

    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">&lt;/style&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/head&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;body&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, CSS!&lt;/h1&gt;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;This page is styled with CSS.&lt;/p&gt;
    <br />

    &nbsp;&nbsp;<span className="text-blue-600">&lt;/body&gt;</span>
    <br />

    <span className="text-blue-600">&lt;/html&gt;</span>
  </code>
</pre>
      <p className="text-gray-700">
        ✅ <strong>Tip:</strong> CSS can be applied in three ways:{" "}
        <span className="italic">Inline</span>,{" "}
        <span className="italic">Internal</span>, and{" "}
        <span className="italic">External</span>.
      </p>
    </div>
  );
};

export default WhatIsCSS;