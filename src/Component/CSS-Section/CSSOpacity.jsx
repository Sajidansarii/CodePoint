import React from "react";

const CssOpacity = () => {
  return (
    <div className="p-6">
      <h1 className="text-22 font-bold mb-4">CSS Opacity</h1>
      <p className="mb-4">
        The <code>opacity</code> property in CSS is used to control the
        transparency of an element. It takes values from <code>0</code> (fully
        transparent) to <code>1</code> (fully visible).
      </p>

      {/* Example Boxes */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Example: Different Opacity Levels</h2>
      <div className="flex gap-4 mb-6">
        <div className="w-24 h-24 bg-blue-600 opacity-100 flex items-center justify-center text-white rounded-lg">
          1
        </div>
        <div className="w-24 h-24 bg-blue-600 opacity-75 flex items-center justify-center text-white rounded-lg">
          0.75
        </div>
        <div className="w-24 h-24 bg-blue-600 opacity-50 flex items-center justify-center text-white rounded-lg">
          0.5
        </div>
        <div className="w-24 h-24 bg-blue-600 opacity-25 flex items-center justify-center text-white rounded-lg">
          0.25
        </div>
      </div>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`div {
  opacity: 0.5; /* 50% visible */
}`}
      </pre>

      {/* Hover Example */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Hover with Opacity</h2>
      <p className="mb-4">You can create hover effects by changing opacity.</p>
      <div className="w-32 h-32 bg-green-600 flex items-center justify-center text-white rounded-lg transition duration-300 hover:opacity-50 mb-4">
        Hover Me
      </div>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`.box {
  opacity: 1;
  transition: opacity 0.3s;
}

.box:hover {
  opacity: 0.5;
}`}
      </pre>

      {/* Note Section */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Important Notes</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Opacity affects the whole element, including its text and child
          elements.
        </li>
        <li>
          To make only the <strong>background transparent</strong>, use{" "}
          <code>rgba()</code> colors instead of opacity.
        </li>
      </ul>

      {/* Example: RGBA vs Opacity */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Background Transparency (Better Alternative)</h2>
      <div className="flex gap-4">
        <div className="w-40 h-20 bg-blue-600 opacity-50 text-white flex items-center justify-center rounded-lg">
          opacity: 0.5
        </div>
        <div className="w-40 h-20 bg-[rgba(59,130,246,0.5)] text-black flex items-center justify-center rounded-lg">
          rgba(blue, 0.5)
        </div>
      </div>
    </div>
  );
};

export default CssOpacity;