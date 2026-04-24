import React from "react";

export default function PseudoElements() {
  return (
    <div className="p-6 max-w-4xl space-y-6 mt-10">
      {/* Title */}
      <h1 className="text-3xl font-medium mb-4 text-blue-500">
        CSS Pseudo-elements
      </h1>

      {/* Intro */}
      <p className="mb-4">
        CSS <span className="font-mono">pseudo-elements</span> ka use ek element
        ke specific part ko style karne ke liye hota hai. Ye naya DOM element
        add nahi karte, sirf style lagate hain.
      </p>

      {/* List */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Common Pseudo-elements</h2>
      <ul className="list-[square] list-inside mb-6">
        <li>
          <code>before</code> – Content ke pehle insert karta hai
        </li>
        <li>
          <code>after</code> – Content ke baad insert karta hai
        </li>
        <li>
          <code>first-letter</code> – Pehla letter style karta hai
        </li>
        <li>
          <code>first-line</code> – Pehli line style karta hai
        </li>
        <li>
          <code>selection</code> – Jab user text select karta hai tab style hota hai
        </li>
      </ul>

      {/* Syntax */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>
    <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">selector::pseudo-element</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">property</span>: <span className="text-green-700">value</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      {/* Example 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Example 1: ::before and ::after</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mb-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">h1::before</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">content</span>: <span className="text-green-700">"Head"</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">red</span>;<br />
    <span>{'}'}</span><br /><br />

    <span className="text-blue-600">h1::after</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">content</span>: <span className="text-green-700">"Paragraph"</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">blue</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <div className="border p-4 rounded-lg mb-6">
        <h1 className="relative before:content-['Head'] before:text-red-500 after:content-['Paragraph'] after:text-blue-500">
          Pseudo Elements
        </h1>
      </div>

      {/* Example 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Example 2: ::first-letter</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mb-5 mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p::first-letter</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">font-size</span>: <span className="text-green-700">40px</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">green</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">font-weight</span>: <span className="text-green-700">bold</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <div className="border p-4 rounded-lg mb-6">
        <p className="first-letter:text-green-600 first-letter:text-4xl first-letter:font-bold">
          Pseudo-elements allow you to style specific parts of text.
        </p>
      </div>

      {/* Example 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Example 3: ::selection</h2>
     <pre className="bg-gray-200 p-4 rounded-lg mb-5 mt-5 overflow-x-auto max-w-full whitespace-pre-wrap">
  <code>
    <span className="text-blue-600">p::selection</span> <span>{'{'}</span><br />
    &nbsp;&nbsp;<span className="text-red-500">background</span>: <span className="text-green-700">yellow</span>;<br />
    &nbsp;&nbsp;<span className="text-red-500">color</span>: <span className="text-green-700">black</span>;<br />
    <span>{'}'}</span>
  </code>
</pre>

      <div className="border p-4 rounded-lg mb-6">
        <p className="selection:bg-yellow-300 selection:text-black">
          Select this text to see the effect.
        </p>
      </div>
    </div>
  );
}