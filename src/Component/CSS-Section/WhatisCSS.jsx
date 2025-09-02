import React from "react";

const WhatIsCSS = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">What is CSS?</h1>

      <p className="text-gray-700 mb-4">
        <strong>CSS</strong> stands for{" "}
        <span className="font-semibold">Cascading Style Sheets</span>. It is a
        style sheet language used to describe the{" "}
        <span className="italic">presentation</span> (look and feel) of a web
        page written in <strong>HTML</strong>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">With CSS, you can:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
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
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-6 text-sm">
        <pre>
{`<!DOCTYPE html>
<html>
<head>
  <title>What is CSS</title>
  <style>
    body {
      background-color: #f2f2f2;
      font-family: Arial, sans-serif;
    }
    h1 {
      color: #2563eb;
      text-align: center;
    }
    p {
      color: #444;
      font-size: 16px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello, CSS!</h1>
  <p>This page is styled with CSS.</p>
</body>
</html>`}
        </pre>
      </div>

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