import React from "react";

export default function PseudoElements() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        CSS Pseudo-elements
      </h1>

      {/* Intro */}
      <p className="mb-4 text-gray-700">
        CSS <span className="font-mono">pseudo-elements</span> ka use ek element
        ke specific part ko style karne ke liye hota hai. Ye naya DOM element
        add nahi karte, sirf style lagate hain.
      </p>

      {/* List */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Common Pseudo-elements</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          <code>::before</code> – Content ke pehle insert karta hai
        </li>
        <li>
          <code>::after</code> – Content ke baad insert karta hai
        </li>
        <li>
          <code>::first-letter</code> – Pehla letter style karta hai
        </li>
        <li>
          <code>::first-line</code> – Pehli line style karta hai
        </li>
        <li>
          <code>::selection</code> – Jab user text select karta hai tab style hota hai
        </li>
      </ul>

      {/* Syntax */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
        {`selector::pseudo-element {
  property: value;
}`}
      </pre>

      {/* Example 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Example 1: ::before and ::after</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto">
        {`h1::before {
  content: "🔥 ";
  color: red;
}
h1::after {
  content: " 🚀";
  color: blue;
}`}
      </pre>
      <div className="border p-4 rounded-lg mb-6">
        <h1 className="relative before:content-['🔥'] before:text-red-500 after:content-['🚀'] after:text-blue-500">
          Pseudo Elements
        </h1>
      </div>

      {/* Example 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Example 2: ::first-letter</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto">
        {`p::first-letter {
  font-size: 40px;
  color: green;
  font-weight: bold;
}`}
      </pre>
      <div className="border p-4 rounded-lg mb-6">
        <p className="first-letter:text-green-600 first-letter:text-4xl first-letter:font-bold">
          Pseudo-elements allow you to style specific parts of text.
        </p>
      </div>

      {/* Example 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Example 3: ::selection</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto">
        {`p::selection {
  background: yellow;
  color: black;
}`}
      </pre>
      <div className="border p-4 rounded-lg mb-6">
        <p className="selection:bg-yellow-300 selection:text-black">
          Select this text to see the effect.
        </p>
      </div>
    </div>
  );
}