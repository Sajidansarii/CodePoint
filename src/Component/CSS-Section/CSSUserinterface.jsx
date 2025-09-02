import React from "react";

const CssUserInterface = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800">
        CSS User Interface (UI)
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto">
        CSS <strong>User Interface (UI)</strong> properties ka use elements ke 
        interaction ko improve karne ke liye kiya jata hai. Inse hum cursor, 
        resize behavior, aur focus outlines ko control kar sakte hain.
      </p>

      {/* 1. Cursor */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">1️⃣ Cursor Property</h2>
        <p className="text-gray-700">
          <code>cursor</code> property set karti hai ki jab mouse element par 
          hover ho to pointer kaise dikhe.
        </p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded text-sm overflow-x-auto text-left">
{`button {
  cursor: pointer;
}`}
        </pre>
        <button className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
          Hover me (Pointer Cursor)
        </button>
      </div>

      {/* 2. Resize */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">2️⃣ Resize Property</h2>
        <p className="text-gray-700">
          <code>resize</code> property allow karti hai ki user element ko drag karke 
          resize kar sake. Mostly textarea me use hoti hai.
        </p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded text-sm overflow-x-auto text-left">
{`textarea {
  resize: both;   /* vertical | horizontal | none */
  overflow: auto;
}`}
        </pre>
        <textarea
          className="border border-gray-400 p-2 w-full h-24 resize"
          placeholder="Try resizing me..."
        ></textarea>
      </div>

      {/* 3. Outline-offset */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">3️⃣ Outline-offset Property</h2>
        <p className="text-gray-700">
          <code>outline-offset</code> property element ke outline aur uske border 
          ke beech distance banati hai.
        </p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded text-sm overflow-x-auto text-left">
{`input:focus {
  outline: 2px solid blue;
  outline-offset: 5px;
}`}
        </pre>
        <input
          type="text"
          placeholder="Click to focus"
          className="border border-gray-400 p-2 focus:outline focus:outline-blue-500 focus:outline-offset-4"
        />
      </div>

      {/* 4. Nav-index */}
      <div className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">4️⃣ Nav-index Property</h2>
        <p className="text-gray-700">
          <code>nav-index</code> property navigation order set karti hai (Tab key 
          se). Ye modern browsers me support nahi hoti lekin samajhna zaruri hai.
        </p>
        <pre className="bg-gray-900 text-green-300 p-3 rounded text-sm overflow-x-auto text-left">
{`a {
  nav-index: 1;
}`}
        </pre>
        <p className="text-sm text-gray-600">
          ⚠ Note: Ye property deprecated hai aur modern browsers me kaam nahi karti.
        </p>
      </div>
    </div>
  );
};

export default CssUserInterface;