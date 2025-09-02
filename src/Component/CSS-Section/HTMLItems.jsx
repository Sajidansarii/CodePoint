import React from "react";

const HTMLItems = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-indigo-600">HTML Elements (Items)</h1>
      <p className="text-gray-700">
        HTML me <b>elements</b> (ya items) ek webpage ke building blocks hote hain. 
        Har element ek specific purpose ko define karta hai — jaise heading, paragraph, 
        image ya link.
      </p>

      {/* Example Code */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example of Common HTML Items</h2>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Items Example</title>
  </head>
  <body>
    <!-- Heading -->
    <h1>This is a Heading</h1>

    <!-- Paragraph -->
    <p>This is a paragraph describing some content.</p>

    <!-- Link -->
    <a href="https://www.codepoint.com">Visit CodePoint</a>

    <!-- Image -->
    <img src="image.jpg" alt="Sample Image">

    <!-- List -->
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>`}
        </pre>

        {/* Live Demo */}
        <div className="border-2 border-black p-6 mt-6 space-y-4">
          <h1 className="text-2xl font-bold">This is a Heading</h1>
          <p className="text-gray-700">This is a paragraph describing some content.</p>
          <a href="https://www.codepoint.com" className="text-blue-600 underline">
            Visit CodePoint
          </a>
          <img
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="w-40 rounded"
          />
          <ul className="list-disc list-inside">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><code>&lt;h1&gt;...&lt;/h1&gt;</code> → Heading banata hai.</li>
          <li><code>&lt;p&gt;...&lt;/p&gt;</code> → Paragraph text ke liye.</li>
          <li><code>&lt;a&gt;...&lt;/a&gt;</code> → Hyperlink create karta hai.</li>
          <li><code>&lt;img&gt;</code> → Image display karta hai.</li>
          <li><code>&lt;ul&gt; &lt;li&gt;</code> → List ke items show karte hain.</li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLItems;