import React from "react";

const CssProperties = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS Properties
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        <strong>CSS Properties</strong> woh rules hote hain jo HTML elements ki styling ko 
        control karte hain. Har property ek <em>name</em> (jaise color, font-size, margin) 
        aur ek <em>value</em> (jaise red, 20px, auto) rakhti hai.
      </p>

      {/* Example Section */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <h2 className="text-xl font-semibold">🔹 Basic Example</h2>
        <p className="text-gray-700">
          Niche ke example me alag-alag CSS properties ka use dikhaya gaya hai:
        </p>

        {/* CSS Code */}
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-x-auto text-left">
{`/* CSS Properties Example */
h1 {
  color: blue;            /* Text ka color set karta hai */
  font-size: 32px;        /* Font size set karta hai */
  text-align: center;     /* Text alignment control karta hai */
}

p {
  color: gray;            /* Paragraph text ka color */
  line-height: 1.6;       /* Lines ke beech ka gap */
  margin-top: 10px;       /* Upar ka space */
}
`}
        </pre>

        {/* Live Demo */}
        <div className="space-y-4 p-6 border rounded bg-gray-100">
          <h1 className="text-blue-600 text-3xl text-center">This is a Heading</h1>
          <p className="text-gray-600 leading-relaxed mt-2">
            This is a paragraph styled with different CSS properties like{" "}
            <code>color</code>, <code>line-height</code>, and <code>margin</code>.
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">📝 Explanation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>color:</strong> text ka color change karta hai.
          </li>
          <li>
            <strong>font-size:</strong> text ka size set karta hai (px, em, rem units).
          </li>
          <li>
            <strong>text-align:</strong> text ko left, right ya center me align karta hai.
          </li>
          <li>
            <strong>line-height:</strong> lines ke beech vertical spacing control karta hai.
          </li>
          <li>
            <strong>margin:</strong> element ke bahar ka space set karta hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CssProperties;