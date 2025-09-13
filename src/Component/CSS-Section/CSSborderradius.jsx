import React from "react";

const CSSBorderRadius = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-blue-500">CSS Border-Radius</h1>
      <p className="text-gray-700">
        CSS <code>border-radius</code> property ka use karke hum elements ke corners ko{" "}
        <strong>round</strong> bana sakte hain. Iski madad se hum circle, oval aur rounded boxes
        design kar sakte hain.
      </p>

      {/* Example */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Example: Border-Radius</h2>
        <p className="text-gray-700">Niche diye gaye examples me alag-alag border-radius use kiya gaya hai.</p>

        <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 overflow-x-auto">
{`/* Simple rounded corners */
div {
  border: 2px solid black;
  border-radius: 15px;
}

/* Circle shape */
div {
  border: 2px solid black;
  border-radius: 50%;
}

/* Elliptical radius */
div {
  border: 2px solid black;
  border-radius: 50px 15px;
}`}
        </pre>

        {/* Live Demo */}
        <div className="grid grid-cols-3 gap-6 text-center mt-6">
          {/* Rounded Box */}
          <div className="w-28 h-28 border-2 border-black flex items-center justify-center rounded-[15px]">
            15px
          </div>

          {/* Circle */}
          <div className="w-28 h-28 border-2 border-black flex items-center justify-center rounded-full">
            Circle
          </div>

          {/* Elliptical */}
          <div
            className="w-28 h-28 border-2 border-black flex items-center justify-center"
            style={{ borderRadius: "50px 15px" }}
          >
            Elliptical
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Explanation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <code>border-radius: 15px;</code> → Har corner ko 15px round karega.
          </li>
          <li>
            <code>border-radius: 50%;</code> → Square element ko circle me convert karega.
          </li>
          <li>
            <code>border-radius: 50px 15px;</code> → Har corner pe alag-alag rounding set karega
            (top-left 50px, top-right 15px, etc.).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CSSBorderRadius;