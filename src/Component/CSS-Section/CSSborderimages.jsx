import React from "react";

const CSSBorderImage = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Border-Image</h1>
      <p className="text-gray-700">
        CSS <code>border-image</code> property ka use karke hum border ko ek normal color ke bajaye
        image se style kar sakte hain. Yeh property mainly <code>border-style</code>,{" "}
        <code>border-image-source</code>, <code>border-image-slice</code>, aur{" "}
        <code>border-image-repeat</code> ke sath use hoti hai.
      </p>

      {/* Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Border Image</h2>
        <p className="text-gray-700">
          Niche diye gaye example me ek PNG image ko border ke liye use kiya gaya hai.
        </p>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`div {
  border: 15px solid transparent;
  border-image-source: url('https://www.w3schools.com/cssref/border.png');
  border-image-slice: 30;
  border-image-repeat: round;
  border-image-width: 15px;
}`}
        </pre>

        {/* Live Demo */}
        <div className="border p-4 bg-gray-100 text-center flex justify-center mt-4">
          <div
            style={{
              border: "15px solid transparent",
              borderImageSource: "url('https://www.w3schools.com/cssref/border.png')",
              borderImageSlice: 30,
              borderImageRepeat: "round",
              borderImageWidth: "15px",
            }}
            className="w-60 h-32 flex items-center justify-center bg-white"
          >
            Border Image Example
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>border</code> → Pehle border ko set karna zaroori hai (warna image apply nahi hogi).
          </li>
          <li>
            <code>border-image-source</code> → Border ke liye kaunsi image use karni hai, wo define karta hai.
          </li>
          <li>
            <code>border-image-slice</code> → Image ko kitne parts me slice karna hai (usually 30-40).
          </li>
          <li>
            <code>border-image-repeat</code> → Image ko repeat ya stretch kaise karna hai (round, stretch, repeat).
          </li>
          <li>
            <code>border-image-width</code> → Image border ki width set karta hai.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSBorderImage;